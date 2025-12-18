<div align="center">

# 🍡 MochiSave

### Universal Social Media Downloader Platform

<img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
<img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
<img src="https://img.shields.io/badge/Prisma-5.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma"/>
<img src="https://img.shields.io/badge/TailwindCSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS"/>
<img src="https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>

<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
<img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge" alt="PRs Welcome"/>
<img src="https://img.shields.io/badge/Version-1.0.0-orange?style=for-the-badge" alt="Version"/>

[🚀 Live Demo](https://mochisave.com) • [📖 Documentation](./documentation) • [🐛 Report Bug](https://github.com/yourusername/mochisave/issues) • [✨ Request Feature](https://github.com/yourusername/mochisave/issues)

---

### Download videos, photos, and audio from your favorite social media platforms in seconds! 🎯

</div>

---

## 🌟 Features

<table>
<tr>
<td width="50%">

### 🎬 Multi-Platform Support
- **Facebook** - Videos, Photos, Reels, Stories
- **Instagram** - Posts, Reels, Stories, IGTV
- **TikTok** - Videos without watermark, Audio
- **YouTube** - Videos, Audio, Thumbnails
- **X/Twitter** - Videos, Photos, GIFs
- More platforms coming soon!

</td>
<td width="50%">

### ⚡ Core Features
- **Instant Preview** - See before you download
- **Quality Selection** - HD, SD, Audio-only
- **Batch Download** - Multiple links at once
- **Format Conversion** - MP4, MP3, WebM
- **Download History** - Track all downloads
- **Zero Watermarks** - Clean downloads

</td>
</tr>
</table>

---

## 🎨 Screenshots

<div align="center">
<table>
<tr>
<td align="center" width="50%">
<img src="https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Hero+Section" width="100%" alt="Hero Section"/>
<br/>
<b>🏠 Hero Section</b>
<br/>
<sub>Animated 3D background with smooth interactions</sub>
</td>
<td align="center" width="50%">
<img src="https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Download+Interface" width="100%" alt="Download Interface"/>
<br/>
<b>⬇️ Download Interface</b>
<br/>
<sub>Clean and intuitive download experience</sub>
</td>
</tr>
<tr>
<td align="center" width="50%">
<img src="https://via.placeholder.com/600x400/10B981/FFFFFF?text=Dashboard" width="100%" alt="Dashboard"/>
<br/>
<b>📊 User Dashboard</b>
<br/>
<sub>Manage downloads and history</sub>
</td>
<td align="center" width="50%">
<img src="https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Mobile+View" width="100%" alt="Mobile View"/>
<br/>
<b>📱 Mobile Responsive</b>
<br/>
<sub>Perfect on all devices</sub>
</td>
</tr>
</table>
</div>

---

## 🚀 Tech Stack

### Frontend
```typescript
Next.js 14 (App Router) + TypeScript + React 18
├── TailwindCSS + DaisyUI      // Styling
├── Three.js + @react-three/fiber   // 3D Graphics
├── Anime.js                    // Micro-interactions
├── Lenis                       // Smooth Scrolling
├── Framer Motion              // Page Transitions
└── React Query                // State Management
```

### Backend
```typescript
Next.js API Routes + Prisma ORM
├── MySQL Database
├── NextAuth.js (Google OAuth)
├── Upstash Redis (Rate Limiting)
├── Sharp (Image Processing)
└── Custom Media Scrapers
```

### Infrastructure
```yaml
Deployment: Vercel
Database: PlanetScale / Railway
Storage: Google Cloud Storage
Payment: Stripe
Email: SendGrid
Monitoring: Sentry
Analytics: Google Analytics 4
```

---

## 📦 Project Structure

```
mochisave/
├── 📁 prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
│
├── 📁 public/
│   ├── font/                  # Outfit font files
│   ├── animations/            # Animation assets
│   └── images/                # Static images
│
├── 📁 src/
│   ├── 📁 app/                # Next.js App Router
│   │   ├── (auth)/           # Auth pages
│   │   ├── (dashboard)/      # Dashboard pages
│   │   ├── (platforms)/      # Platform-specific pages
│   │   ├── api/              # API routes
│   │   │   ├── auth/         # NextAuth endpoints
│   │   │   ├── download/     # Download endpoints
│   │   │   └── history/      # History endpoints
│   │   ├── pricing/          # Pricing page
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   │
│   ├── 📁 components/
│   │   ├── ui/               # Reusable UI components
│   │   ├── layout/           # Layout components (Navbar, Footer)
│   │   ├── features/         # Feature-specific components
│   │   └── animations/       # Animation components
│   │
│   ├── 📁 lib/
│   │   ├── prisma.ts         # Prisma client
│   │   ├── auth.ts           # Auth config
│   │   ├── scrapers/         # Platform scrapers
│   │   └── utils/            # Utility functions
│   │
│   ├── 📁 hooks/             # Custom React hooks
│   ├── 📁 types/             # TypeScript types
│   └── 📁 styles/            # Global styles
│
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

---

## 🎯 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- MySQL 8.0+
- Google Cloud Account (for OAuth)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/mochisave.git
cd mochisave

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# 4. Initialize database
npx prisma generate
npx prisma migrate dev --name init

# 5. Start development server
npm run dev
```

🎉 Open [http://localhost:3000](http://localhost:3000) and start downloading!

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="mysql://user:password@localhost:3307/mochisave"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Optional: For production features
STRIPE_SECRET_KEY="sk_test_..."
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
```

---

## 🎭 Features Showcase

### 🎨 Interactive UI/UX
- **Smooth Animations** - Lenis-powered momentum scrolling
- **Micro-interactions** - Delightful hover effects
- **Responsive Design** - Perfect on all devices
- **Custom Font** - Outfit variable font for modern typography

### 🔐 Authentication
- **Google OAuth** - Secure one-click login
- **Session Management** - JWT-based authentication
- **Role-based Access** - Free, Premium, Admin tiers

### 📊 User Dashboard
- **Download History** - Track all your downloads
- **Statistics** - Usage analytics and insights
- **Profile Management** - Update preferences
- **Subscription Control** - Manage premium access

### 💳 Monetization (Coming Soon)
- **Free Tier** - 10 downloads/day with standard quality
- **Premium** - Unlimited HD downloads, no ads
- **Stripe Integration** - Secure payment processing

---

## 🌐 Supported Platforms

<div align="center">

| Platform | Videos | Photos | Audio | Stories | Status |
|----------|--------|--------|-------|---------|--------|
| 📘 Facebook | ✅ | ✅ | ✅ | ✅ | 🟢 Active |
| 📷 Instagram | ✅ | ✅ | ✅ | ✅ | 🟢 Active |
| 🎵 TikTok | ✅ | ❌ | ✅ | ❌ | 🟢 Active |
| 🎬 YouTube | ✅ | ❌ | ✅ | ❌ | 🟢 Active |
| 🐦 X/Twitter | ✅ | ✅ | ❌ | ❌ | 🟢 Active |
| 📌 Pinterest | 🔄 | 🔄 | ❌ | ❌ | 🟡 Coming Soon |
| 💼 LinkedIn | 🔄 | 🔄 | ❌ | ❌ | 🟡 Coming Soon |

</div>

---

## 📊 API Endpoints

### Authentication
```typescript
POST   /api/auth/signin          # Sign in with Google
POST   /api/auth/signout         # Sign out
GET    /api/auth/session         # Get current session
```

### Download
```typescript
POST   /api/download/analyze     # Analyze URL & get metadata
POST   /api/download/start       # Start download process
GET    /api/download/[id]        # Get download status
```

### History
```typescript
GET    /api/history              # Get user download history
DELETE /api/history/[id]         # Delete history item
```

---

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking

# Database
npx prisma generate      # Generate Prisma client
npx prisma migrate dev   # Run migrations (development)
npx prisma studio        # Open Prisma Studio
```

### Database Schema

The application uses Prisma ORM with MySQL. Key models include:

- **User** - User accounts and authentication
- **Account** - OAuth provider accounts
- **Session** - User sessions
- **Download** - Download records and history
- **Subscription** - Premium subscriptions

---

## 🔒 Security

- ✅ **Input Validation** - Zod schema validation
- ✅ **Rate Limiting** - IP-based and user-based limits (planned)
- ✅ **CSRF Protection** - NextAuth.js built-in protection
- ✅ **SQL Injection Prevention** - Prisma ORM parameterized queries
- ✅ **XSS Prevention** - React's built-in sanitization
- ✅ **HTTPS Only** - Secure data transmission
- ✅ **Environment Variables** - Secure credential storage

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. ✨ Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🎉 Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Tailwind component library
- [Three.js](https://threejs.org/) - 3D graphics library
- [Anime.js](https://animejs.com/) - Animation library
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js

---

## 🗺️ Roadmap

### Phase 1: MVP ✅
- [x] Basic project setup
- [x] User authentication
- [x] Homepage and UI
- [x] API routes structure
- [x] Database schema

### Phase 2: Core Features 🚧
- [ ] Platform scrapers implementation
- [ ] Download queue system
- [ ] File processing & storage
- [ ] Progress tracking

### Phase 3: Enhanced UX 📋
- [ ] Three.js background
- [ ] Smooth animations
- [ ] User dashboard
- [ ] Download history page

### Phase 4: Monetization 📋
- [ ] Stripe integration
- [ ] Subscription plans
- [ ] Rate limiting
- [ ] Admin dashboard

### Phase 5: Platform Pages 📋
- [ ] Facebook downloader page
- [ ] Instagram downloader page
- [ ] TikTok downloader page
- [ ] YouTube downloader page
- [ ] Twitter downloader page

### Phase 6: Polish & Launch 📋
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Testing & bug fixes
- [ ] Production deployment

---

## 📞 Support

<div align="center">

### Need help? We're here for you!

[![Email](https://img.shields.io/badge/Email-support@mochisave.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:support@mochisave.com)
[![Twitter](https://img.shields.io/badge/Twitter-@mochisave-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/mochisave)

</div>

---

## 💡 FAQ

**Q: Is this legal?**
A: The tool is for personal use only. Always respect copyright laws and platform Terms of Service.

**Q: Can I download private content?**
A: No, only publicly available content can be downloaded.

**Q: What's the maximum file size?**
A: Free users can download files up to 100MB. Premium users have no size limits.

**Q: Can I use this commercially?**
A: The Pro plan includes commercial usage rights. Contact us for more details.

---

<div align="center">

### Made with ❤️ by the MochiSave Team

**If you find this project helpful, please consider giving it a ⭐!**

[⬆ Back to Top](#-mochisave)

---

**© 2024 MochiSave. All rights reserved.**

</div>
