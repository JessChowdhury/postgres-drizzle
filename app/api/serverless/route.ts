import { NextResponse } from 'next/server'

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ message: 'hello serverless' }, { status: 200 })
}
