import { NextResponse } from "next/server";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// ✅ Handle User Signup
export async function POST(req: Request) {
  const { email, password } = await req.json();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return NextResponse.json({ user: userCredential.user });
}

// ✅ Handle User Login
export async function GET(req: Request) {
  const { email, password } = await req.json();
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return NextResponse.json({ user: userCredential.user });
}
