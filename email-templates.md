# EmailJS Email Templates

## 📧 ADMIN NOTIFICATION TEMPLATE

**Template Name**: `financial_modeling_lead`
**Subject**: `🚨 New Financial Modeling Lead - {{company_name}}`

**Template Body**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: #1e293b; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0; font-size: 24px;">🚨 New Financial Modeling Lead</h1>
    <p style="margin: 10px 0 0 0; color: #a3865a;">High-priority client inquiry received</p>
  </div>
  
  <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #1e293b; margin-bottom: 20px;">📋 Client Information</h2>
    
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568;">Name:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">{{from_name}}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568;">Company:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">{{company}}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568;">Email:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:{{from_email}}" style="color: #a3865a;">{{from_email}}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568;">Phone:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><a href="tel:{{phone}}" style="color: #a3865a;">{{phone}}</a></td>
      </tr>
    </table>

    <h2 style="color: #1e293b; margin-bottom: 15px;">💼 Project Details</h2>
    
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568;">Model Type:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">{{model_type}}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568;">Industry:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">{{industry}}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568;">Business Stage:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">{{business_stage}}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568;">Purpose:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">{{purpose}}</td>
      </tr>
    </table>

    <h3 style="color: #1e293b; margin-bottom: 10px;">📝 Revenue Model Details:</h3>
    <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
      <p style="margin: 0; white-space: pre-wrap;">{{revenue_model}}</p>
    </div>

    <h3 style="color: #1e293b; margin-bottom: 10px;">💬 Additional Details:</h3>
    <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
      <p style="margin: 0; white-space: pre-wrap;">{{message}}</p>
    </div>

    <div style="background-color: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b;">
      <h3 style="color: #92400e; margin: 0 0 10px 0;">⏰ Action Required</h3>
      <p style="margin: 0; color: #92400e;">
        <strong>Response Target:</strong> Within 2 hours<br>
        <strong>Priority:</strong> High-value lead<br>
        <strong>Next Step:</strong> Call or email immediately
      </p>
    </div>

    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #6b7280; font-size: 12px;">
      <p style="margin: 0;">Submitted: {{timestamp}}</p>
      <p style="margin: 5px 0 0 0;">From: Financial Modeling Partners Website</p>
    </div>
  </div>
</div>
```

## 📨 AUTO-RESPONDER TEMPLATE

**Template Name**: `client_confirmation`
**Subject**: `Thank you for your financial modeling inquiry - We'll respond within 2 hours`

**Template Body**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: #1e293b; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0; font-size: 24px;">Thank You for Your Inquiry</h1>
    <p style="margin: 10px 0 0 0; color: #a3865a;">Financial Modeling Partners</p>
  </div>
  
  <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <p style="font-size: 16px; color: #4a5568; margin-bottom: 20px;">Dear {{to_name}},</p>
    
    <p style="color: #4a5568; margin-bottom: 20px;">
      Thank you for reaching out to Financial Modeling Partners. We've received your inquiry about financial modeling services for <strong>{{company}}</strong> and appreciate your interest in our expertise.
    </p>

    <div style="background-color: #f0f9ff; padding: 20px; border-radius: 6px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
      <h3 style="color: #1e40af; margin: 0 0 10px 0;">📋 Your Request Summary</h3>
      <p style="margin: 0; color: #1e40af;">
        <strong>Project Type:</strong> {{model_type_display}}<br>
        <strong>Industry:</strong> {{industry_display}}<br>
        <strong>Business Stage:</strong> {{business_stage_display}}
      </p>
    </div>

    <div style="background-color: #f0fdf4; padding: 20px; border-radius: 6px; border-left: 4px solid #22c55e; margin-bottom: 20px;">
      <h3 style="color: #16a34a; margin: 0 0 10px 0;">⏰ What Happens Next</h3>
      <ul style="margin: 0; padding-left: 20px; color: #16a34a;">
        <li>We'll review your requirements within 2 hours</li>
        <li>One of our senior financial modeling experts will contact you directly</li>
        <li>We'll provide a custom quote and timeline for your project</li>
        <li>Most projects start at $3,500+ with 5-10 day delivery</li>
      </ul>
    </div>

    <div style="background-color: #fef3c7; padding: 20px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-bottom: 20px;">
      <h3 style="color: #92400e; margin: 0 0 10px 0;">🚀 Why Choose Us</h3>
      <p style="margin: 0; color: #92400e;">
        • <strong>150+ models built</strong> for companies from startups to $100M+ enterprises<br>
        • <strong>$500M+ in capital raised</strong> using our financial models<br>
        • <strong>Ex-Investment Bankers & PE investors</strong> on our team<br>
        • <strong>No AI, ever</strong> - 100% human-built models
      </p>
    </div>

    <div style="text-align: center; margin-bottom: 20px;">
      <p style="color: #4a5568; margin-bottom: 15px;">
        <strong>Need immediate assistance?</strong>
      </p>
      <p style="color: #4a5568; margin: 0;">
        📧 Email: info@financialmodelingpartners.com<br>
        📱 Priority response for urgent projects
      </p>
    </div>

    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #6b7280; font-size: 12px; text-align: center;">
      <p style="margin: 0;">Financial Modeling Partners</p>
      <p style="margin: 5px 0 0 0;">Professional Financial Models for Serious Businesses</p>
    </div>
  </div>
</div>
```

## 🔧 TEMPLATE VARIABLE MAPPING

**Admin Template Variables**:
- `{{from_name}}` → Full Name
- `{{company}}` → Company Name
- `{{from_email}}` → Email Address
- `{{phone}}` → Phone Number
- `{{model_type}}` → Model Type
- `{{industry}}` → Industry
- `{{business_stage}}` → Business Stage
- `{{purpose}}` → Primary Purpose
- `{{revenue_model}}` → Revenue Model Details
- `{{message}}` → Additional Details
- `{{timestamp}}` → Submission Date/Time

**Auto-Responder Variables**:
- `{{to_name}}` → Client's Name
- `{{company}}` → Client's Company
- `{{model_type_display}}` → Formatted Model Type
- `{{industry_display}}` → Formatted Industry
- `{{business_stage_display}}` → Formatted Business Stage 