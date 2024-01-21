import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/shadcn.config";

const config: Pick<Config, "content" | "presets" | "prefix"> = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [sharedConfig],
};

export default config;
