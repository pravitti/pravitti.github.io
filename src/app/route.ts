import { NextResponse } from "next/server";

// For demo: just keep data in memory
let users: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  // simple validation
  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // save to "database" (for now: array)
  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);

  console.log("Current Users:", users);

  return NextResponse.json(newUser, { status: 201 });
}
