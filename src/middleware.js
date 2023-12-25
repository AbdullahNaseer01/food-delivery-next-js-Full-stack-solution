// import { withAuth } from "next-auth/middleware"

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     console.log(req.nextauth.token)
//   },
//   {
//     // callbacks: {
//     //   authorized: ({ token }) => token?.role === "admin",
//     // },
//     secret:process.env.NEEXTAUTH_SECRET
//   }
// )

// export const config = { matcher: ["/adminpanel"] }



// Example: middleware.js
// import { withAuth } from 'next-auth/middleware';

// export default withAuth(
//   async (req) => {
//     console.log(req.nextauth.token);

//     // Check the user's role for access to restricted pages
//     if (req.nextauth.token && req.nextauth.token.role === 'admin') {
//       // User has admin role, allow access
//     } else {
//       // User does not have admin role, deny access
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false,
//         },
//       };
//     }
//   },
//   {
//     secret: process.env.NEXTAUTH_SECRET,
//   }
// );

// export const config = { matcher: ['/adminpanel'] };




// middleware.js
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async (req, res) => {
    console.log(req.nextauth.token);

    // Check the user's role for access to restricted pages
    if (req.nextauth.token && req.nextauth.token.role === 'admin') {
      // User has admin role, allow access
    } else {
      // User does not have admin role, deny access
      return NextResponse.json({message:"user is not the admin"});
    }
  },
  {
    secret: process.env.NEXTAUTH_SECRET,
  }
);

export const config = { api: { bodyParser: false } }; // Ensure bodyParser is set to false
