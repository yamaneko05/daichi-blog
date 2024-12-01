import { tv } from "tailwind-variants";

export const button = tv({
  base: "inline-flex items-center gap-1 rounded-lg px-4 py-2 text-center text-sm font-medium hover:bg-gradient-to-bl focus:outline-none focus:ring-4",
  variants: {
    theme: {
      blueGradient:
        "bg-gradient-to-r from-cyan-500 to-blue-500 text-white focus:ring-cyan-300 dark:focus:ring-cyan-800",
    },
  },
});
