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





// import dbConnect from "@/config/db";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { User } from "@/app/models/user";

// dbConnect();

// const authOptions = {
//   NEXTAUTH_URL: process.env.NEXTAUTH_URL,
//   providers: [
//     CredentialsProvider({
//       secret: process.env.NEXTAUTH_SECRET,
//       name: 'Email',
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials, req) {
//         try {
//           const user = await User.findOne({ email: credentials.username });

//           if (user && user.password === credentials.password) {
//             // Include the user's role in the returned object
//             const role = user.email === "mianabdullah12512@gmail.com" ? "admin" : "user";
//             return { ...user._doc, role };
//           }
//         } catch (error) {
//           console.error('Error fetching user:', error);
//         }

//         return null;
//       }
//     }),
//   ],
//   callbacks: {
//     async session(session, user) {
//       // Include the user's role in the session object
//       session.role = user.role;
//       return Promise.resolve(session);
//     }
//   }
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
