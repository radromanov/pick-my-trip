import { NextRequest, NextResponse } from "next/server";

// Redirect client from "/" to "/home" if the route they want to access matches `config`
export default async function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/home", req.url));
}

export const config = {
  matcher: "/",
};
