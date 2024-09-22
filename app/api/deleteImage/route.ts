import { NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from "path";

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const { imageUrl } = body;

        if (!imageUrl) {
            return NextResponse.json({ message: 'No image URL provided' }, { status: 400 });
        }

        // Dosya adını URL'den çıkar
        const fileName = path.basename(imageUrl);
        const imagePath = path.join(process.cwd(), 'public', 'uploads', fileName);

        await fs.unlink(imagePath);
        return NextResponse.json({ message: 'Image deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting image:', error);
        return NextResponse.json({ message: 'Failed to delete image', error: (error as Error).message }, { status: 500 });
    }
}
