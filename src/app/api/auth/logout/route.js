import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: 'Logged out successfully' },
      { status: 200 }
    );

    // Hapus cookie auth_token
    response.cookies.delete('auth_token');

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: 'Error logging out' },
      { status: 500 }
    );
  }
}