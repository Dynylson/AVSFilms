import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import { PrismaAdapter } from "../../../src/lib/auth/prismaAdapter";

export function buildNextAuthOptions(
    req: NextApiRequest,
    res: NextApiResponse
): NextAuthOptions {
    return {
        adapter: PrismaAdapter(req, res),

        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID ?? "",
                clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
                profile(profile: GoogleProfile) {
                    return {
                        id: profile.sub,
                        name: profile.name,
                        email: profile.email,
                        avatar_url: profile.picture
                    }
                }
            }),
        ],
        secret: process.env.NEXTAUTH_SECRET,

        pages: {
            signIn: '/auth/signin'
        },

        callbacks: {
            async session ({ session, user }) {
                return {
                    ...session,
                    user
                }
            }
        }
    }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return NextAuth(req, res, buildNextAuthOptions(req, res))
}