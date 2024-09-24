import { NextResponse } from "next/server";
import { createClient } from "@/libs/supabase/server";

// Function to validate email format
const validateEmail = (email: string) => {
  const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return re.test(String(email).toLowerCase());
};

// Function to validate password strength (minimum 8 characters)
const validatePassword = (password: string) => {
  return password.length >= 8;
};

// Function to validate username
const validateUsername = (username: string) => {
  return username.trim().length > 2; // Username should have at least 3 characters
};

export async function POST(req: Request) {
  const { username, email, password } = await req.json();

  // Validate inputs
  if (!validateUsername(username)) {
    return NextResponse.json(
      { message: "Username must be at least 3 characters long." },
      { status: 400 }
    );
  }

  if (!validateEmail(email)) {
    return NextResponse.json(
      { message: "Invalid email format." },
      { status: 400 }
    );
  }

  if (!validatePassword(password)) {
    return NextResponse.json(
      { message: "Password must be at least 8 characters long." },
      { status: 400 }
    );
  }

  const supabase = createClient();

  // Try signing up the user using Supabase
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });

  // Check for any Supabase sign-up errors
  if (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }

  return NextResponse.json({ message: "Registration successful!" }, { status: 200 });
}
