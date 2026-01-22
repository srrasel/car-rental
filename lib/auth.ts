import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const { email, password } = credentials;

        // Mock Admin User
        if (email === "admin@rental.com" && password === "admin123") {
          return {
            id: "1",
            name: "Alex Morgan",
            email: "admin@rental.com",
            role: "admin",
          };
        }

        // Mock Customer User
        if (email === "customer@rental.com" && password === "customer123") {
          return {
            id: "2",
            name: "John Doe",
            email: "customer@rental.com",
            role: "customer",
          };
        }

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};
