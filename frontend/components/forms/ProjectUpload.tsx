"use client";

import { SignupSchema } from "@/lib/validations";
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
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectUpload = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignupSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push("/user-manager");
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-10"
        >
          <div className="flex-col justify-center items-center gap-4 flex">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      type="text"
                      className="min-h-[54px] no-focus bg-light-900 rounded-xl border border-light-700"
                      placeholder="Your Full Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
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
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      type="password"
                      className="min-h-[54px] no-focus bg-light-900 rounded-xl border border-light-700"
                      placeholder="Your Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      type="password"
                      className="min-h-[54px] no-focus bg-light-900 rounded-xl border border-light-700"
                      placeholder="Retype Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <div className="w-full text-center">
              <span className="text-gray-500 text-[13px] font-normal leading-tight">
              We look forward to{" "}
              </span>
              <Link
                href="/"
                className="text-links text-[13px] font-normal leading-tight"
              >
               Reviewing
              </Link>
              <span className="text-gray-500 text-[13px] font-normal leading-tight">
                {" "}
                your{" "}
              </span>
              <Link
                href="/"
                className="text-links text-[13px] font-normal mr-1 leading-tight"
              >
                Innovative 
              </Link>
              <span className="text-gray-500 text-[13px] font-normal leading-tight">
                 ideas and contributions</span>
            </div>
            <Button
              type="submit"
              className="w-full min-h-12 px-4 py-2.5 rounded-xl bg-primary-base text-white justify-center items-center text-base font-semibold leading-normal"
            >
             Submit 
            </Button>
           
          </div>
        </form>
      </Form>
    </>
  );
};

export default ProjectUpload;
