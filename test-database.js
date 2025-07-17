import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { contactSubmissions } from './shared/schema.ts';

// Load environment variables
dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
console.log('🔍 DATABASE_URL exists:', !!databaseUrl);

if (!databaseUrl) {
  console.error('❌ DATABASE_URL not found in environment variables');
  process.exit(1);
}

async function testDatabase() {
  try {
    console.log('🔍 Testing database connection...');
    
    // Create database client
    const sql = neon(databaseUrl);
    const db = drizzle(sql);
    
    // Test connection
    const result = await sql`SELECT 1 as test`;
    console.log('✅ Database connection successful:', result);
    
    // Test inserting a record
    console.log('🔍 Testing insert...');
    const insertResult = await db.insert(contactSubmissions).values({
      fullName: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      message: 'This is a test submission'
    }).returning();
    
    console.log('✅ Insert successful:', insertResult);
    
    // Test querying records
    console.log('🔍 Testing query...');
    const submissions = await db.select().from(contactSubmissions);
    console.log('✅ Query successful. Total records:', submissions.length);
    console.log('📋 Recent submissions:', submissions.slice(-3));
    
    // Clean up test data
    console.log('🔍 Cleaning up test data...');
    await db.delete(contactSubmissions).where(sql`email = 'test@example.com'`);
    console.log('✅ Cleanup successful');
    
  } catch (error) {
    console.error('❌ Database test failed:', error);
  }
}

testDatabase(); 