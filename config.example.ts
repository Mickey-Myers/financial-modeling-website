// Production Configuration Example
// Copy this file to config.ts and update with your actual values

export const config = {
  // EmailJS Configuration
  emailjs: {
    serviceId: 'YOUR_EMAILJS_SERVICE_ID',
    templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY'
  },

  // Google Analytics
  analytics: {
    measurementId: 'GA_MEASUREMENT_ID',
    enabled: true
  },

  // Contact Information
  contact: {
    email: 'info@financialmodelingpartners.com',
    phone: '+1-555-123-4567',
    responseTime: '24 hours'
  },

  // API Configuration
  api: {
    baseUrl: process.env.NODE_ENV === 'production' 
      ? 'https://your-domain.com' 
      : 'http://localhost:3000'
  },

  // Feature Flags
  features: {
    enableAnalytics: true,
    enableErrorTracking: true,
    enablePerformanceMonitoring: true,
    enableLazyLoading: true
  },

  // SEO Configuration
  seo: {
    siteUrl: 'https://financialmodelingpartners.com',
    siteName: 'Financial Modeling Partners',
    defaultTitle: 'Financial Modeling Partners | Excel Models for PE/VC, Real Estate & Startups',
    defaultDescription: 'Institutional-grade Excel financial models for PE/VC-backed companies, real estate developers, and startups. Built by ex-bankers. Trusted by funds managing $1B+ AUM.',
    twitterHandle: '@FinModelPartners'
  }
}; 