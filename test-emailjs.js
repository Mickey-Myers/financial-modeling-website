// EmailJS Test Script
// Run this in browser console to test EmailJS configuration

const testEmailJSConfiguration = async () => {
  console.log('🧪 Testing EmailJS Configuration...');
  
  // Check if EmailJS is loaded
  if (typeof emailjs === 'undefined') {
    console.error('❌ EmailJS not loaded. Make sure @emailjs/browser is installed.');
    return;
  }
  
  // Check environment variables
  const config = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
    adminTemplateId: process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID || 'YOUR_ADMIN_TEMPLATE_ID',
    clientTemplateId: process.env.REACT_APP_EMAILJS_CLIENT_TEMPLATE_ID || 'YOUR_CLIENT_TEMPLATE_ID',
    adminEmail: process.env.REACT_APP_ADMIN_EMAIL || 'info@financialmodelingpartners.com'
  };
  
  console.log('📋 Configuration:', config);
  
  // Check for placeholder values
  const hasPlaceholders = Object.values(config).some(value => 
    value.includes('YOUR_') || value.includes('your_')
  );
  
  if (hasPlaceholders) {
    console.error('❌ Placeholder values found! Please update your environment variables.');
    return;
  }
  
  // Test email sending
  try {
    emailjs.init(config.publicKey);
    
    const testParams = {
      from_name: 'Test User',
      company: 'Test Company',
      company_name: 'Test Company',
      from_email: 'test@example.com',
      phone: '+1 (555) 123-4567',
      model_type: 'Custom Financial Model',
      industry: 'Technology',
      business_stage: 'Growth Stage ($1M+ Revenue)',
      purpose: 'Fundraising (VC/Angel/PE)',
      revenue_model: 'SaaS subscription model with multiple tiers',
      message: 'This is a test submission to verify EmailJS integration.',
      timestamp: new Date().toLocaleString(),
      to_email: config.adminEmail
    };
    
    console.log('📧 Sending test email...');
    
    const result = await emailjs.send(
      config.serviceId,
      config.adminTemplateId,
      testParams,
      config.publicKey
    );
    
    console.log('✅ Test email sent successfully!', result);
    console.log('📬 Check your email inbox for the test message.');
    
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    console.log('🔍 Common solutions:');
    console.log('- Check your EmailJS dashboard for error logs');
    console.log('- Verify your service ID and template IDs');
    console.log('- Ensure your Gmail service is properly connected');
    console.log('- Check that templates are published (not draft)');
  }
};

// Run the test
testEmailJSConfiguration();

// Export for manual testing
window.testEmailJS = testEmailJSConfiguration;

console.log('💡 To test manually, run: testEmailJS()'); 