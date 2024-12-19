import { routing } from '@/i18n/routing'
import createMiddleware from 'next-intl/middleware';
import { betterFetch } from '@better-fetch/fetch';
import { NextResponse, type NextRequest } from "next/server";
import type { Session } from "@/auth/auth";

const intlMiddleware = createMiddleware({
  locales: routing.locales,
  localePrefix: routing.localePrefix,
  defaultLocale: routing.defaultLocale,
  localeDetection: false,
});

const protectedRoutes = ["/member"];
const authRoutes = ["/sign-in", "/sign-up", "/sign-out", "/forgot-password"];
const passwordRoutes = ["/reset-password"];
const payloadRoutes = ["/admin"];

const betterAuthMiddleware = async (request: NextRequest) => {

  const pathname = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isAuthRoute = authRoutes.includes(pathname);
  const isPasswordRoute = passwordRoutes.includes(pathname);
  const isAdminRoute = payloadRoutes.includes(pathname);
  const isPublicRoute = isAuthRoute || (!isProtectedRoute && !isPasswordRoute && !isAdminRoute);

  if (isPublicRoute)
    return NextResponse.next()

  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: process.env.NEXT_PUBLIC_SITE_URL,
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    },
  );

  if (!session) {
    console.log('redirect to sign in', request.url)
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

export default async function authMiddleware(request: NextRequest) {
  const intlRes = intlMiddleware(request);
  const authRes = await betterAuthMiddleware(request);
  if (!authRes.ok) return authRes;
  return intlRes
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|favicon|_next|_vercel|admin|sign-in|sign-up|sign-out|forgot-password|.*\\..*).*)',
  ]
};
