import { NextResponse } from "next/server";

export const revalidate = 0

export async function GET(request: Request) {
  await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/admin`)
  return NextResponse.json({ message: "ok" });
}