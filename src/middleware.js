import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log("token:",req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  }
)

export const config = { matcher: ["/adminpanel",] }




// import { withAuth } from "next-auth/middleware"

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     console.log("token:", req.nextauth.token)
//   },
//   {
//     secret:process.env.NEXTAUTH_SECRET
//   }
// )

// export const config = { matcher: ["/adminpanel","/profile"] }







// // "this code is not working and its exparimental"
// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";


// export default withAuth(
//   async function middleware(req) {
//     const token = req.nextauth.token;
//     const role = token?.role;
//     console.log("token:", req.nextauth.token)

//     const protectedRoutes = {
//       "/adminpanel": ["admin"],
//       "/profile": ["*"],
//     };

//     const allowedRoles = protectedRoutes[req.nextUrl.pathname];

//     if (allowedRoles && !allowedRoles.includes(role)) {
//       NextResponse.redirect(new URL('/', req.url));
//     }

//     if (!token) {
//       NextResponse.redirect(new URL('/login', req.url));
//     }
//   },
//   {
//     secret: process.env.NEXTAUTH_SECRET,
//   }
// );

// export const config = { matcher: ["/adminpanel", "/profile"] };
