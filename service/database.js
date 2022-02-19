import knex from "knex";

export const getDatabase = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV != 'development'
            ? { rejectUnauthorized: false }
            : undefined
    },
})