import { cookies, headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      Welcome to the dashboard
    </main>
  );
}
