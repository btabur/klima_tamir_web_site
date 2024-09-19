import { NextResponse } from "next/server";
import connect from "../../lib/db";
import Category from "../../lib/modals/category"
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId


// create category   endpoint: /api/category
export const POST = async(request:Request)=> {

    try {

        const body = await request.json();
        const {name,image} = body;
        if(!name || !image) {
            return new NextResponse(JSON.stringify({message:"Bir kategori ismi ve kategori resmi girin"}),{status:400});
        }
    
        await connect();
    
        const existing = await Category.findOne({name});

        if(existing) {
            return new NextResponse(JSON.stringify({message:"Bu isimde bir kategori bulunmaktadır"}),{status:400});
        }
        const newCategory = new Category({name,image})
        await newCategory.save();

        return new NextResponse(JSON.stringify({message:"Kategori oluşturuldu",kategori:newCategory}),{status:201});
        
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"Sunucu hatası oluştu",error}),{status:500});
    }
   

    
}


 //get all categories
 export async function GET() {
    try {
      await connect();  // MongoDB'ye bağlan
      const categories = await Category.find();  // Verileri çek
      return NextResponse.json(categories);  // Verileri JSON olarak döndür
    } catch (error) {
      return new NextResponse(`Kategorileri alırken bir hata oldu: ${error}`, { status: 500 });
    }
  }


 //update category   // isteğe bağlı olarak sadece ismin veya resmi günceleyebilir veya ikisini beraber güncelleyebilir
export const PATCH = async (request: Request) => {
    try {
      const body = await request.json();
      const { categoryId, newName, newImage } = body;
  
      if (!categoryId) {
        return new NextResponse(
          JSON.stringify({ message: "Id gerekli" }),
          { status: 400 }
        );
      }
  
      await connect();
  
      // Geçerli bir ObjectId olup olmadığını kontrol edin
      if (!Types.ObjectId.isValid(categoryId)) {
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
  
      // Hiçbir alan güncellenmeyecekse hata döndür
      if (Object.keys(updateFields).length === 0) {
        return new NextResponse(
          JSON.stringify({ message: "Güncellenecek veri yok" }),
          { status: 400 }
        );
      }
  
      // Kategoriyi güncelle
      const updatedCategory = await Category.findOneAndUpdate(
        { _id: new ObjectId(categoryId) },
        { $set: updateFields }, // Güncelleme alanlarını dinamik olarak geç
        { new: true } // Güncellenmiş kategoriyi geri döndür
      );
  
      if (!updatedCategory) {
        return new NextResponse(
          JSON.stringify({ message: "Kategori güncellenemedi" }),
          { status: 400 }
        );
      }
  
      return new NextResponse(
        JSON.stringify({
          message: "Kategori güncellendi",
          category: updatedCategory,
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
      const categoryId= searchParams.get("categoryId");
      if(!categoryId) {
        return new NextResponse(JSON.stringify({message:"Güncelleme için Id gerekli"}),{status:400})
      }
      if(!Types.ObjectId.isValid(categoryId)) {
        return new NextResponse(JSON.stringify({message:"Geçersiz Id"}),{status:400})
      }

      await connect();

      const deletedCategory = await Category.findByIdAndDelete(
        new Types.ObjectId(categoryId)
      )

      if(!deletedCategory) {
        return new NextResponse(JSON.stringify({message:"Kategori silinemedi,böyle bir kategory yok"}),{status:400})
      }

      return new NextResponse(JSON.stringify({message:"Kategori silindi",category:deletedCategory}),{status:200})


    } catch (error) {
      return new NextResponse(JSON.stringify({message:"Silme hatası oluştu"}),{status:500})
    }
  }
  