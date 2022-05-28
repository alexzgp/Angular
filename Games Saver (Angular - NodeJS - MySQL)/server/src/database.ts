import { createPool } from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'ng_games_db'
    })
    return connection;
}

