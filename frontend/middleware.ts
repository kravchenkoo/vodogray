import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale } from '@/constants/locales';
import { i18n } from '@/i18n-config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Exclude requests for static assets and internal Next.js files
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/next.svg') || // Add any other static files that need to be excluded
    pathname.includes('.svg') ||
    pathname.includes('.png') ||
    pathname.includes('.jpg') ||
    pathname.includes('.css') ||
    pathname.includes('.js')
  ) {
    return NextResponse.next(); // Skip middleware for static files
  }

  // Check if there is any supported locale in the pathname
  if (
    pathname.startsWith(`/${defaultLocale}/`) ||
    pathname === `/${defaultLocale}`
  ) {
    // The incoming request is for /ua/whatever, so we'll redirect to /whatever
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocale}`,
          pathname === `/${defaultLocale}` ? '/' : ''
        ),
        request.url
      )
    );
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Rewrite the request to include the default locale
    return NextResponse.rewrite(
      new URL(
        `/${defaultLocale}${pathname}${request.nextUrl.search}`,
        request.nextUrl.href
      )
    );
  }
}

export const config = {
  matcher: ['/((?!_next).*)'], // Ensure this matches only necessary routes
};
