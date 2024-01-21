import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/shadcn/slate";

const config: Pick<Config, "content" | "presets" | "prefix"> = {
  content: ["./src/**/*.{ts,tsx}", "../../packages/shadcn/src/**/*.{ts,tsx}"],
  presets: [sharedConfig],
};

export default config;
