// Simple test script to demonstrate API access to form submissions
// Run with: node test-api.js (make sure your server is running on localhost:3000)

const BASE_URL = 'http://localhost:3000/api';

async function testAPI() {
  console.log('🧪 Testing Contact Form API Endpoints\n');

  try {
    // Test 1: Get all submissions
    console.log('📋 Fetching all contact submissions...');
    const submissionsResponse = await fetch(`${BASE_URL}/contact/submissions`);
    const submissionsData = await submissionsResponse.json();
    
    console.log(`✅ Found ${submissionsData.count} submissions:`);
    submissionsData.data.forEach((submission, index) => {
      console.log(`  ${index + 1}. ${submission.fullName} (${submission.email}) - ${submission.createdAt}`);
    });
    console.log('');

    // Test 2: Get statistics
    console.log('📊 Fetching submission statistics...');
    const statsResponse = await fetch(`${BASE_URL}/contact/stats`);
    const statsData = await statsResponse.json();
    
    console.log('✅ Statistics:');
    console.log(`  Total: ${statsData.data.total}`);
    console.log(`  Today: ${statsData.data.today}`);
    console.log(`  This Week: ${statsData.data.thisWeek}`);
    console.log(`  This Month: ${statsData.data.thisMonth}`);
    console.log('');

    // Test 3: Get specific submission (if any exist)
    if (submissionsData.data.length > 0) {
      const firstSubmissionId = submissionsData.data[0].id;
      console.log(`🔍 Fetching specific submission (ID: ${firstSubmissionId})...`);
      
      const specificResponse = await fetch(`${BASE_URL}/contact/submissions/${firstSubmissionId}`);
      const specificData = await specificResponse.json();
      
      console.log('✅ Submission details:');
      console.log(`  Name: ${specificData.data.fullName}`);
      console.log(`  Email: ${specificData.data.email}`);
      console.log(`  Company: ${specificData.data.company || 'Not provided'}`);
      console.log(`  Phone: ${specificData.data.phone || 'Not provided'}`);
      console.log(`  Message: ${specificData.data.message || 'No message'}`);
      console.log(`  Submitted: ${specificData.data.createdAt}`);
    }

    console.log('\n🎉 All API tests completed successfully!');
    console.log('\n💡 You can access the admin dashboard at: http://localhost:3000/admin');
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
    console.log('\n🔧 Make sure your server is running with: npm run dev');
  }
}

// Run the test
testAPI(); 