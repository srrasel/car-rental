"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Eye, EyeOff, Lock, Mail, ArrowRight, LogIn, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        if (email === "admin@rental.com") {
          router.push("/admin");
        } else {
          router.push("/dashboard");
        }
        router.refresh();
      }
    } catch (err) {
      setError("An error occurred during sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0c1315]">
      {/* Left Side - Visual */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-[#1a1f21]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
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
              Experience the <span className="text-[#c9a37e]">Extraordinary</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Sign in to manage your bookings, view your rental history, and unlock exclusive premium benefits.
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
            <h2 className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Welcome Back</h2>
            <p className="text-[#9da6b9]">Please enter your details to sign in.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-[#c9a37e] transition-colors" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#1a1f21] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c9a37e]/50 focus:border-[#c9a37e] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                    <label className="text-sm font-medium text-gray-300">Password</label>
                    <Link href="#" className="text-xs text-[#c9a37e] hover:text-[#b08d6b] transition-colors">Forgot password?</Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-[#c9a37e] transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#1a1f21] border border-white/10 rounded-xl py-3 pl-10 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c9a37e]/50 focus:border-[#c9a37e] transition-all"
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
              className="w-full bg-[#c9a37e] hover:bg-[#b08d6b] text-[#0c1315] font-bold py-6 rounded-xl text-base transition-transform active:scale-[0.98]"
            >
              {loading ? "Signing in..." : "Sign In"} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-white/10"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#0c1315] px-2 text-gray-500">Or continue with</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-[#1a1f21] border border-white/10 hover:bg-white/5 text-white py-3 rounded-xl transition-colors text-sm font-medium">
                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M12.0003 20.45C16.667 20.45 20.5853 16.5317 20.5853 11.865C20.5853 11.265 20.5336 10.6817 20.4353 10.115H12.0003V13.615H16.8153C16.6069 14.7367 15.9869 15.6884 15.0886 16.29L17.9736 18.5284C19.6636 16.9717 20.6353 14.6767 20.5853 11.865Z" fill="#4285F4" />
                        <path d="M12.0001 24.0001C15.2401 24.0001 17.9651 22.9334 19.9484 21.0984L17.0634 18.8601C15.9884 19.5801 14.6051 20.0001 13.0851 20.0001C9.95675 20.0001 7.31008 17.8867 6.36008 15.0267L3.37675 17.3401C5.35342 21.2667 9.42675 24.0001 14.0851 24.0001H12.0001Z" fill="#34A853" />
                        <path d="M6.35994 15.0266C5.86994 13.5516 5.86994 11.9633 6.35994 10.4883L3.37661 8.17498C1.65994 11.5833 1.65994 15.6183 3.37661 19.0266L6.35994 15.0266Z" fill="#FBBC05" />
                        <path d="M12.0001 5.44997C13.7151 5.44997 15.3501 6.0883 16.6051 7.23497L19.5301 4.30997C17.4917 2.4083 14.8084 1.33997 12.0001 1.33997C7.34175 1.33997 3.26842 4.0733 1.29175 8.00163L4.27508 10.315C5.22508 7.4533 7.87175 5.33997 11.0001 5.33997V5.44997Z" fill="#EA4335" />
                    </svg>
                    Google
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#1a1f21] border border-white/10 hover:bg-white/5 text-white py-3 rounded-xl transition-colors text-sm font-medium">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                </button>
            </div>

            <p className="text-center text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link href="/register" className="text-[#c9a37e] hover:text-[#b08d6b] font-semibold transition-colors">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}