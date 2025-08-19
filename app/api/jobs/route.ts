// app/api/jobs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/lib/mongoose';
import JobPosition from '@/models/JobPosition';

// GET all jobs
export async function GET() {
  try {
    await connectMongo();
    const jobs = await JobPosition.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: jobs });
  } catch (err) {
    console.error('API GET /api/jobs error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}

// POST new job
export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const body = await req.json();

    const { title, description, location, type } = body;
    if (!title || !description || !location || !type) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    const job = await JobPosition.create(body);
    return NextResponse.json({ success: true, data: job }, { status: 201 });
  } catch (err) {
    console.error('API POST /api/jobs error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to create job' },
      { status: 500 }
    );
  }
}
