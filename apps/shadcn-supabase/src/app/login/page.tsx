"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "@ui-kit/shadcn/components/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui-kit/shadcn/components/form";
import { Input } from "@ui-kit/shadcn/components/input";
import { Card, CardContent, CardHeader } from "@ui-kit/shadcn/components/card";

type Props = {
  searchParams: {
    redirectUrl?: string;
  };
};

const formSchema = z.object({
  email: z.string().email(),
});

export default function Page({ searchParams }: Props): JSX.Element {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const signIn = async (formdata: z.infer<typeof formSchema>) => {
    const { email } = formdata;
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: String(email),
      options: {
        emailRedirectTo: `${origin}/auth/callback?redirectTo=${searchParams.redirectUrl}`,
      },
    });
    if (error) throw error;
  };

  return (
    <main className="min-h-screen grid items-center justify-center">
      <Card>
        <CardHeader>Login</CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-6 p-4"
              onSubmit={form.handleSubmit(signIn)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="hello@contractgpt.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Sign In</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
