import { NextResponse } from "next/server";
import formidable from "formidable";
import { promises as fs } from 'fs';
import path from "path";

export async function POST(req: Request) {
   
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
        }

        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        await fs.mkdir(uploadDir, { recursive: true });

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const newFileName = `${uniqueSuffix}-${file.name}`;
        const newFilePath = `${uploadDir}/${newFileName}`;

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        await fs.writeFile(newFilePath, buffer);
        console.log('upload image', newFilePath);
        
        return NextResponse.json({ message: 'Image uploaded successfully', imageUrl: `/uploads/${newFileName}` });
    } catch (error) {
        console.error("upload image error", error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}