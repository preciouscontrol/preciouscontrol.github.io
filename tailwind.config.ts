import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blueprint: "hsl(var(--blueprint))",
        "blueprint-light": "hsl(var(--blueprint-light))",
        "blueprint-dark": "hsl(var(--blueprint-dark))",
        construction: "hsl(var(--construction))",
        "construction-light": "hsl(var(--construction-light))",
        "construction-dark": "hsl(var(--construction-dark))",
        steel: "hsl(var(--steel))",
        concrete: "hsl(var(--concrete))",
        metal: "hsl(var(--metal))",
      },
      fontFamily: {
        sans: ["Rajdhani", "system-ui", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--construction) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--construction) / 0.6)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "scaffold-build": {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
        "crane-swing": {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        "blueprint-scan": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        "shimmer-construction": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "reveal-up": {
          "0%": { 
            clipPath: "inset(100% 0 0 0)",
            opacity: "0"
          },
          "100%": { 
            clipPath: "inset(0 0 0 0)",
            opacity: "1"
          },
        },
        "counter": {
          "0%": { content: "0" },
          "100%": { content: "attr(data-value)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "morph": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-left": "fade-in-left 0.8s ease-out forwards",
        "fade-in-right": "fade-in-right 0.8s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "float": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "draw-line": "draw-line 2s ease-out forwards",
        "scaffold-build": "scaffold-build 1s ease-out forwards",
        "crane-swing": "crane-swing 4s ease-in-out infinite",
        "blueprint-scan": "blueprint-scan 8s linear infinite",
        "shimmer-construction": "shimmer-construction 3s linear infinite",
        "reveal-up": "reveal-up 0.8s ease-out forwards",
        "spin-slow": "spin-slow 20s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "slide-in-bottom": "slide-in-bottom 0.6s ease-out forwards",
        "morph": "morph 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
