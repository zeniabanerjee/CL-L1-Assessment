import { NextResponse } from "next/server";
import { login } from "../../services/authService";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const data = await login(email, password);
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
