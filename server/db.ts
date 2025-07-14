import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { contactSubmissions } from '@shared/schema';

// Load environment variables first
dotenv.config();

// Get database URL from environment variables
const databaseUrl = process.env.DATABASE_URL;

console.log('🔍 Debug - DATABASE_URL:', databaseUrl ? '[HIDDEN]' : 'undefined');
console.log('🔍 Debug - All env vars:', Object.keys(process.env).filter(key => key.includes('DATABASE')));

// Only create database connection if we have a real URL
let db: any = null;
let sql: any = null;

if (databaseUrl && databaseUrl !== 'placeholder_replace_with_real_db_url') {
  try {
    // Create Neon HTTP client
    sql = neon(databaseUrl);
    
    // Create Drizzle instance
    db = drizzle(sql, {
      schema: { contactSubmissions },
    });
    
    console.log('✅ Database client initialized');
  } catch (error) {
    console.error('❌ Failed to initialize database client:', error);
    db = null;
    sql = null;
  }
} else {
  console.log('⚠️ DATABASE_URL not configured or is placeholder');
  console.log('📋 Please replace the placeholder DATABASE_URL with a real database connection');
  console.log('🔗 Get a free database at: https://neon.tech');
  console.log('🔄 Will fallback to in-memory storage...');
}

export { db, sql };

// Test database connection
export async function testDatabaseConnection() {
  if (!db || !sql) {
    console.log('⚠️ No database configured, skipping connection test');
    return false;
  }
  
  try {
    console.log('🔍 Testing database connection...');
    await sql`SELECT 1`;
    console.log('✅ Database connection successful');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
} 