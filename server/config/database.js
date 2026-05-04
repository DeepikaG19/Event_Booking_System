// config/database.js
import mongoose from 'mongoose';
import User from '../models/User.js';

import { MongoMemoryServer } from 'mongodb-memory-server';

let mongod = null;

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mandabam', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    
    // Create admin user if not exists
    await createAdminUser();
  } catch (error) {
    console.error('❌ Database connection error with provided URI:', error.message);
    console.log('🔄 Attempting to start in-memory MongoDB server as fallback...');
    
    try {
      mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      
      const conn = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log(`✅ Fallback In-Memory MongoDB Connected: ${uri}`);
      
      // Create admin user if not exists
      await createAdminUser();
    } catch (memError) {
      console.error('❌ In-Memory Database connection error:', memError.message);
      process.exit(1);
    }
  }
};

const createAdminUser = async () => {
  try {
    const adminExists = await User.findOne({ email: 'admin@mandabam.com' });
    
    if (!adminExists) {
      const bcrypt = await import('bcryptjs');
      const hashedPassword = await bcrypt.default.hash('admin123', 10);
      
      await User.create({
        name: 'Mandabam Admin',
        email: 'admin@mandabam.com',
        password: hashedPassword,
        phone: '9876543210',
        role: 'admin'
      });
      console.log('✅ Admin user created');
    }
  } catch (error) {
    console.log('Admin creation:', error.message);
  }
};

export default connectDatabase;