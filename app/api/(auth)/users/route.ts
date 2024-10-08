import {NextResponse} from 'next/server';

import connect from '../../../lib/db';
import User from '../../../lib/modals/user';
import { Types } from 'mongoose';


const ObjectId = require("mongoose").Types.ObjectId

//   /api/users

  //get all user
export async function GET(request:Request) {
  const { searchParams } = new URL(request.url);
	const userId = searchParams.get("userId");

	if (userId) {
		// get product by id
		try {
			await connect();
			const user = await User.findById(new Types.ObjectId(userId));
			if (!user) {
				return new NextResponse(JSON.stringify({ message: "kullanıcı bulunamadı" }), { status: 404 });
			}
			return NextResponse.json(user);
		} catch (error) {
			return new NextResponse(`kullanıcı alırken bir hata oldu: ${error}`, { status: 500 });
		}
	} else {
		// get all users
		try {
			await connect();
			const users = await User.find();
			return NextResponse.json(users);
		} catch (error) {
			return new NextResponse(`kullanıcıları alırken bir hata oldu: ${error}`, { status: 500 });
		}
	}
  }

  //update user 
  export const PATCH = async(request:Request)=> {
    try {
      const body = await request.json()
      const {userId,newUserName} = body

      await connect()

      if(!userId|| !newUserName) {
        return new NextResponse(JSON.stringify({message:"Id or userName  are required"}),{status:400})
      }

      if(!Types.ObjectId.isValid(userId)) {
        return new NextResponse(JSON.stringify({message:"İvalid userId"}),{status:400})
      }
      const updatedUser = await User.findOneAndUpdate(
        {_id:new ObjectId(userId)},
        {username:newUserName},
        {new:true}
      )

      if(!updatedUser) {
        return new NextResponse(JSON.stringify({message:"User not found or did not update successfully"}),{status:400})
      }

      return new NextResponse(JSON.stringify({message:"User Updated succesfully",user:updatedUser}),{status:200})
    } catch (error) {
      return new NextResponse(JSON.stringify({message:"Error updating"}),{status:500})
    }

  }


  export const DELETE = async(request:Request)=> {
    try {

      const {searchParams} = new URL(request.url)
      const userId= searchParams.get("userId");
      if(!userId) {
        return new NextResponse(JSON.stringify({message:"İvalid userId"}),{status:400})
      }
      if(!Types.ObjectId.isValid(userId)) {
        return new NextResponse(JSON.stringify({message:"İvalid userId"}),{status:400})
      }

      await connect();

      const deletedUser = await User.findByIdAndDelete(
        new Types.ObjectId(userId)
      )

      if(!deletedUser) {
        return new NextResponse(JSON.stringify({message:"User not found or did not delete successfully"}),{status:400})
      }

      return new NextResponse(JSON.stringify({message:"User deleted succesfully",user:deletedUser}),{status:200})


    } catch (error) {
      return new NextResponse(JSON.stringify({message:"Error deleting"}),{status:500})
    }
  }
  