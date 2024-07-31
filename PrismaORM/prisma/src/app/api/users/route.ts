import { NextResponse } from "next/server";
import { PrismaClient, User, Prisma } from '@prisma/client';
const prisma  = new PrismaClient()
export async function GET(){
    try{
        const data : User[] = await prisma.user.findMany();
        return NextResponse.json(data)
    }catch(error:any){
        console.log(error)
        return NextResponse.json(error.message)
    }
    
}
export async function POST(request:Request){
    try{
        const user : Prisma.UserCreateInput = await request.json();
        const result = await prisma.user.create({data:user})
        return NextResponse.json(result)
    }catch(error:any){
        console.log(error)
        return NextResponse.json(error.message)
    }
    
}

