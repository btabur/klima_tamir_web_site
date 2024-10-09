import { NextResponse } from "next/server";
import connect from "../../lib/db";

import Product from "../../lib/modals/product"
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId


// create product   endpoint: /api/product
export const POST = async(request:Request)=> {

    try {

        const body = await request.json();
        const {name,image,description,price,category} = body;
        if(!name || !image || !description || !price || !category ) {
            return new NextResponse(JSON.stringify({message:"Tüm bilgileri eksiksiz girin"}),{status:400});
        }
    
        await connect();
    
        const existing = await Product.findOne({name});

        if(existing) {
            return new NextResponse(JSON.stringify({message:"Bu isimde bir ürün bulunmaktadır"}),{status:400});
        }
        if(!Types.ObjectId.isValid(category)) {
          return new NextResponse(JSON.stringify({message:"Geçersiz kategori Id si"}),{status:400})
        }
        const newProduct = new Product({name,image,description,price,category})
        await newProduct.save();

        return new NextResponse(JSON.stringify({message:"Ürün oluşturuldu",urun:newProduct}),{status:201});
        
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"Sunucu hatası oluştu",error}),{status:500});
    }
   

    
}



   //get  product by id and return product or all products
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const productId = searchParams.get("productId");

	if (productId) {
		// get product by id
		try {
			await connect();
			const product = await Product.findById(new Types.ObjectId(productId));
			if (!product) {
				return new NextResponse(JSON.stringify({ message: "Ürün bulunamadı" }), { status: 404 });
			}
			return NextResponse.json(product);
		} catch (error) {
			return new NextResponse(`Ürünü alırken bir hata oldu: ${error}`, { status: 500 });
		}
	} else {
		// get all categories
		try {
			await connect();
			const products = await Product.find();
			return NextResponse.json(products);
		} catch (error) {
			return new NextResponse(`Ürünleri alırken bir hata oldu: ${error}`, { status: 500 });
		}
	}
}


 //update product   // isteğe bağlı olarak sadece ismin veya resmi günceleyebilir veya ikisini beraber güncelleyebilir
export const PATCH = async (request: Request) => {
    try {
      const body = await request.json();
      const { productId, newName, newImage,newPrice,newDescription,newCategory } = body;
  
      if (!productId) {
        return new NextResponse(
          JSON.stringify({ message: "Id gerekli" }),
          { status: 400 }
        );
      }
  
      await connect();
  
      // Geçerli bir ObjectId olup olmadığını kontrol edin
      if (!Types.ObjectId.isValid(productId)) {
        return new NextResponse(
          JSON.stringify({ message: "geçersiz Id" }),
          { status: 400 }
        );
      }
  
      // Güncellenecek alanları dinamik olarak ayarla
      const updateFields: any = {};
      if (newName) {
        updateFields.name = newName; // Sadece yeni bir isim varsa name alanını güncelle
      }
      if (newImage) {
        updateFields.image = newImage; // Sadece yeni bir resim varsa image alanını güncelle
      }
      if (newPrice) {
        updateFields.price = newPrice; // Sadece yeni bir resim varsa image alanını güncelle
      }
      if (newDescription) {
        updateFields.description = newDescription; // Sadece yeni bir resim varsa image alanını güncelle
      }
      if (newCategory) {
        updateFields.category = newCategory; // Sadece yeni bir resim varsa image alanını güncelle
      } 
  
      // Hiçbir alan güncellenmeyecekse hata dndr
      if (Object.keys(updateFields).length === 0) {
        return new NextResponse(
          JSON.stringify({ message: "Güncellenecek veri yok" }),
          { status: 400 }
        );
      }
  
      // Ürünü güncelle
      const updatedProduct = await Product.findOneAndUpdate(
        { _id: new ObjectId(productId) },
        { $set: updateFields }, // Güncelleme alanlarını dinamik olarak geç
        { new: true } // Güncellenmiş ürünü geri dndr
      );
  
      if (!updatedProduct) {
        return new NextResponse(
          JSON.stringify({ message: "Ürün güncellenemedi" }),
          { status: 400 }
        );
      }
  
      return new NextResponse(
        JSON.stringify({
          message: "Ürün güncellendi",
          product: updatedProduct,
        }),
        { status: 200 }
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ message: "Güncelleme hatası" }),
        { status: 500 }
      );
    }
  };

export const DELETE = async(request:Request)=> {
    try {

      const {searchParams} = new URL(request.url)
      const productId= searchParams.get("productId");
      if(!productId) {
        return new NextResponse(JSON.stringify({message:"Güncelleme için Id gerekli"}),{status:400})
      }
      if(!Types.ObjectId.isValid(productId)) {
        return new NextResponse(JSON.stringify({message:"Geçersiz Id"}),{status:400})
      }

      await connect();

      const deletedProduct = await Product.findByIdAndDelete(
        new Types.ObjectId(productId)
      )

      if(!deletedProduct) {
        return new NextResponse(JSON.stringify({message:"Ürün silinemedi,böyle bir ürün yok"}),{status:400})
      }

      return new NextResponse(JSON.stringify({message:"Ürün silindi",product:deletedProduct}),{status:200})


    } catch (error) {
      return new NextResponse(JSON.stringify({message:"Silme hatası oluştu"}),{status:500})
    }
  }
  