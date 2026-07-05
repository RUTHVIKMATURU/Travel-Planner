import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { loginSchema } from "@/validations/auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  ...authConfig,
  providers: [
    ...authConfig.providers,
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const validatedData = loginSchema.safeParse(credentials);
        
        if (!validatedData.success) {
          return null;
        }

        const { email, password } = validatedData.data;
        
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) {
          // Mitigate timing attacks by performing a dummy hash comparison
          await bcrypt.compare(password, "$2b$12$DUMMYHASHFORUSERENUMERATIONPREVENTION1234567890");
          return null;
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (passwordsMatch) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        }

        return null;
      },
    }),
  ],
});
