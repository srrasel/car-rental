"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff, Lock, Mail, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      router.push("/login");
    } catch (err) {
      setError("An error occurred during registration");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0c1315]">
      {/* Left Side - Visual */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-[#1a1f21]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1315] via-transparent to-transparent"></div>
        
        <div className="relative z-10 flex flex-col justify-between h-full p-12 text-white">
          <div className="w-48">
             <Image
                src="/logo/logo2.png"
                alt="LuxeDrive"
                width={200}
                height={80}
                className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
              Join the <span className="text-[#c9a37e]">Elite</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Create an account to start your journey with the world's most exclusive car rental fleet.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>© 2024 LuxeDrive. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 relative">
        <div className="absolute top-6 right-6 md:hidden">
            <Image
                src="/logo/logo2.png"
                alt="LuxeDrive"
                width={120}
                height={50}
                className="w-auto h-8 object-contain"
            />
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Create Account</h2>
            <p className="text-[#9da6b9]">Enter your details to register.</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500 group-focus-within:text-[#c9a37e] transition-colors" />
                  </div>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#1a1f21] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c9a37e]/50 focus:border-[#c9a37e] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-[#c9a37e] transition-colors" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1a1f21] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c9a37e]/50 focus:border-[#c9a37e] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-[#c9a37e] transition-colors" />
                  </div>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-[#1a1f21] border border-white/10 rounded-xl py-3 pl-10 pr-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c9a37e]/50 focus:border-[#c9a37e] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] font-bold text-base rounded-xl transition-all shadow-lg shadow-[#c9a37e]/20"
            >
              {loading ? "Creating Account..." : "Create Account"}
              {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
            </Button>
          </form>

          <p className="text-center text-[#9da6b9]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#c9a37e] font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
