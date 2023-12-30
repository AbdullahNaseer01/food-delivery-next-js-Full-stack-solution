import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  console.log("token:", req.nextauth.token)
  console.log(req.nextUrl.pathname)

  if (req.nextUrl.pathname.startsWith("/adminpanel") && req.nextauth.token.role != "admin") {
    return NextResponse.redirect(new URL("/", req.url))
  }
},
{
  callbacks:{
    authorized:({token})=> !!token,
  }
}
)
export const config = { matcher: ["/adminpanel", "/profile"] };