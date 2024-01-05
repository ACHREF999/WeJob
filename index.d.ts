import { UserRole } from "@prisma/client";

// declare module 'next-auth/client'
declare module 'next-auth' {
    interface User {
        firstName:string
        lastName:string
        role?: UserRole
        userId: string
    }

    interface Session extends DefaultSession {
        user?: User
    }
}
// nextauth.d.ts
declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
    userId:string;
  }
}