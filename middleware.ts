import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: process.env.AUTH_SECRET,
    })

    const isAuthenticated = !!token

    // Paths that require authentication and admin role
    const adminPaths = ["/admin"]

    // Check if the current path is an admin path
    const isAdminPath = adminPaths.some((path) => request.nextUrl.pathname.startsWith(path))

    // If trying to access admin path without being an admin
    if (isAdminPath) {
        if (!isAuthenticated) {
            return NextResponse.redirect(new URL("/login", request.url))
        }

        if (token.role !== "admin") {
            return NextResponse.redirect(new URL("/", request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/admin/:path*"],
}

