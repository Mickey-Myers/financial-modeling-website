# Professional Email Templates (No Emojis)

## ADMIN NOTIFICATION TEMPLATE

**Template Name**: `financial_modeling_lead`
**Subject**: `New Financial Modeling Inquiry - {{company_name}}`

**Template Body**:
```html
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: #2c3e50; color: white; padding: 25px; border-radius: 6px 6px 0 0;">
    <h1 style="margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">New Client Inquiry</h1>
    <p style="margin: 8px 0 0 0; color: #bdc3c7; font-size: 14px;">Financial Modeling Partners - Lead Alert</p>
  </div>
  
  <div style="background-color: white; padding: 30px; border-radius: 0 0 6px 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    
    <div style="background-color: #fff3cd; padding: 16px; border-radius: 4px; border-left: 4px solid #ffc107; margin-bottom: 24px;">
      <p style="margin: 0; color: #856404; font-weight: 500;">
        <strong>Action Required:</strong> Please respond within 24 hours for optimal conversion rates.
      </p>
    </div>

    <h2 style="color: #2c3e50; margin-bottom: 16px; font-size: 18px; font-weight: 600;">Contact Information</h2>
    
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; background-color: #f8f9fa; border-radius: 4px;">
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #dee2e6; font-weight: 500; color: #495057; width: 25%;">Name:</td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #dee2e6; color: #212529;">{{from_name}}</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #dee2e6; font-weight: 500; color: #495057;">Company:</td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #dee2e6; color: #212529;">{{company}}</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #dee2e6; font-weight: 500; color: #495057;">Email:</td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #dee2e6;"><a href="mailto:{{from_email}}" style="color: #007bff; text-decoration: none;">{{from_email}}</a></td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; font-weight: 500; color: #495057;">Phone:</td>
        <td style="padding: 12px 16px; color: #212529;"><a href="tel:{{phone}}" style="color: #007bff; text-decoration: none;">{{phone}}</a></td>
      </tr>
    </table>

    <h2 style="color: #2c3e50; margin-bottom: 16px; font-size: 18px; font-weight: 600;">Project Requirements</h2>
    
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; background-color: #f8f9fa; border-radius: 4px;">
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #dee2e6; font-weight: 500; color: #495057; width: 25%;">Model Type:</td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #dee2e6; color: #212529;">{{model_type}}</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #dee2e6; font-weight: 500; color: #495057;">Industry:</td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #dee2e6; color: #212529;">{{industry}}</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #dee2e6; font-weight: 500; color: #495057;">Business Stage:</td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #dee2e6; color: #212529;">{{business_stage}}</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; font-weight: 500; color: #495057;">Primary Purpose:</td>
        <td style="padding: 12px 16px; color: #212529;">{{purpose}}</td>
      </tr>
    </table>

    <h3 style="color: #2c3e50; margin-bottom: 12px; font-size: 16px; font-weight: 600;">Revenue Model Details</h3>
    <div style="background-color: #ffffff; border: 1px solid #dee2e6; padding: 16px; border-radius: 4px; margin-bottom: 20px;">
      <p style="margin: 0; color: #495057; line-height: 1.6; white-space: pre-wrap;">{{revenue_model}}</p>
    </div>

    <h3 style="color: #2c3e50; margin-bottom: 12px; font-size: 16px; font-weight: 600;">Additional Details</h3>
    <div style="background-color: #ffffff; border: 1px solid #dee2e6; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
      <p style="margin: 0; color: #495057; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
    </div>

    <div style="background-color: #d1ecf1; padding: 18px; border-radius: 4px; border-left: 4px solid #17a2b8;">
      <h3 style="color: #0c5460; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Recommended Response</h3>
      <p style="margin: 0; color: #0c5460; line-height: 1.6;">
        "Hello {{from_name}}, thank you for your interest in our financial modeling services for {{company}}. I'd like to schedule a brief call to discuss your {{purpose}} requirements and provide you with a detailed proposal. When would be the best time to connect this week?"
      </p>
    </div>

    <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 13px;">
      <p style="margin: 0;"><strong>Submission Time:</strong> {{timestamp}}</p>
      <p style="margin: 4px 0 0 0;"><strong>Source:</strong> Website Contact Form</p>
    </div>
  </div>
</div>
```

## CLIENT CONFIRMATION TEMPLATE

**Template Name**: `client_confirmation`
**Subject**: `Thank you for your inquiry - Financial Modeling Partners`

**Template Body**:
```html
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="background-color: #2c3e50; color: white; padding: 25px; border-radius: 6px 6px 0 0; text-align: center;">
    <h1 style="margin: 0; font-size: 26px; font-weight: 600; letter-spacing: -0.5px;">Thank You for Your Inquiry</h1>
    <p style="margin: 12px 0 0 0; color: #bdc3c7; font-size: 16px;">Financial Modeling Partners</p>
  </div>
  
  <div style="background-color: white; padding: 32px; border-radius: 0 0 6px 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="font-size: 16px; color: #2c3e50; margin-bottom: 20px;">Dear {{to_name}},</p>
    
    <p style="color: #495057; margin-bottom: 24px; font-size: 15px; line-height: 1.6;">
      Thank you for reaching out regarding financial modeling services for {{company}}. We have received your inquiry and appreciate your interest in working with our team.
    </p>

    <div style="background-color: #e7f3ff; padding: 20px; border-radius: 4px; border-left: 4px solid #007bff; margin-bottom: 24px;">
      <h3 style="color: #004085; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Your Request Summary</h3>
      <table style="width: 100%; color: #004085;">
        <tr>
          <td style="padding: 4px 0; font-weight: 500; width: 35%;">Project Type:</td>
          <td style="padding: 4px 0;">{{model_type_display}}</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; font-weight: 500;">Industry Focus:</td>
          <td style="padding: 4px 0;">{{industry_display}}</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; font-weight: 500;">Business Stage:</td>
          <td style="padding: 4px 0;">{{business_stage_display}}</td>
        </tr>
      </table>
    </div>

    <div style="background-color: #d4edda; padding: 20px; border-radius: 4px; border-left: 4px solid #28a745; margin-bottom: 24px;">
      <h3 style="color: #155724; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">What Happens Next</h3>
      <div style="color: #155724;">
        <p style="margin: 0 0 8px 0;">• We will review your requirements within 24 hours</p>
        <p style="margin: 0 0 8px 0;">• A senior financial modeling expert will contact you directly</p>
        <p style="margin: 0 0 8px 0;">• We will provide a detailed proposal with timeline and pricing</p>
        <p style="margin: 0;">• Most projects range from $3,500 to $15,000 with 5-14 day delivery</p>
      </div>
    </div>

    <div style="background-color: #fff3cd; padding: 20px; border-radius: 4px; border-left: 4px solid #ffc107; margin-bottom: 24px;">
      <h3 style="color: #856404; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">About Financial Modeling Partners</h3>
      <div style="color: #856404;">
        <p style="margin: 0 0 8px 0;">• Over 150 financial models built for companies from startups to Fortune 500</p>
        <p style="margin: 0 0 8px 0;">• $500M+ in capital raised using our financial models</p>
        <p style="margin: 0 0 8px 0;">• Team includes former investment bankers and private equity professionals</p>
        <p style="margin: 0;">• 100% human-built models with comprehensive documentation</p>
      </div>
    </div>

    <div style="text-align: center; margin-bottom: 24px;">
      <p style="color: #495057; margin-bottom: 12px; font-weight: 500;">
        Need immediate assistance?
      </p>
      <p style="color: #495057; margin: 0; font-size: 14px;">
        Email: mickey.myers14@gmail.com<br>
        We prioritize urgent requests and typically respond within 2-4 hours during business days.
      </p>
    </div>

    <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #dee2e6; text-align: center;">
      <p style="margin: 0; color: #6c757d; font-size: 14px; line-height: 1.6;">
        <strong>Financial Modeling Partners</strong><br>
        Professional Financial Models for Growing Businesses<br>
        Website: <a href="http://localhost:3000" style="color: #007bff; text-decoration: none;">financialmodelingpartners.com</a>
      </p>
    </div>
  </div>
</div>
```

## TEMPLATE VARIABLE MAPPING

**Admin Template Variables**:
- `{{from_name}}` → Client's Full Name
- `{{company}}` → Client's Company Name
- `{{company_name}}` → Company Name (for subject line)
- `{{from_email}}` → Client's Email Address
- `{{phone}}` → Client's Phone Number
- `{{model_type}}` → Model Type Selected
- `{{industry}}` → Industry/Business Type
- `{{business_stage}}` → Business Stage Selected
- `{{purpose}}` → Primary Purpose Selected
- `{{revenue_model}}` → Revenue Model Description
- `{{message}}` → Additional Details
- `{{timestamp}}` → Submission Date/Time

**Client Template Variables**:
- `{{to_name}}` → Client's Name
- `{{company}}` → Client's Company
- `{{model_type_display}}` → Formatted Model Type
- `{{industry_display}}` → Formatted Industry
- `{{business_stage_display}}` → Formatted Business Stage
- `{{timestamp}}` → Submission Date/Time

## IMPLEMENTATION INSTRUCTIONS

1. **Log into your EmailJS dashboard**
2. **Navigate to Email Templates**
3. **Find your existing templates:**
   - `financial_modeling_lead` (Admin template)
   - `client_confirmation` (Client template)

4. **Update each template:**
   - Replace the HTML content with the professional versions above
   - Keep the same template names and IDs
   - Update the subject lines to remove emojis

5. **Save and test** the updated templates

## KEY IMPROVEMENTS

✅ **Removed all emojis** - Professional business appearance  
✅ **Human-written tone** - Sounds like it came from a real person  
✅ **Cleaner design** - Modern, professional styling  
✅ **Better typography** - Improved fonts and spacing  
✅ **Professional colors** - Business-appropriate color scheme  
✅ **Clear hierarchy** - Well-organized information structure  
✅ **Action-oriented** - Clear next steps and expectations  

These templates now look like they came from an established financial services firm rather than an AI system. 