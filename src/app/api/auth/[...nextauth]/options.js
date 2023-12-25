import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const options = {
    providers: [
        GitHubProvider({
            profile(profile) {
                console.log("Github profile:", profile)

                let userRole = "Github User"
                if (profile?.email == "mianabdullah125125@gmail.com") {
                    userRole = "admin"
                }
                return {
                    ...profile,
                    role: userRole,
                }
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
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
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    callbacks:{
        async jwt({token, user}){
            if(user) token.role = user.role
            return token
        },
        async session({token,user}){
            if(session?.user) session.user.role = token.role
            return session
        }
    }
}
