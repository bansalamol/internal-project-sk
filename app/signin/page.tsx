"use client";

import Link from "next/link";
import { createClient } from "@/libs/supabase/client";
import { useState } from "react";
import toast from "react-hot-toast";
import config from "@/config";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from 'react';


export default function Login() {
  const supabase = createClient();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDisabled(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged in successfully!");
      // Redirect or perform additional actions here
      window.location.href = '/dashboard';
    }

    setIsLoading(false);
    setIsDisabled(false);
  };

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="p-8 md:p-24" data-theme={config.colors.theme}>
        <div className="text-center mb-4">
          <Link href="/" className="btn btn-ghost btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                clipRule="evenodd"
              />
            </svg>
            Home
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-12">
          Sign-in to {config.appName}
        </h1>

        <div className="space-y-8 max-w-xl mx-auto">
          <form
            className="form-control w-full space-y-4"
            onSubmit={handleLogin}
          >
            <input
              required
              type="email"
              value={email}
              autoComplete="email"
              placeholder="tom@cruise.com"
              className="input input-bordered w-full placeholder:opacity-60"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              value={password}
              autoComplete="current-password"
              placeholder="Password"
              className="input input-bordered w-full placeholder:opacity-60"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="btn btn-primary btn-block"
              disabled={isLoading || isDisabled}
              type="submit"
            >
              {isLoading && (
                <span className="loading loading-spinner loading-xs"></span>
              )}
              Login
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
