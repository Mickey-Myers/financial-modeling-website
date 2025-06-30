# Financial Modeling Partners - Institutional Financial Advisory

## Overview

This is a sophisticated, institutional-grade one-page website for Financial Modeling Partners, designed to match the prestige and aesthetic of firms like Moelis, Allen & Co., or Centerview Partners. The application showcases institutional financial modeling services with refined typography, sophisticated color schemes, and elevated design language targeting PE/VC-backed companies, real estate developers, and family offices. Built using React with TypeScript, TailwindCSS for styling, and Express.js for the backend API.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API endpoints
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot module replacement with Vite integration

### Design System
- **Color Scheme**: Institutional palette with Oxford Blue (#0B1F35), Bronze (#A38658), Champagne (#C1B398), and Ivory (#FAFAF7)
- **Typography**: Playfair Display (serif headlines) and Inter (body text) for sophisticated, editorial feel
- **Components**: Refined UI components with elegant cards, subtle hover effects, and institutional styling
- **Responsive Design**: Mobile-first approach with generous spacing and sophisticated layouts
- **Animations**: Smooth intersection-based animations with extended duration for premium feel

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero Section**: Primary value proposition with call-to-action
3. **Services Section**: Three-column service offerings layout
4. **Track Record**: Animated counters showing business metrics
5. **Industries Section**: Client categorization and industry focus
6. **Case Studies**: Six project examples with visual content
7. **Testimonials**: Rotating testimonial carousel
8. **Team Section**: Professional team member profiles
9. **Process Section**: Three-step engagement process
10. **Engagement Models**: Flexible engagement options
11. **Contact Form**: Validated contact form with backend integration

### Backend Components
1. **Contact API**: Form submission endpoint with validation
2. **Database Schema**: Contact submissions table with timestamps
3. **Storage Layer**: Abstracted storage interface with in-memory implementation
4. **Validation**: Zod schema validation for API inputs
5. **Error Handling**: Centralized error handling middleware

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. React Hook Form validates input using Zod schemas
3. Form data sent to `/api/contact` endpoint via POST request
4. Backend validates data against shared schema
5. Contact submission stored in database
6. Success/error response returned to frontend
7. User sees toast notification with result

### Page Navigation
1. User clicks navigation menu items
2. JavaScript smooth scroll to target sections
3. Intersection Observer triggers animations on scroll
4. Mobile menu toggles for responsive navigation

## External Dependencies

### Frontend Dependencies
- **@radix-ui/***: Unstyled, accessible UI primitives
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **@hookform/resolvers**: Zod integration for form validation
- **wouter**: Lightweight routing
- **lucide-react**: Icon library
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Carousel functionality

### Backend Dependencies
- **express**: Web application framework
- **drizzle-orm**: TypeScript ORM
- **@neondatabase/serverless**: Neon database driver
- **connect-pg-simple**: PostgreSQL session store
- **tsx**: TypeScript execution for development
- **esbuild**: JavaScript bundler for production

### Development Dependencies
- **vite**: Build tool and development server
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite development server with HMR
- **Type Checking**: TypeScript compiler in watch mode
- **Database**: Development database with Drizzle migrations
- **Environment Variables**: Local `.env` file for configuration

### Production Build
1. **Frontend Build**: Vite builds optimized static assets
2. **Backend Build**: esbuild bundles server code for Node.js
3. **Database Migration**: Drizzle pushes schema changes
4. **Asset Serving**: Express serves static files in production
5. **Process Management**: Single Node.js process handles both API and static files

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment flag (development/production)
- **Session Configuration**: Secure session management in production

## Changelog

```
Changelog:
- June 30, 2025. Initial setup with professional financial modeling website
- June 30, 2025. Complete institutional redesign transformation:
  - Rebranded to "Financial Modeling Partners"
  - Implemented sophisticated typography with Playfair Display headlines
  - Updated color palette to institutional Oxford Blue, Bronze, Champagne, and Ivory
  - Refined all UI components with elegant cards and premium hover effects
  - Enhanced content tone for institutional clientele (PE/VC/Family Offices)
  - Updated navigation, hero, services, testimonials, and all sections
  - Added serif numerals for track record statistics
  - Implemented squared buttons with uppercase tracking
  - Created custom financial model preview graphic
  - Elevated contact form with institutional language
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```