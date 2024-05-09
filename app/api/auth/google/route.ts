import { initOAuth } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { googleOAuth } = initOAuth();

  const code = new URL(req.url).searchParams.get("code")!;

  const res = await googleOAuth.getToken(code);

  await googleOAuth.setCredentials(res.tokens);

  const user = googleOAuth.credentials;

  try {
    if (!user.access_token) {
      throw Error("No user access token found.");
    }

    return NextResponse.json({ user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
