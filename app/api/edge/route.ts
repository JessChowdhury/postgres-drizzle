import { NextResponse } from 'next/server'

export const runtime = 'edge';

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({message: 'data from edge'},{ status: 200 })
}
