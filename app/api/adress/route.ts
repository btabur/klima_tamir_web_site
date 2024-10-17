import { NextResponse } from "next/server";
import connect from "../../lib/db";

import Adress from "../../lib/modals/adress"
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId


// create adress   endpoint: /api/adress
export const POST = async(request:Request)=> {

    try {

        const body = await request.json();
        const {name,city,town,mah,description,phone,userId} = body;
        if(!name ||!city || !town || !description ||!mah || !phone || !userId ) {
            return new NextResponse(JSON.stringify({message:"Tüm bilgileri eksiksiz girin"}),{status:400});
        }
    
        await connect();
    
        if(!Types.ObjectId.isValid(userId)) {
          return new NextResponse(JSON.stringify({message:"Geçersiz user Id si"}),{status:400})
        }
        const newAdress = new Adress({name,city,town,mah,description,phone,userId})
        await newAdress.save();

        return new NextResponse(JSON.stringify({message:"Adres oluşturuldu",adres:newAdress}),{status:201});
        
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"Sunucu hatası oluştu",error}),{status:500});
    }
   

    
}

   //get  adress by id and return adress or all adress
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const userId = searchParams.get("userId");
	const adressId = searchParams.get("adressId");

	if (userId) {
        // get adress by userId
		try {
            await connect();
			const adress = await Adress.find({ userId: userId });
			if (!adress || adress.length === 0) {
				return new NextResponse(JSON.stringify({ message: "adres bulunamadı" }), { status: 404 });
			}
			return NextResponse.json(adress);
		} catch (error) {
			return new NextResponse(`adresi alırken bir hata oldu: ${error}`, { status: 500 });
		}
	} else if(adressId) {
        	// get adres by adresId
		try {
			await connect();
            const adress = await Adress.findById(new Types.ObjectId(adressId));
			if (!adress || adress.length === 0) {
				return new NextResponse(JSON.stringify({ message: "adres bulunamadı" }), { status: 404 });
			}
			return NextResponse.json(adress);
		} catch (error) {
			return new NextResponse(`adresi alırken bir hata oldu: ${error}`, { status: 500 });
		}
    }else {
		// get all categories
		try {
			await connect();
			const adresss = await Adress.find();
			return NextResponse.json(adresss);
		} catch (error) {
			return new NextResponse(`adresleri alırken bir hata oldu: ${error}`, { status: 500 });
		}
	}
}

 //update adress   // isteğe bağlı olarak sadeceşehir, ilçe veya diğerlerini günceller
 export const PATCH = async (request: Request) => {
    try {
      const body = await request.json();
      const { adressId,name, city, town,mah,description,phone } = body;
  
      if (!adressId) {
        return new NextResponse(
          JSON.stringify({ message: "Id gerekli" }),
          { status: 400 }
        );
      }
  
      await connect();
  
      // Geçerli bir ObjectId olup olmadığını kontrol edin
      if (!Types.ObjectId.isValid(adressId)) {
        return new NextResponse(
          JSON.stringify({ message: "geçersiz Id" }),
          { status: 400 }
        );
      }
  
      // Güncellenecek alanları dinamik olarak ayarla
      const updateFields: any = {};
      if (name) {
        updateFields.name = name; // Sadece yeni bir isim varsa name alanını güncelle
      }
      if (city) {
        updateFields.city = city; // Sadece yeni bir isim varsa name alanını güncelle
      }
      if (town) {
        updateFields.town = town; // Sadece yeni bir resim varsa image alanını güncelle
      }
      if (mah) {
        updateFields.mah = mah; // Sadece yeni bir isim varsa name alanını güncelle
      }
      
      if (description) {
        updateFields.description = description; // Sadece yeni bir resim varsa image alanını güncelle
      }
      if (phone) {
        updateFields.category = phone; // Sadece yeni bir resim varsa image alanını güncelle
      } 
  
      // Hiçbir alan güncellenmeyecekse hata dndr
      if (Object.keys(updateFields).length === 0) {
        return new NextResponse(
          JSON.stringify({ message: "Güncellenecek veri yok" }),
          { status: 400 }
        );
      }
  
      // Ürünü güncelle
      const updatedAdress = await Adress.findOneAndUpdate(
        { _id: new ObjectId(adressId) },
        { $set: updateFields }, // Güncelleme alanlarını dinamik olarak geç
        { new: true } // Güncellenmiş ürünü geri dndr
      );
  
      if (!updatedAdress) {
        return new NextResponse(
          JSON.stringify({ message: "Adres güncellenemedi" }),
          { status: 400 }
        );
      }
  
      return new NextResponse(
        JSON.stringify({
          message: "Adres güncellendi",
          product: updatedAdress,
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
      const adressId= searchParams.get("adressId");
      if(!adressId) {
        return new NextResponse(JSON.stringify({message:"Güncelleme için Id gerekli"}),{status:400})
      }
      if(!Types.ObjectId.isValid(adressId)) {
        return new NextResponse(JSON.stringify({message:"Geçersiz Id"}),{status:400})
      }

      await connect();

      const deletedAdress = await Adress.findByIdAndDelete(
        new Types.ObjectId(adressId)
      )

      if(!deletedAdress) {
        return new NextResponse(JSON.stringify({message:"Adres silinemedi,böyle bir adres yok"}),{status:400})
      }

      return new NextResponse(JSON.stringify({message:"Adres silindi",product:deletedAdress}),{status:200})


    } catch (error) {
      return new NextResponse(JSON.stringify({message:"Silme hatası oluştu"}),{status:500})
    }
  }