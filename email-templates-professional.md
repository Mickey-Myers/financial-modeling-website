# Professional Email Templates (Dark Theme)

## ADMIN NOTIFICATION TEMPLATE

**Template Name**: `financial_modeling_lead`
**Subject**: `New Financial Modeling Inquiry - {{company_name}}`

**Template Body**:
```html
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f172a;">
  <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; border-bottom: 3px solid #a3865a;">
    <h1 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; color: #f8fafc;">New Client Inquiry</h1>
    <p style="margin: 8px 0 0 0; color: #a3865a; font-size: 16px; font-weight: 500;">Financial Modeling Partners - Lead Alert</p>
  </div>
  
  <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 32px; border-radius: 0 0 12px 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); border: 1px solid #334155;">
    
    <div style="background: linear-gradient(135deg, #a3865a 0%, #8f7249 100%); padding: 20px; border-radius: 8px; margin-bottom: 24px; border-left: 4px solid #fbbf24;">
      <p style="margin: 0; color: #1e293b; font-weight: 600; font-size: 16px;">
        ⚡ Action Required: Please respond within 24 hours for optimal conversion rates.
      </p>
    </div>

    <h2 style="color: #a3865a; margin-bottom: 20px; font-size: 20px; font-weight: 600; border-bottom: 2px solid #334155; padding-bottom: 8px;">Contact Information</h2>
    
    <div style="background-color: #334155; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #475569;">
      <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #475569;">
        <span style="font-weight: 600; color: #a3865a; width: 30%;">Name:</span>
        <span style="color: #f1f5f9; font-weight: 500;">{{from_name}}</span>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #475569;">
        <span style="font-weight: 600; color: #a3865a; width: 30%;">Company:</span>
        <span style="color: #f1f5f9; font-weight: 500;">{{company}}</span>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #475569;">
        <span style="font-weight: 600; color: #a3865a; width: 30%;">Email:</span>
        <a href="mailto:{{from_email}}" style="color: #a3865a; text-decoration: none; font-weight: 500;">{{from_email}}</a>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 12px 0;">
        <span style="font-weight: 600; color: #a3865a; width: 30%;">Phone:</span>
        <a href="tel:{{phone}}" style="color: #a3865a; text-decoration: none; font-weight: 500;">{{phone}}</a>
      </div>
    </div>

    <h2 style="color: #a3865a; margin-bottom: 20px; font-size: 20px; font-weight: 600; border-bottom: 2px solid #334155; padding-bottom: 8px;">Project Requirements</h2>
    
    <div style="background-color: #334155; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #475569;">
      <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #475569;">
        <span style="font-weight: 600; color: #a3865a; width: 30%;">Model Type:</span>
        <span style="color: #f1f5f9; font-weight: 500;">{{model_type}}</span>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #475569;">
        <span style="font-weight: 600; color: #a3865a; width: 30%;">Industry:</span>
        <span style="color: #f1f5f9; font-weight: 500;">{{industry}}</span>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #475569;">
        <span style="font-weight: 600; color: #a3865a; width: 30%;">Business Stage:</span>
        <span style="color: #f1f5f9; font-weight: 500;">{{business_stage}}</span>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 12px 0;">
        <span style="font-weight: 600; color: #a3865a; width: 30%;">Primary Purpose:</span>
        <span style="color: #f1f5f9; font-weight: 500;">{{purpose}}</span>
      </div>
    </div>

    <h3 style="color: #a3865a; margin-bottom: 12px; font-size: 18px; font-weight: 600;">Revenue Model Details</h3>
    <div style="background-color: #334155; border: 1px solid #475569; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
      <p style="margin: 0; color: #f1f5f9; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">{{revenue_model}}</p>
    </div>

    <h3 style="color: #a3865a; margin-bottom: 12px; font-size: 18px; font-weight: 600;">Additional Details</h3>
    <div style="background-color: #334155; border: 1px solid #475569; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
      <p style="margin: 0; color: #f1f5f9; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">{{message}}</p>
    </div>

    <div style="background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%); padding: 24px; border-radius: 8px; border-left: 4px solid #a3865a;">
      <h3 style="color: #f8fafc; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Recommended Response</h3>
      <p style="margin: 0; color: #e2e8f0; line-height: 1.6; font-size: 14px;">
        "Hello {{from_name}}, thank you for your interest in our financial modeling services{{company_for_response}}. I'd like to schedule a brief call to discuss your {{purpose}} requirements and provide you with a detailed proposal. When would be the best time to connect this week?"
      </p>
    </div>

    <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #334155; color: #64748b; font-size: 13px;">
      <p style="margin: 0;"><strong style="color: #a3865a;">Submission Time:</strong> {{timestamp}}</p>
      <p style="margin: 4px 0 0 0;"><strong style="color: #a3865a;">Source:</strong> Website Contact Form</p>
    </div>
  </div>
</div>
```

## CLIENT CONFIRMATION TEMPLATE

**Template Name**: `client_confirmation`
**Subject**: `Thank you for your inquiry - Financial Modeling Partners`

**Template Body**:
```html
<div style="font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f172a;">
  <div style="background-color: #1e293b; color: white; padding: 25px; border-radius: 6px 6px 0 0; text-align: center; border-bottom: 2px solid #a3865a;">
    <h1 style="margin: 0; font-size: 26px; font-weight: 600; letter-spacing: -0.5px; font-family: 'Playfair Display', Georgia, serif;">Thank You for Your Inquiry</h1>
    <p style="margin: 12px 0 0 0; color: #a3865a; font-size: 16px; font-weight: 500;">Financial Modeling Partners</p>
  </div>
  
  <div style="background-color: #1e293b; padding: 32px; border-radius: 0 0 6px 6px; color: #e2e8f0;">
    <p style="font-size: 16px; color: #f1f5f9; margin-bottom: 20px;">Dear {{to_name}},</p>
    
    <p style="color: #cbd5e1; margin-bottom: 24px; font-size: 15px; line-height: 1.6;">
      Thank you for reaching out regarding financial modeling services{{company}}. We have received your inquiry and appreciate your interest in working with our team.
    </p>

    <div style="background-color: #0f172a; padding: 20px; border-radius: 6px; border: 1px solid #374151; margin-bottom: 24px;">
      <h3 style="color: #a3865a; margin: 0 0 12px 0; font-size: 16px; font-weight: 600; font-family: 'Playfair Display', Georgia, serif;">Your Request Summary</h3>
      <table style="width: 100%; color: #94a3b8;">
        <tr>
          <td style="padding: 4px 0; font-weight: 500; width: 35%;">Project Type:</td>
          <td style="padding: 4px 0; color: #a3865a; font-weight: 500;">{{model_type_display}}</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; font-weight: 500;">Industry Focus:</td>
          <td style="padding: 4px 0; color: #a3865a; font-weight: 500;">{{industry_display}}</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; font-weight: 500;">Business Stage:</td>
          <td style="padding: 4px 0; color: #a3865a; font-weight: 500;">{{business_stage_display}}</td>
        </tr>
      </table>
    </div>

    <div style="background-color: #0f172a; padding: 20px; border-radius: 6px; border: 1px solid #374151; margin-bottom: 24px;">
      <h3 style="color: #a3865a; margin: 0 0 12px 0; font-size: 16px; font-weight: 600; font-family: 'Playfair Display', Georgia, serif;">What Happens Next</h3>
      <div style="color: #94a3b8;">
        <p style="margin: 0 0 8px 0;">• Review your requirements within 24 hours</p>
        <p style="margin: 0 0 8px 0;">• Senior expert contacts you directly</p>
        <p style="margin: 0 0 8px 0;">• Detailed proposal with timeline and pricing</p>
        <p style="margin: 0;">• Projects range $3,500-$15,000, 5-14 day delivery</p>
      </div>
    </div>

    <div style="background-color: #0f172a; padding: 20px; border-radius: 6px; border: 1px solid #374151; margin-bottom: 24px;">
      <h3 style="color: #a3865a; margin: 0 0 12px 0; font-size: 16px; font-weight: 600; font-family: 'Playfair Display', Georgia, serif;">About Financial Modeling Partners</h3>
      <div style="color: #94a3b8;">
        <p style="margin: 0 0 8px 0;">• 150+ models built for startups to Fortune 500</p>
        <p style="margin: 0 0 8px 0;">• $500M+ capital raised using our models</p>
        <p style="margin: 0 0 8px 0;">• Former investment bankers and PE professionals</p>
        <p style="margin: 0;">• 100% human-built with full documentation</p>
      </div>
    </div>

    <div style="text-align: center; margin-bottom: 24px; background-color: #0f172a; padding: 14px 20px; border-radius: 6px; border: 1px solid #374151;">
      <p style="color: #a3865a; margin-bottom: 6px; font-weight: 600; font-size: 14px; font-family: 'Playfair Display', Georgia, serif;">
        Questions about your project?
      </p>
      <p style="color: #94a3b8; margin: 0; font-size: 13px;">
        Email: <a href="mailto:info@financialmodelingpartners.com" style="color: #a3865a; text-decoration: none; font-weight: 500;">info@financialmodelingpartners.com</a>
      </p>
    </div>

    <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #475569; text-align: center;">
      <p style="margin: 0; color: #94a3b8; font-size: 14px; line-height: 1.6;">
        <strong style="color: #f1f5f9; font-family: 'Playfair Display', Georgia, serif;">Financial Modeling Partners</strong><br>
        Professional Financial Models for Growing Businesses<br>
        Website: <a href="https://financialmodelingpartners.com" style="color: #a3865a; text-decoration: none;">financialmodelingpartners.com</a>
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
   - Replace the HTML content with the dark theme versions above
   - Keep the same template names and IDs
   - Update the subject lines to remove emojis

5. **Save and test** the updated templates

## KEY FEATURES

✅ **Dark Theme Design** - Matches your website's aesthetic  
✅ **Bronze/Gold Accents** - Professional color scheme  
✅ **Gradient Backgrounds** - Modern, sophisticated look  
✅ **Professional Typography** - Clean, readable fonts  
✅ **Responsive Layout** - Works on all devices  
✅ **Clear Information Hierarchy** - Well-organized content  
✅ **Action-Oriented** - Clear next steps and expectations  

These templates now perfectly match your website's dark theme with beautiful gradients and professional styling! 