import Link from "next/link";
import { Compass } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import Container from "@/components/layout/Container";

const footerSections = [
  {
    title: "Product",
    links: [
      {
        label: "Features",
        href: "#features",
      },
      {
        label: "Destinations",
        href: "#destinations",
      },
      {
        label: "How It Works",
        href: "#how-it-works",
      },
      {
        label: "Pricing",
        href: "/pricing",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Travel Guides",
        href: "/guides",
      },
      {
        label: "Help Center",
        href: "/help",
      },
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "FAQs",
        href: "#faq",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
      {
        label: "Privacy",
        href: "/privacy",
      },
      {
        label: "Terms",
        href: "/terms",
      },
    ],
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ruthvikmaturu",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ruthvik-maturu-86545228b",
    icon: FaLinkedin,
  },
  {
    label: "X",
    href: "https://x.com",
    icon: FaXTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-950">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="Travix home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-900/15 transition-transform duration-300 group-hover:scale-105">
                <Compass className="h-5 w-5" />
              </span>

              <span>
                <span className="block text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  Travix
                </span>
                <span className="mt-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  AI Travel Planner
                </span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Plan smarter trips with AI-powered itineraries, budget insight,
              destination discovery, and calm collaboration.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerSections.map((section) => (
              <nav key={section.title} aria-label={section.title}>
                <h2 className="text-sm font-semibold text-slate-950 dark:text-white">
                  {section.title}
                </h2>

                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-slate-500 transition-colors hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h2 className="text-sm font-semibold text-slate-950 dark:text-white">
                Social Links
              </h2>

              <div className="mt-4 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 dark:border-zinc-800 dark:text-slate-400 dark:hover:border-emerald-800 dark:hover:text-emerald-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200/80 pt-6 text-sm text-slate-500 dark:border-zinc-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Travix. All rights reserved.</p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
