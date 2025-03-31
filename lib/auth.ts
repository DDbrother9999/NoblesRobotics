import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { Pool } from "@neondatabase/serverless"

// Create a connection pool to your Neon database
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
})

export const authOptions: NextAuthOptions = {
    debug: process.env.NODE_ENV === "development",
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                try {
                    // Find user by email
                    const result = await pool.query("SELECT * FROM users WHERE email = $1", [credentials.email])

                    const user = result.rows[0]

                    if (!user) {
                        console.log("No user found with this email")
                        return null
                    }

                    // Verify password
                    const passwordMatch = await bcrypt.compare(credentials.password, user.password)

                    if (!passwordMatch) {
                        console.log("Password doesn't match")
                        return null
                    }

                    // Return user data
                    return {
                        id: user.id.toString(),
                        name: user.username,
                        email: user.email,
                        role: user.role,
                    }
                } catch (error) {
                    console.error("Auth error:", error)
                    return null
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // Add role to token when user signs in
            if (user) {
                token.role = user.role
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            // Add role to session from token
            if (session.user) {
                session.user.role = token.role as string
                session.user.id = token.id as string
            }
            return session
        },
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    // Use AUTH_SECRET as that's what you have in your .env
    secret: process.env.AUTH_SECRET,
}

// Extend next-auth types
declare module "next-auth" {
    interface User {
        role?: string
        id: string
    }

    interface Session {
        user: {
            id: string
            name: string
            email: string
            role: string
        }
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role?: string
        id?: string
    }
}

