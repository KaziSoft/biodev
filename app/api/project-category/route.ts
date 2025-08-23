import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/lib/mongoose';
import { ProjectCategory } from '@/models/ProjectCategory';

// Get all project categories
export async function GET() {
  try {
    await connectMongo();
    const projectCategories = await ProjectCategory.find().sort({ createdAt: -1 });
    return NextResponse.json(projectCategories, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching project categories', error }, { status: 500 });
  }
}

// Create new project category
export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const body = await req.json();
    const newProjectCategory = await ProjectCategory.create(body);
    return NextResponse.json(newProjectCategory, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ 
      message: 'Error creating project category', 
      error: error.message 
    }, { status: 500 });
  }
}