import { getConnectionManager } from "typeorm";

export default async function connect() {
    const connectionManager = getConnectionManager();
    
    const connection = connectionManager.create({
        name: "default",
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: [`${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/entities/*.ts`]
    });
    
    await connection.connect();
    return connection;
}