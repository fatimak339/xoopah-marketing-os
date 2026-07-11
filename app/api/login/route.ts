import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (!process.env.APP_PASSWORD) {
    return NextResponse.json(
      { success: false, error: "APP_PASSWORD is not set on the server." },
      { status: 500 }
    );
  }

  if (password === process.env.APP_PASSWORD) {
    const res = NextResponse.json({ success: true });
    res.cookies.set("xoopah_auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
