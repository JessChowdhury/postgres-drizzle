import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export const runtime = 'edge'; 
 
export function GET(request: NextRequest) {
  return NextResponse.json(
    {
      message: 'hello from edge',
    },
    {
      status: 200,
    },
  );
}