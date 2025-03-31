"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, Settings, User } from "lucide-react"

export default function AuthStatus() {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
    }

    if (status === "unauthenticated") {
        return (
            <Button
                asChild
                variant="outline"
                className="bg-[#f5faff] text-[#044a90] hover:bg-[#0e6fb9] hover:text-[#f5faff] border-[#f5faff] hover:border-transparent"
            >
                <Link href="/login">Login</Link>
            </Button>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-[#0e6fb9] text-white">
                            {session?.user?.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                        {session.user.name && <p className="font-medium">{session.user.name}</p>}
                        {session.user.email && (
                            <p className="w-[200px] truncate text-sm text-muted-foreground">{session.user.email}</p>
                        )}
                    </div>
                </div>
                <DropdownMenuSeparator />
                {session.user.role === "admin" && (
                    <DropdownMenuItem asChild>
                        <Link href="/admin">
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Admin Dashboard</span>
                        </Link>
                    </DropdownMenuItem>
                )}
                <DropdownMenuItem asChild>
                    <Link href="/">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={(event) => {
                        event.preventDefault()
                        signOut({ callbackUrl: "/" })
                    }}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

