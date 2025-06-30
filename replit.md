# Professional Financial Modeling Website

## Overview

This is a modern, responsive one-page website for a professional financial modeling consulting business. The application showcases financial modeling services with clean aesthetics, fast performance, and conversion-focused design. Built using React with TypeScript, TailwindCSS for styling, and Express.js for the backend API.

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
- **Color Scheme**: Professional navy and neutral tones
- **Typography**: Inter font family for modern readability
- **Components**: Consistent design tokens and reusable UI components
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animations**: Intersection Observer for scroll-triggered animations

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
- June 30, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```