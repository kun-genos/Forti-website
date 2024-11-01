import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export function middleware(request) {
  const authToken = request.cookies.get('auth_token');

  // Check protected routes
  if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    if (!authToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      verify(authToken.value, process.env.JWT_SECRET || 'your-secret-key');
      return NextResponse.next();
    } catch (error) {
      // Token tidak valid, hapus cookie dan redirect ke login
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('auth_token');
      return response;
    }
  }

  // Prevent accessing login page when already authenticated
  if (request.nextUrl.pathname === '/admin/login') {
    if (authToken) {
      try {
        verify(authToken.value, process.env.JWT_SECRET || 'your-secret-key');
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      } catch (error) {
        // Token tidak valid, hapus cookie
        const response = NextResponse.next();
        response.cookies.delete('auth_token');
        return response;
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/dashboard/:path*', '/admin/login']
};