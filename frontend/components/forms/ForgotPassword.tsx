"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ForgotPasswordSchema } from "@/lib/validations";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof ForgotPasswordSchema>) {
    console.log(data);
    router.push("/");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormControl>
                <Input
                  type="email"
                  className="min-h-[54px] no-focus bg-light-900 rounded-xl border border-light-700"
                  placeholder="Your Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full min-h-12 px-4 py-2.5 rounded-xl bg-primary-base text-white justify-center items-center text-base font-semibold leading-normal"
        >
          Send Link
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPassword;
