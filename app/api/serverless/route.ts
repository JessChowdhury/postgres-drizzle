import { NextResponse } from 'next/server'

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({message: 'data from serverless'},{ status: 200 })
}
