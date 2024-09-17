import {NextResponse} from 'next/server';

import connect from '../../../lib/db';
import User from '../../../lib/modals/user';
import bcrypt from 'bcrypt';

//  /api/register
//create user
 export const POST=async(request:Request)=> {
    try {
        const body = await request.json();
        const{email,password,username,role}=body;

        await connect();

        const exitingUser = await User.findOne({email})
        if(exitingUser){
            return new NextResponse(JSON.stringify({message:"the email already used"}),{status:400});
        }
        // Şifrenin hash'lenmesi (şifrelenmesi)
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser= new User({email,username,role,password:hashedPassword})
        await newUser.save()

        return new NextResponse(JSON.stringify({message:"User is created",user:newUser}),{status:201});

    } catch (error) {
      return new NextResponse(JSON.stringify({message:"Error in creating user",error}),{status:500});
    }
}