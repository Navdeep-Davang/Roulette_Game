import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const targetTime = searchParams.get('targetTime');

    if (!targetTime) {
      return NextResponse.json({ error: 'Target time is required' }, { status: 400 });
    }

    const futureTime = new Date(targetTime);

    // Validate if the parsed date is valid
    if (isNaN(futureTime.getTime())) {
      return NextResponse.json({ error: 'Invalid target time format' }, { status: 400 });
    }

    const now = new Date();
    const timeDiff = futureTime.getTime() - now.getTime();

    if (timeDiff <= 0) {
      return NextResponse.json({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return NextResponse.json({ days, hours, minutes, seconds });
  } catch (error) {
    console.error('Error calculating time left:', error);
    return NextResponse.json({ error: 'Failed to calculate time left' }, { status: 500 });
  }
}
