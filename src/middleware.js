import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Define protected routes
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth()

  // If the user is not authenticated and trying to access a protected route
  if (!userId && isProtectedRoute(req)) {
    // Redirect to sign-in page if not authenticated
    return NextResponse.redirect(new URL('/',req.url))
  }

  // Proceed if user is authenticated or route is not protected
  return NextResponse.next()
})

export const config = {
  // Ensure this matcher targets only protected routes
  matcher: ['/dashboard(.*)'],
}
