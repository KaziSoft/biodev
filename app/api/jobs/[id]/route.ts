//app/api/jobs/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/lib/mongoose';
import JobPosition from '@/models/JobPosition';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  await connectMongo();
  const job = await JobPosition.findById(params.id);
  return NextResponse.json(job);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectMongo();
  const body = await req.json();
  const job = await JobPosition.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(job);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await connectMongo();
  await JobPosition.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}