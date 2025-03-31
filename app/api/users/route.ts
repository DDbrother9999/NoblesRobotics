import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { sql } from "@vercel/postgres"
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)

        if (!session || session.user.role !== "admin") {
            return NextResponse.json({ message: "Unauthorized" }, { status: 403 })
        }

        const { username, email, password, role } = await request.json()

        if (!username || !email || !password) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await sql`
      INSERT INTO users (username, email, password, role)
      VALUES (${username}, ${email}, ${hashedPassword}, ${role || "user"})
    `

        return NextResponse.json({ message: "User created successfully" }, { status: 201 })
    } catch (error: any) {
        console.error("Error creating user:", error)

        if (error.message.includes("duplicate key")) {
            if (error.message.includes("username")) {
                return NextResponse.json({ message: "Username already exists" }, { status: 409 })
            }
            if (error.message.includes("email")) {
                return NextResponse.json({ message: "Email already exists" }, { status: 409 })
            }
        }

        return NextResponse.json({ message: "Failed to create user" }, { status: 500 })
    }
}

