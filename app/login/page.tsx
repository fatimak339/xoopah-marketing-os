"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-xoopah-blue px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-card"
      >
        <p className="text-xl font-extrabold text-black">
          xoopah <span className="font-normal text-black/50">/ os</span>
        </p>
        <h1 className="mt-4 text-lg font-semibold text-black">
          Enter your password
        </h1>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          className="mt-4 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-xoopah-blue"
          placeholder="Password"
        />

        {error && (
          <p className="mt-2 text-sm text-[#E24444]">
            That's not it — try again.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full rounded-xl bg-xoopah-blue px-4 py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
        >
          {loading ? "Checking..." : "Enter"}
        </button>
      </form>
    </div>
  );
}
