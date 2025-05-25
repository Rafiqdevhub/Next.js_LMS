# EduSpark - Your AI Learning Companion Platform

EduSpark is an interactive learning management system that provides personalized AI companions to help students master various subjects through natural voice conversations.

## Features

- **AI Learning Companions**: Interactive tutors specializing in different subjects

  - Mathematics
  - Language
  - Science
  - History
  - Coding
  - Economics

- **Voice-Based Learning**: Natural conversations with AI tutors using voice interface
- **Personalized Experience**: Each companion has its own personality and teaching style
- **Progress Tracking**: Track completed lessons and learning journey
- **Bookmarking System**: Save favorite companions for quick access
- **Subject Filtering**: Easy navigation through different subjects
- **Session History**: Review past learning sessions

## Tech Stack

- **Frontend**: Next.js 15.2 with App Router
- **Authentication**: Clerk
- **Styling**: TailwindCSS with custom design system
- **Voice AI**: VAPI SDK integration
- **State Management**: React Hooks
- **Database**: Supabase
- **Error Tracking**: Sentry

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/Rafiqdevhub/Next.js_LMS.git
cd Next.js_LMS
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Setup**

Create a `.env` file with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

4. **Run the development server**

```bash
npm run dev
```

## Project Structure

- `/app`: Next.js App Router pages and layouts
- `/components`: Reusable React components
  - `CompanionCard.tsx`: Individual companion display
  - `CompanionComponent.tsx`: Main companion interaction interface
  - `Navbar.tsx`: Navigation and authentication controls
- `/lib`: Utility functions and API integrations
- `/public`: Static assets and icons
- `/types`: TypeScript type definitions

## Key Components

### Companion Session

- Real-time voice interaction with AI tutors
- Visual feedback during conversations
- Session transcript recording
- Custom voice and personality settings

### User Journey

- Personal dashboard with learning statistics
- Bookmark management
- Session history tracking
- Profile customization

### Library

- Companion discovery
- Subject-based filtering
- Search functionality
- Session duration indicators

## Billing and Subscription

EduSpark offers flexible subscription plans to access premium features:

### Subscription Plans

- **Free Plan**

  - Basic AI companion access
  - Limited session duration
  - Core subjects only
  - Basic progress tracking

- **Premium Plan**
  - Unlimited AI companion access
  - Extended session duration
  - All subjects including specialized topics
  - Advanced progress analytics
  - Priority support
  - Custom voice settings
  - Session recording and playback

### Billing Features

- Secure payment processing
- Subscription management dashboard
- Automatic renewal options
- Usage analytics
- Billing history
- Plan upgrade/downgrade options

### Payment Integration

- Secure payment processing
- Support for multiple payment methods
- Automated billing cycles
- Invoice generation
- Refund handling

Navigate to `/subscription` to manage your subscription settings and billing preferences.

## Authentication and Security

The application uses Clerk for secure authentication and user management:

- Email/password authentication
- Social login options
- Protected routes
- Secure session management

## Error Handling

Integrated with Sentry for:

- Real-time error tracking
- Performance monitoring
- Issue diagnostics
- Automated error reporting
