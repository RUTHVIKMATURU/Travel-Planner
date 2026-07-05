import { LoginForm } from "@/components/login-form";
import Link from "next/link";
import { Plane } from "lucide-react";

export const metadata = {
  title: "Login | Travix AI",
  description: "Sign in to your account to continue planning your trip.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-4 relative overflow-hidden selection:bg-primary/30">
      
      {/* Vercel/Linear inspired subtle grid & glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent opacity-50 blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-[400px] relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-xl mb-6">
            <Plane className="size-6 text-primary" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Welcome back
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            Enter your details to sign in to your account
          </p>
        </div>

        <div className="bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] p-6 sm:p-8 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <LoginForm />
          
          <div className="mt-6 text-center text-sm">
            <p className="text-zinc-500 dark:text-zinc-400">
              Don&apos;t have an account?{" "}
              <Link 
                href="/signup" 
                className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-primary transition-colors underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-primary"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}