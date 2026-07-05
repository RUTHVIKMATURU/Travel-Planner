import NextAuth from "next-auth";
import { authConfig } from "@/auth/auth.config";

const { auth } = NextAuth(authConfig);

const authRoutes = ["/login", "/signup"];
const adminRoutes = ["/admin"];
const protectedRoutes = ["/dashboard", "/profile", "/settings", "/trips"];

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role;
  const path = nextUrl.pathname;

  const isAuthRoute = authRoutes.includes(path);
  const isAdminRoute = adminRoutes.some((route) => path.startsWith(route));
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));

  // Redirect authenticated users away from auth routes
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/dashboard", nextUrl));
    }
    return;
  }

  // Handle role-based authorization
  if (isAdminRoute) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/login", nextUrl));
    }
    if (userRole !== "ADMIN") {
      return Response.redirect(new URL("/dashboard", nextUrl));
    }
    return;
  }

  // Redirect guests to login if trying to access a protected route
  if (isProtectedRoute && !isLoggedIn) {
    const redirectUrl = new URL("/login", nextUrl);
    // Optional: save the callback URL to redirect back after login
    // redirectUrl.searchParams.set("callbackUrl", nextUrl.pathname);
    return Response.redirect(redirectUrl);
  }

  return;
});

// Optimize matcher configuration
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - icons or images (svg, png, jpg, jpeg, gif, webp)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
