import { NextRequest, NextResponse } from "next/server";

// Redirect client from "/" to "/home" if the route they want to access matches `config`
export default async function middleware(req: NextRequest) {
  const headers = new Headers(req.headers);
  headers.set("x-pathname", req.nextUrl.pathname);

  return NextResponse.next({ request: { headers } });
}
