# Therapy Note Writer 📝

> AI-powered therapy note generation platform for mental health professionals - Streamline your documentation workflow

[![Next.js](https://img.shields.io/badge/Next.js-13.4-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![Commercial](https://img.shields.io/badge/License-Commercial-orange.svg)](LICENSE)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8.svg)](https://tailwindcss.com/)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Build & Deployment](#build--deployment)
- [Security & Compliance](#security--compliance)
- [Team](#team)
- [License](#license)

## 🎯 About

**Therapy Note Writer** is an AI-powered platform designed specifically for therapists and mental health professionals to streamline the documentation process. The application leverages artificial intelligence to generate comprehensive, professional therapy session notes, saving valuable time while maintaining clinical accuracy and compliance standards.

Developed by **Airly Studio**, this platform helps therapists focus more on patient care by automating the time-consuming task of session documentation.

## ✨ Features

- **AI-Powered Note Generation**: Automatically generate comprehensive therapy session notes
- **Smart Templates**: Pre-built templates for various therapy modalities
- **Session Management**: Organize and track therapy sessions
- **Calendar Integration**: Schedule and manage appointments
- **Google OAuth**: Secure authentication with Google Sign-In
- **Payment Processing**: Stripe integration for subscription management
- **Responsive Design**: Mobile-first, optimized for all devices
- **Animations**: Smooth UI animations with Framer Motion and Lottie
- **HIPAA Compliance**: Secure handling of sensitive patient information
- **Export Options**: Generate and download notes in various formats
- **Note History**: Access and review previous session notes
- **Customization**: Personalize note templates and preferences

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js](https://nextjs.org/) 13.4.13
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.1.6
- **Frontend**: [React](https://reactjs.org/) 18.2
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.3.3

### Libraries & Utilities
- **Animations**: [Framer Motion](https://www.framer.com/motion/) 10.16.5, [Lottie React](https://lottiefiles.com/) 2.4.0
- **HTTP Client**: [Axios](https://axios-http.com/) 1.5.1
- **Authentication**: [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google) 0.7.3, [jwt-decode](https://www.npmjs.com/package/jwt-decode) 4.0.0
- **Payment**: [Stripe](https://stripe.com/) 14.1.0
- **Calendar**: [React Calendar](https://www.npmjs.com/package/react-calendar) 4.7.0
- **Image Processing**: [Sharp](https://sharp.pixelplumbing.com/) 0.28.1

### Development
- **CSS Processing**: [PostCSS](https://postcss.org/) 8.4.27, [Autoprefixer](https://github.com/postcss/autoprefixer) 10.4.14
- **Linting**: [ESLint](https://eslint.org/) 8.46.0 with Next.js config

## 📋 Prerequisites

Before getting started, ensure you have:

- **Node.js**: Version 18.0 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn**: Latest version (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com/))

Required Accounts:
- Google Cloud Console (for OAuth)
- Stripe Account (for payment processing)
- AI Service API keys (for note generation)

Optional:
- **VS Code**: Recommended code editor with TypeScript support
- **Vercel CLI**: For deployment management

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Airly-Studio/therapy-note-writer-web-front.git
   cd therapy-note-writer-web-front
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Configure all required environment variables.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏃 Running the Application

### Development Mode

```bash
# Start development server
npm run dev

# Access at http://localhost:3000
```

The application supports hot reloading for instant updates during development.

### Production Mode

```bash
# Build for production
npm run build

# Start production server (runs on port 4001)
npm start

# Access at http://localhost:4001
```

## 🏗️ Project Structure

```
├── public/                    # Static files
│   ├── assets/               # Images, icons, Lottie files
│   └── favicon.ico           # Favicon
├── src/
│   ├── app/                  # Next.js 13 App Router
│   │   ├── api/             # API routes
│   │   ├── (auth)/          # Authentication pages
│   │   ├── (dashboard)/     # Dashboard pages
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable UI components
│   │   ├── common/          # Common components
│   │   ├── forms/           # Form components
│   │   ├── notes/           # Note-related components
│   │   └── layout/          # Layout components
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   ├── styles/              # Global styles
│   └── utils/               # Helper functions
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## 🛠️ Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Start production server on port 4001
npm run lint             # Run ESLint
```

### Additional Commands

```bash
# Type checking
npx tsc --noEmit

# Clean build cache
rm -rf .next

# Update dependencies
npm update
```

## 🚀 Build & Deployment

### Production Build

```bash
# Create optimized production build
npm run build
```

This creates an optimized `.next` folder ready for deployment.

### Deployment Options

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Docker Deployment
```bash
# Build Docker image
docker build -t therapy-note-writer .

# Run container
docker run -p 4001:4001 therapy-note-writer
```

#### Traditional Hosting
Build the application and deploy to your preferred hosting service.

### Environment Variables

Required environment variables:
- Next.js configuration
- Google OAuth credentials
- Stripe API keys
- AI service API keys
- Database connection strings
- JWT secrets

## ⚡ Performance

### Optimization Features

- **Next.js 13**: App Router for optimal performance
- **Image Optimization**: Built-in Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Static Generation**: Pre-rendered pages where possible
- **API Routes**: Server-side API handling
- **Sharp**: Fast image processing
- **TypeScript**: Type safety for better performance

### Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🎨 Styling & Animations

### Tailwind CSS

Modern utility-first CSS framework with:
- Responsive design utilities
- Custom theme configuration
- Component-based styling

### Animations

- **Framer Motion**: Smooth page transitions and component animations
- **Lottie**: High-quality vector animations for enhanced UX

## 🔐 Security & Compliance

### Security Features

- **HIPAA Compliance**: Secure handling of protected health information (PHI)
- **Google OAuth**: Secure authentication
- **JWT Authentication**: Token-based authorization
- **Data Encryption**: End-to-end encryption for sensitive data
- **Stripe PCI Compliance**: Secure payment processing
- **HTTPS**: Secure data transmission
- **Input Validation**: Client and server-side validation
- **XSS Protection**: Cross-site scripting prevention
- **CSRF Protection**: Cross-site request forgery protection

### Privacy & Compliance

- HIPAA compliant data handling
- Secure patient information storage
- Audit trails for all note access
- Data encryption at rest and in transit
- Regular security audits
- Privacy policy compliance

### Best Practices

1. Never store sensitive data in localStorage
2. Use environment variables for secrets
3. Enable HTTPS in production
4. Regular dependency updates
5. Implement proper error boundaries
6. Follow HIPAA guidelines strictly
7. Regular security assessments
8. Data backup and recovery plans

## 💳 Payment Integration

### Stripe Features

- Subscription management
- Secure payment processing
- Multiple pricing tiers
- Automatic billing
- Invoice generation
- Payment history

## 🤖 AI Integration

### Note Generation

The platform uses advanced AI to:
- Generate comprehensive session notes
- Maintain clinical accuracy
- Follow therapy modality guidelines
- Ensure HIPAA compliance
- Customize note formats
- Support multiple therapy types

## 📱 Responsive Design

Optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Various screen sizes
- Touch and mouse inputs

## 🧪 Testing

### Running Tests

```bash
# Run tests (when configured)
npm test

# Type checking
npx tsc --noEmit
```

## 📄 License

This project is proprietary software owned by **Airly Studio**. All rights reserved.

**© 2025 Airly Studio.**

This software and its documentation are proprietary to Airly Studio and are protected by copyright law. Unauthorized copying, distribution, or modification is strictly prohibited.

## 👥 Team

**Developed by Airly Studio**

- **[Dorjsuren Enkhbold](https://github.com/dorjsurend)** - *Lead Developer & Architect*
- **[Meraj Kazi](https://github.com/Meraj-Kazi)** - *Senior Full Stack Developer*
- **[Taraqul Islam Rony](https://github.com/TIRony)** - *Frontend Specialist*

## 🙏 Acknowledgments

- Next.js team for the powerful framework
- Stripe for secure payment processing
- Google for OAuth services
- AI service providers
- Mental health professionals for feedback
- Open source community

## 📞 Support & Contact

- **Company**: [Airly Studio](https://airlystudio.com)
- **Email**: hello@airlystudio.com
- **Support**: For technical assistance and inquiries

For platform support, feature requests, or HIPAA compliance questions, contact our development team.

---

⭐ **Empowering Mental Health Professionals | Built with precision by Airly Studio**
