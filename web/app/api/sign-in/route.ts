import { NextResponse } from "next/server";
import { login } from "../../services/authService";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  const { email, password } = await request.body;

  try {
    // const data = await login(email, password);
    return NextResponse.json({});
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
