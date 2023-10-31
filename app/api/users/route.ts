import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export function GET() {
  return NextResponse.json(
    {
      users: [
        {
          name: 'Guillermo Rauch',
          email: 'rauchg@vercel.com',
          image:
            'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg',
        },
        {
          name: 'Lee Robinson',
          email: 'lee@vercel.com',
          image:
            'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg',
        },
        {
          name: 'Steven Tey',
          email: 'stey@vercel.com',
          image:
            'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg',
        },
      ],
    },
    {
      status: 200,
    },
  );
}