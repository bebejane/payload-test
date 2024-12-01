import { locales, localePrefix } from './i18n/navigation';
import { defaultLocale } from './i18n';
import createMiddleware from 'next-intl/middleware';
import { betterFetch } from '@better-fetch/fetch';
import { NextResponse, type NextRequest } from "next/server";
import type { Session } from "@/auth";

const intlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  localeDetection: false,
});

const protectedRoutes = ["/member"];
const publicRoutes = ["/"];
const authRoutes = ["/sign-in", "/sign-up"];
const passwordRoutes = ["/reset-password", "/forgot-password"];
const adminRoutes = ["/admin"];

export default async function authMiddleware(request: NextRequest) {
  intlMiddleware(request);

  const pathName = request.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(pathName);
  const isProtectedRoute = protectedRoutes.includes(pathName);
  const isAuthRoute = authRoutes.includes(pathName);
  const isPasswordRoute = passwordRoutes.includes(pathName);
  const isAdminRoute = adminRoutes.includes(pathName);
  console.log('midleware')
  if (isPublicRoute)
    return NextResponse.next();

  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: process.env.NEXT_PUBLIC_SITE_URL,
      headers: {
        //get the cookie from the request
        cookie: request.headers.get("cookie") || "",
      },
    },
  );
  console.log(session)

  if (!session) {
    if (isAuthRoute || isPasswordRoute) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (isAuthRoute || isPasswordRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isAdminRoute && session.user.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|admin|.*\\..*).*)',
  ]
};
