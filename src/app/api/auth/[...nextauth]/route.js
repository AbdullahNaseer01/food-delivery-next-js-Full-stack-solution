// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import GoogleProvider from "next-auth/providers/google";

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
//                 // const res = await fetch("/your/endpoint", {
//                 //   method: 'POST',
//                 //   body: JSON.stringify(credentials),
//                 //   headers: { "Content-Type": "application/json" }
//                 // })
//                 // const user = await res.json()
//                 console.log("credentials", credentials)
//                 // some ORM function here to compare the user with the database and check is there anyone with these things then allow him to go further
//                 const user = { email: "loremipsem@gmail.com", fullName: "mian abdullah", password: "123456" }
//                 if (user) {
//                     return user
//                 }
//                 return null
//             }
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET
//         })
//     ]
// }

// const handler = NextAuth(authOption)

// export { handler as GET, handler as POST }





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

                    if (user && user.password === credentials.password) { // Direct comparison (not secure)
                        return user;
                    }
                } catch (error) {
                    console.error('Error fetching user:', error);
                }

                return null;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ]
}

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
