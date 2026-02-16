import sequelize from './config/database.js';
import { User } from './models/index.js';

async function checkUser() {
    try {
        const users = await User.findAll();
        console.log('Current users in DB:');
        users.forEach(u => console.log(`- ${u.fullName} (${u.email})`));
    } catch (error) {
        console.error('Error querying users:', error);
    } finally {
        process.exit();
    }
}

checkUser();
