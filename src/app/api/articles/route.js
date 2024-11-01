import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM articles ORDER BY created_at DESC'
    );
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title');
    const description = formData.get('description');
    const content = formData.get('content');
    const author = formData.get('author');
    const category = formData.get('category');
    const image = formData.get('image');
    
    // Handle image upload here (save to filesystem/cloud storage)
    // Get image URL after upload
    
    const [result] = await pool.query(
      `INSERT INTO articles (title, slug, description, content, author, category, image)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [title, slugify(title), description, content, author, category, imageUrl]
    );

    return NextResponse.json({ id: result.insertId });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create article' },
      { status: 500 }
    );
  }
}
