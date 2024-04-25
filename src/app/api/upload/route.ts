import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';

export async function POST(req: NextRequest) { 
    const data = await req.formData();

    const file: File | null = data.get('file') as unknown as File;

    if (!file) return NextResponse.json({ success: false });

    /* reading the contents of the uploaded file as an ArrayBuffer and
    then converting that ArrayBuffer into a Node.js Buffer. */
    const bytes: ArrayBuffer = await file.arrayBuffer();
    const buffer: Buffer = Buffer.from(bytes);

    const rootDir = process.cwd();

    const path: string = join(rootDir, 'public', file.name);
    await writeFile(path, buffer);
    console.log(`File saved to ${path}`);
    return NextResponse.json({ success: true });
}
