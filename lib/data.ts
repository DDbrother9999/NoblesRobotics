import { Pool } from "@neondatabase/serverless"

// Create a connection pool to your Neon database
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
})

export async function getUsersList() {
    try {
        const result = await pool.query(`
      SELECT id, username, email, role, date_created 
      FROM users 
      ORDER BY date_created DESC
    `)
        return result.rows
    } catch (error) {
        console.error("Error fetching users:", error)
        return []
    }
}

