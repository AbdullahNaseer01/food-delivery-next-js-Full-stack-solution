import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
const authOptions = {
    providers: [
        CredentialsProvider({

            name: 'Email',
            secret: process.env.NEXTAUTH_SECRET,
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials, "credentials")

                const user = { email: "ali@gmail.com", fullname: "ali ahmad" }
                if (user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
        // })
    ]
}


const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }