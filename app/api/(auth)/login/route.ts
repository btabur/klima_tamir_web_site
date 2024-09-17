import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import User from "../../../lib/modals/user";
import connect from '../../../lib/db';


// login     endpoint:  /api/login
export const POST = async(request:Request)=> {

    try {

        const body = await request.json();
        const {email,password} = body;
        await connect();

        const user = await User.findOne({email});

        if(!user) {
            return new NextResponse(JSON.stringify({message:"Böyle bir kullanıcı yok"}),{status:400});
        }
        const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid) {
            return new NextResponse(JSON.stringify({message:"Geçersiz şifre"}),{status:400});
        }
        return new NextResponse(JSON.stringify({message:"Giriş Başarılı",user}),{status:200})
        
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"Giriş yapılamadı",error}),{status:500});
    }

}