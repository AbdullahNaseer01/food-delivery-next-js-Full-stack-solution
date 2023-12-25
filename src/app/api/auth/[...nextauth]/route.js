// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import GoogleProvider from "next-auth/providers/google"
// const authOptions = {
//     providers: [
//         CredentialsProvider({

//             name: 'Email',
//             secret: process.env.NEXTAUTH_SECRET,
//             credentials: {
//                 username: { label: "Username", type: "text", placeholder: "jsmith" },
//                 password: { label: "Password", type: "password" }
//             },
//             async authorize(credentials, req) {
//                 console.log(credentials, "credentials")

//                 const user = { email: "ali@gmail.com", fullname: "ali ahmad" }
//                 if (user) {
//                     return user
//                 }
//                 // Return null if user data could not be retrieved
//                 return null
//             }
//         }),
//         // GoogleProvider({
//         //     clientId: process.env.GOOGLE_CLIENT_ID,
//         //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
//         // })
//     ]
// }


// const handler = NextAuth(authOptions)


// export { handler as GET, handler as POST }



// Example: nextauth.js
// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { user } from '@/app/models/user';
// import dbConnect from '@/config/db';

// dbConnect(); // Connect to MongoDB

// const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Email',
//       credentials: {
//         username: { label: 'Username', type: 'text', placeholder: 'username' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials, req) {
//         // Check if user already exists in the database
//         const existingUser = await user.findOne({ email: credentials.username });

//         if (existingUser) {
//           // User exists, return user data
//           return existingUser;
//         } else {
//           // User does not exist, create and save to the database
//           const newUser = new user({
//             username: credentials.username,
//             email: credentials.username, // Use the email field for username
//             password: credentials.password, // You should hash the password before saving
//           });

//           await newUser.save();
//           return newUser;
//         }
//       },
//     }),
//   ],
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };





// nextauth.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { user } from '@/app/models/user';
import dbConnect from '@/config/db';

dbConnect(); // Connect to MongoDB

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Email',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Check if user already exists in the database
        const existingUser = await user.findOne({ email: credentials.username });

        if (existingUser) {
          // User exists, return user data
          return Promise.resolve({ id: existingUser._id, ...existingUser });
        } else {
          // User does not exist, create and save to the database
          const newUser = new user({
            username: credentials.username,
            email: credentials.username, // Use the email field for username
            password: credentials.password, // You should hash the password before saving
          });

          await newUser.save();
          return Promise.resolve({ id: newUser._id, ...newUser });
        }
      },
    }),
  ],
  callbacks: {
    async session(session, token) {
      // Include the user ID in the session
      return Promise.resolve({ ...session, user: { ...session.user, id: token.id } });
    },
  },
};

export default (req, res) => NextAuth(req, res, authOptions);
