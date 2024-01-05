import bcrypt from 'bcrypt'
import  { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { UserRole } from '@prisma/client'
import prisma from '@/libs/prismadb'

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials:Record<"email"|"password",string>|undefined) {
                // console.log('here are the credentials: ',credentials)
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials')
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                })
                // console.log('Here is the user: ',user)

                if (!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials')
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )

                if (!isCorrectPassword) {
                    throw new Error('Invalid credentials')
                }
                
                // return {...user,hashedPassword:undefined}
                return user
            },
        }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        /* Step 1: update the token based on the user object */
        if (user) {
          token.role = user.role;
          token.name = `${user.firstName} ${user.lastName}`
          token.userId = user.id;
          
        }
        return token;
      },
      session({ session, token }) {
        /* Step 2: update the session.user based on the token object */
        if (token && session.user) {
            session.user.role = token.role;
        //   session.user.subscribed = token.subscribed;
            session.user.name=token.name
            session.user.userId = token.userId
        }
        return session;
      },
    },
    debug: true,
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: "asdsadasdsad",
    },
    secret: "asdasdasdsadasdsad",
}