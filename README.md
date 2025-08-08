# Auth.js Template

A modern, production-ready Next.js template with authentication, database integration, and beautiful UI components built for developers who want to ship fast.

## ✨ Features

- 🔐 **Authentication** - OAuth with Google, GitHub, and Twitter
- 🗄️ **Database** - Prisma ORM with PostgreSQL support
- 🎨 **UI Components** - shadcn/ui with dark/light mode
- 📱 **Responsive Design** - Mobile-first approach
- 🔒 **Security** - JWT sessions and protected routes
- ⚡ **Performance** - Next.js 15 with Turbopack
- 🛠️ **Developer Experience** - TypeScript, ESLint, hot reload

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- OAuth provider accounts (Google, GitHub, Twitter)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/authjs-template.git
   cd authjs-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

4. **Configure your environment variables**

   ```env
   # Authentication
   AUTH_SECRET=your-secret-key-here

   # OAuth Providers
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   TWITTER_CLIENT_ID=your-twitter-client-id
   TWITTER_CLIENT_SECRET=your-twitter-client-secret

   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/database"
   DIRECT_URL="postgresql://username:password@localhost:5432/database"
   ```

5. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

6. **Run the development server**

   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
authjs-template/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   │   └── auth/       # Auth.js API routes
│   │   ├── login/          # Login page
│   │   ├── profile/        # Profile page
│   │   ├── docs/           # Documentation page
│   │   ├── about/          # About page
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Footer component
│   │   └── profile-actions.tsx # Profile actions
│   ├── auth.ts            # Auth.js configuration
│   ├── auth.config.ts     # Auth providers
│   └── middleware.ts      # Route protection
├── prisma/                # Database schema & migrations
├── public/               # Static assets
└── package.json          # Dependencies & scripts
```

## 🔧 Configuration

### Authentication Providers

The template comes pre-configured with three OAuth providers:

1. **Google OAuth**

   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

2. **GitHub OAuth**

   - Go to [GitHub Developer Settings](https://github.com/settings/developers)
   - Create a new OAuth App
   - Add callback URL: `http://localhost:3000/api/auth/callback/github`

3. **Twitter OAuth**
   - Go to [Twitter Developer Portal](https://developer.twitter.com/)
   - Create a new app
   - Add callback URL: `http://localhost:3000/api/auth/callback/twitter`

### Database Setup

1. **Local PostgreSQL**

2. **Cloud Database (Recommended)**
   - [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
   - [Supabase](https://supabase.com/)
   - [PlanetScale](https://planetscale.com/)

> **Note:** Most cloud database providers will give you a special connection string for Prisma ORM. Make sure to copy this connection string into your `.env` file as `DATABASE_URL` (and `DIRECT_URL` if needed). This allows Prisma to connect to your cloud database correctly.

## 🎨 Customization

### Adding New OAuth Providers

### Customizing the UI

The template uses shadcn/ui components which can be easily customized:

1. **Theme Colors**: Modify `src/app/globals.css`
2. **Component Styles**: Edit individual component files in `src/components/ui/`
3. **Layout**: Customize `src/components/Header.tsx` and `src/components/Footer.tsx`

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Follow the existing patterns for styling and layout

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The template works with any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Auth.js Documentation](https://authjs.dev)
- [Prisma Documentation](https://www.prisma.io/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Auth.js](https://authjs.dev/) - Authentication for Next.js
- [Prisma](https://www.prisma.io/) - Database toolkit
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

Made with ❤️ by Mohamed Abubakr
