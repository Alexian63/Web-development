import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // Chercher dans tous les fichiers du dossier src
    "./src/styles/**/*.css",         // Chercher également dans les fichiers CSS
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bleu_oser: "#11B4B9",
        bleu_fonce: "#312682",
        rouge_oser: "#F3395E",
        violet_fonce: "#1F1A4C",
        gris_oser: "D6FAFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
