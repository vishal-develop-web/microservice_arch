import mongoose from 'mongoose';

async function connectDatabase() {
    try {
        console.log("Connecting to MongoDB...");
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI environment variable is not set");
        }
        const db = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/admin-service')
        console.log("Connected to MongoDB:", db.connection.name);
        db.connection.on('error', (error) => {
            console.error("MongoDB connection error:", error);
            throw new Error("MongoDB connection error: " + error.message);
        });
        db.connection.on('disconnected', () => {
            console.warn("MongoDB connection disconnected");
        });
        db.connection.on('connected', () => {
            console.log("MongoDB connection established");
        });
    } catch (error: any) {
        throw new Error("Failed to connect to MongoDB: " + error.message);
    }
}

export default connectDatabase;