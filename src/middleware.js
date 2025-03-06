import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Check if user is authenticated (you can check for a token in cookies/localStorage)
  const isAuthenticated = request.cookies.get('auth') === 'true';
  
  // If user is not authenticated and trying to access any page except login
  if (!isAuthenticated && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}