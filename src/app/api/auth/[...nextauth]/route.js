// import dbConnect from "@/config/db";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import { User } from "@/app/models/user";

// dbConnect();

// const authOption = {
//     NEXTAUTH_URL: process.env.NEXTAUTH_URL,
//     providers: [
//         CredentialsProvider({
//             secret: process.env.NEXTAUTH_SECRET,
//             name: 'Email',
//             credentials: {
//                 username: { label: "Username", type: "text", placeholder: "jsmith" },
//                 password: { label: "Password", type: "password" }
//             },
//             async authorize(credentials, req) {
//                 try {
//                     const user = await User.findOne({ email: credentials.username });

//                     if (user && user.password === credentials.password) { // Direct comparison (not secure)
//                         return user;
//                     }
//                 } catch (error) {
//                     console.error('Error fetching user:', error);
//                 }

//                 return null;
//             }
//         }),
//         GoogleProvider({
//             profile(profile) {
//                 console.log("Google profile:", profile)

//                 let userRole = "Google User"
//                 if (profile?.email == "mianabdullah125125@gmail.com") {
//                     userRole = "admin"
//                 }
//                 return {
//                     ...profile,
//                     id: profile.sub,
//                     role: userRole,
//                 }
//             },
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET
//         })
//     ],
//     callbacks: {
//         async jwt({ token, user }) {
//             if (user) token.role = user.role
//             return token
//         },
//         async session({ token, user }) {
//             if (session?.user) session.user.role = token.role
//             return session
//         }
//     }
// }

// const handler = NextAuth(authOption);

// export { handler as GET, handler as POST };





import dbConnect from "@/config/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { User } from "@/app/models/user";

dbConnect();

const authOption = {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    providers: [
        CredentialsProvider({
            secret: process.env.NEXTAUTH_SECRET,
            name: 'Email',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    const user = await User.findOne({ email: credentials.username });

                    if (user && user.password === credentials.password) {
                        // Include the user's role in the returned object
                        const role = user.email === "mianabdullah125125@gmail.com" ? "admin" : "client";
                        return { ...user, role }; // Corrected this line
                    }
                } catch (error) {
                    console.error('Error fetching user:', error);
                }

                return null;
            }
        }),
        GoogleProvider({
            profile(profile) {
                console.log("Google profile:", profile)

                let userRole = "Google User"
                if (profile?.email == "mianabdullah125125@gmail.com") {
                    userRole = "admin"
                }
                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                }
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return token
        },
        async session({ token, user }) {
            if (session?.user) session.user.role = token.role
            return session
        }
    }
}

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };







