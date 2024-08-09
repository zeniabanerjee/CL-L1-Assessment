import { NextResponse } from "next/server";
import { register } from "../../services/authService";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    await register(email, password);
    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
