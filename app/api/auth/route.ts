import { GoogleOAuthScopes } from "@/lib/constants";
import { initOAuth } from "@/lib/helpers";
import { NextResponse } from "next/server";

export async function GET() {
  const { googleOAuth } = initOAuth();
  const url = googleOAuth.generateAuthUrl({
    scope: GoogleOAuthScopes,
    prompt: "consent",
    access_type: "offline",
    include_granted_scopes: true,
  });

  return NextResponse.json({ url });
}
