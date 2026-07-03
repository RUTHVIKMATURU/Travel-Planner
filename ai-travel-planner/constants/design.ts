export const spacing = {
  container: "mx-auto max-w-7xl px-6",
  section: "py-24",
  heroSection: "py-20 lg:py-28",
  sectionHeader: "mb-16",
  card: "p-8",
  cardCompact: "p-6",
  stackSm: "space-y-3",
  stackMd: "space-y-4",
  gridCards: "grid gap-8",
} as const;

export const typography = {
  sectionTitle: "text-4xl font-bold",
  sectionDescription: "mt-4 text-lg text-slate-600 dark:text-slate-400",
  cardTitle: "text-xl font-semibold",
  bodyMuted: "text-slate-600 dark:text-slate-400",
  captionMuted: "text-sm text-slate-500 dark:text-slate-400",
} as const;

export const gradients = {
  brandText:
    "bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent",
  brandSurface: "bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500",
  heroBackground:
    "bg-gradient-to-b from-emerald-50 via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900",
  primaryAction: "bg-gradient-to-r from-emerald-600 to-teal-500",
} as const;

export const shadows = {
  card: "shadow-sm",
  cardHover: "hover:shadow-xl",
  cardHoverSoft: "hover:shadow-lg",
  floating: "shadow-xl",
  elevated: "shadow-2xl",
  nav: "shadow-lg",
} as const;

export const radii = {
  badge: "rounded-full",
  control: "rounded-xl",
  panel: "rounded-2xl",
  card: "rounded-3xl",
} as const;
