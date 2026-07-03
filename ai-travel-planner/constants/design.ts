export const spacing = {
  container: "mx-auto max-w-7xl px-5 sm:px-6 lg:px-8",
  section: "py-24 sm:py-28",
  heroSection: "pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24",
  sectionHeader: "mb-12 sm:mb-16",
  card: "p-8",
  cardCompact: "p-6",
  stackSm: "space-y-3",
  stackMd: "space-y-4",
  gridCards: "grid gap-8",
} as const;

export const typography = {
  sectionTitle:
    "text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl",
  sectionDescription:
    "mt-4 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-8",
  cardTitle: "text-xl font-semibold tracking-tight",
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
  card: "shadow-lg shadow-slate-950/5 dark:shadow-black/20",
  cardHover: "hover:shadow-xl hover:shadow-emerald-950/10",
  cardHoverSoft: "hover:shadow-xl hover:shadow-slate-950/10",
  floating: "shadow-2xl shadow-emerald-950/20",
  elevated: "shadow-2xl shadow-slate-950/10 dark:shadow-black/30",
  nav: "shadow-lg shadow-slate-950/5 dark:shadow-black/20",
} as const;

export const radii = {
  badge: "rounded-full",
  control: "rounded-xl",
  panel: "rounded-2xl",
  card: "rounded-2xl",
} as const;
