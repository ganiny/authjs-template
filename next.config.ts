import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')],
    domains: [
      'https://pbs.twimg.com',     // Twitter
      'https://lh3.googleusercontent.com', // Google
      'https://avatars.githubusercontent.com', // GitHub
    ],
    
  },
};

export default nextConfig;
