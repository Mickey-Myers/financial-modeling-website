// EmailJS Browser Test Script
// Copy and paste this into your browser console on localhost:3000

const testEmailJSInBrowser = async () => {
  console.log('🧪 Testing EmailJS Configuration in Browser...');
  
  // Check if EmailJS is loaded
  if (typeof emailjs === 'undefined') {
    console.error('❌ EmailJS not loaded. Make sure the page has loaded completely.');
    return;
  }
  
  // Test configuration (these should match your .env.local file)
  const config = {
    serviceId: 'service_nfxtkik',
    publicKey: 'eN9kZyYAAPVHbTP7W',
    adminTemplateId: 'template_vxcpu5h',
    clientTemplateId: 'template_r7lpjqb',
    adminEmail: 'info@financialmodelingpartners.com'
  };
  
  console.log('📋 Configuration:', config);
  
  try {
    // Initialize EmailJS
    emailjs.init(config.publicKey);
    console.log('✅ EmailJS initialized successfully');
    
    // Test parameters
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
    
    console.log('📧 Sending test admin email...');
    
    // Send admin notification
    const adminResult = await emailjs.send(
      config.serviceId,
      config.adminTemplateId,
      testParams,
      config.publicKey
    );
    
    console.log('✅ Admin email sent successfully!', adminResult);
    
    // Test client email
    const clientParams = {
      to_name: 'Test User',
      to_email: 'test@example.com',
      company: 'Test Company',
      model_type_display: 'Custom Financial Model',
      industry_display: 'Technology',
      business_stage_display: 'Growth Stage ($1M+ Revenue)',
      timestamp: new Date().toLocaleString()
    };
    
    console.log('📧 Sending test client email...');
    
    const clientResult = await emailjs.send(
      config.serviceId,
      config.clientTemplateId,
      clientParams,
      config.publicKey
    );
    
    console.log('✅ Client email sent successfully!', clientResult);
    console.log('🎉 Both emails sent successfully! Check your inbox.');
    
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    console.log('🔍 Error details:', {
      message: error.message,
      status: error.status,
      text: error.text
    });
    
    console.log('💡 Common solutions:');
    console.log('- Check your EmailJS dashboard for error logs');
    console.log('- Verify your service ID and template IDs');
    console.log('- Ensure your Gmail service is properly connected');
    console.log('- Check that templates are published (not draft)');
  }
};

// Run the test
console.log('💡 To test EmailJS, run: testEmailJSInBrowser()');
window.testEmailJSInBrowser = testEmailJSInBrowser; 