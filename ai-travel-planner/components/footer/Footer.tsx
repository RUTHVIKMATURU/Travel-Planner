import Link from "next/link";
import Container from "@/components/common/Container";
import { Plane } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Plane className="text-emerald-600" />
              <h3 className="text-2xl font-bold">Travix</h3>
            </div>

            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              AI-powered travel planning made effortless.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 font-semibold">Product</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link href="#features">Features</Link>
              <Link href="#destinations">Destinations</Link>
              <Link href="#how-it-works">How It Works</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>

            <div className="flex gap-4 text-xl">
              <a
                href="https://github.com/ruthvikmaturu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="transition-colors hover:text-emerald-600" />
              </a>

              <a
                href="https://linkedin.com/in/ruthvik-maturu-86545228b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="transition-colors hover:text-emerald-600" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-zinc-800">
          © 2026 Voya. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}