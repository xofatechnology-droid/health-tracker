"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase Auth logic for registration
    console.log("Registering...", { email, password });
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-sm p-8 rounded-3xl shadow-neu-flat bg-softBg space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-700">Create Account</h2>
          <p className="text-sm text-slate-500 mt-1">Start tracking your health</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider ml-1 text-slate-500">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 rounded-2xl bg-softBg shadow-neu-pressed outline-none focus:ring-2 focus:ring-blue-400/30 transition-all text-sm placeholder:text-slate-400"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider ml-1 text-slate-500">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 rounded-2xl bg-softBg shadow-neu-pressed outline-none focus:ring-2 focus:ring-blue-400/30 transition-all text-sm placeholder:text-slate-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-4 rounded-2xl font-bold text-lg shadow-neu-flat active:shadow-neu-pressed transition-all duration-150 text-slate-600 active:text-blue-500"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}