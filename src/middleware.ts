import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/profile");

  if (isAuthPage) {
    if (isLoggedIn) {
      // If user is already logged in and tries to access login page,
      // redirect them to profile page
      return NextResponse.redirect(new URL("/profile", req.nextUrl));
    }
    // Allow access to login page for non-logged in users
    return null;
  }

  if (isProtectedRoute && !isLoggedIn) {
    // If user is not logged in and tries to access protected route,
    // redirect them to login page
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return null;
});

// Optionally configure middleware to match specific routes
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
