import {NextResponse} from 'next/server';


const data = [
    {
        "name":"ahmet",
        "age":12,
        "id":12
    },
    {
        "name":"veli",
        "age":15,
        "id":13
    }

]


export async function GET(request:Request,context:any) {
    const {params}= context;
    const user= data.filter(x=>params.userId===x.id.toString())
    return NextResponse.json({
       user 
    })
    
}