import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Twitter from "next-auth/providers/twitter";
import { prisma } from "@/utils/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [Google, GitHub, Twitter],
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
} satisfies NextAuthConfig;
