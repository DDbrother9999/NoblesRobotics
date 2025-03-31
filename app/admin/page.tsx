import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import { getUsersList } from "@/lib/data"
import CreateUserForm from "@/components/create-user-form"

export default async function AdminPage() {
    const session = await getServerSession(authOptions)

    // Check if user is authenticated and has admin role
    if (!session || session.user.role !== "admin") {
        redirect("/login")
    }

    const users = await getUsersList()

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-[#044a90] mb-8">Admin Dashboard</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Create User Form */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl text-[#044a90]">Create User</CardTitle>
                            <CardDescription>Add a new user to the system</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CreateUserForm />
                        </CardContent>
                    </Card>
                </div>

                {/* Users List */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-xl text-[#044a90]">Users</CardTitle>
                                <CardDescription>Manage your users from here</CardDescription>
                            </div>
                            <Users className="h-5 w-5 text-[#0e6fb9]" />
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border">
                                <div className="relative w-full overflow-auto">
                                    <table className="w-full caption-bottom text-sm">
                                        <thead className="[&_tr]:border-b">
                                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <th className="h-12 px-4 text-left align-middle font-medium">Username</th>
                                            <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                                            <th className="h-12 px-4 text-left align-middle font-medium">Role</th>
                                            <th className="h-12 px-4 text-left align-middle font-medium">Date Created</th>
                                        </tr>
                                        </thead>
                                        <tbody className="[&_tr:last-child]:border-0">
                                        {users.length === 0 ? (
                                            <tr>
                                                <td colSpan={4} className="p-4 text-center text-muted-foreground">
                                                    No users found
                                                </td>
                                            </tr>
                                        ) : (
                                            users.map((user) => (
                                                <tr key={user.id} className="border-b transition-colors hover:bg-muted/50">
                                                    <td className="p-4 align-middle">{user.username}</td>
                                                    <td className="p-4 align-middle">{user.email}</td>
                                                    <td className="p-4 align-middle">
                              <span
                                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                      user.role === "admin" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                                  }`}
                              >
                                {user.role}
                              </span>
                                                    </td>
                                                    <td className="p-4 align-middle">{new Date(user.date_created).toLocaleDateString()}</td>
                                                </tr>
                                            ))
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

