import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GoogleProvider({
            // [origin]/api/auth/callback/google Add ths to callback url in your 
            // application's callback URL in google after registering new OAuth app 

            // Add google cliend id and client secret in .env file
            // You don't need to add clientId and clientSecret here if you use
            // the same variable name provided in .env file
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials) {
                // Sign in logic
                // Return the user
                try {

                } catch (error) {

                }
            }
        })
    ],
    // If you want to use any other page for login provide the page location 
    // pages: {
    //     signIn: "/login",
    // },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        // Control if a user is allowed to sign in
        // Return true of false
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
            } else {
                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
        // You should not change this default redirect functionality
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
        // Persist the OAuth access_token and or the user id to the token right after signin
        // REMEMBER: Credentials provider returns profile object and OAuth providers return account object
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token
                token.id = profile.id
            }
            return token
        },
        // Send properties to the client, like an access_token and user id from a provider
        // token is the object you have returned from jwt callback 
        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            session.user.id = token.id

            return session
        }
    }
});
