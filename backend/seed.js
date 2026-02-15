import sequelize from './config/database.js';
import { Room } from './models/index.js';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const seedRooms = [
    { name: 'Main Hall', capacity: 200, description: 'Large event space for conferences and workshops.' },
    { name: 'Incubation Hub', capacity: 30, description: 'Creative space for startups and developers.' },
    { name: 'Recording Studio', capacity: 5, description: 'Professional audio and podcast recording space.' },
    { name: 'Meeting Room A', capacity: 10, description: 'Private space for teamwork and meetings.' },
];

const seed = async () => {
    try {
        // 1. Create database if it doesn't exist
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
        await connection.end();

        // 2. Sync models and seed data
        await sequelize.sync({ force: true });
        await Room.bulkCreate(seedRooms);
        console.log('Database created and seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seed();
