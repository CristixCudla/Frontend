import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedInCookie = request.cookies.get('isLoggedIn');
  const userRoleCookie = request.cookies.get('userRole');

  const isLoggedIn = isLoggedInCookie?.value === 'true';
  const userRole = userRoleCookie?.value;

  const protectedPaths = ['/dashboardstudent', '/dashboardteacher'];
  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  // Redirecționează utilizatorii delogați care încearcă să acceseze pagini protejate
  if (!isLoggedIn && isProtectedPath) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Redirecționează utilizatorii autentificați care încearcă să acceseze pagina principală sau login
  if (isLoggedIn && (request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/login')) {
    if (userRole === 'student') {
      return NextResponse.redirect(new URL('/dashboardstudent', request.url));
    } else if (userRole === 'profesor') {
      return NextResponse.redirect(new URL('/dashboardteacher', request.url));
    }
  }

  return NextResponse.next();
}
