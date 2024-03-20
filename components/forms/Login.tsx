"use client";

import { LoginSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof LoginSchema>) {
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
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full justify-between items-center flex">
              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-gray-500 font-normal text-sm">
                        Remember me
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Link
                href="/forgot-password"
                className="text-links text-sm font-normal"
              >
                Forgot password?
              </Link>
            </div>
            <div className="w-full text-center">
              <span className="text-gray-500 text-xs font-normal leading-tight">
                Proceeding, you agree to Connect Nigeria{" "}
              </span>
              <Link
                href="/"
                className="text-links text-xs font-normal leading-tight"
              >
                Terms of Use
              </Link>
              <span className="text-gray-500 text-xs font-normal leading-tight">
                {" "}
                and{" "}
              </span>
              <Link
                href="/"
                className="text-links text-xs font-normal leading-tight"
              >
                Privacy Policy
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full min-h-12 px-4 py-2.5 rounded-xl bg-primary-base text-white justify-center items-center text-base font-semibold leading-normal"
            >
              Login
            </Button>
            <p className="text-gray-500 text-sm font-normal flex w-full items-center gap-2">
              Don&lsquo;t have account?
              <Link href="/signup" className="text-links text-sm font-normal">
                Sign up
              </Link>
            </p>
            <div className="w-full justify-center items-center gap-4 flex">
              <div className="w-full h-[0px] border border-neutral-300"></div>
              <div className="text-gray-500 text-base font-normal leading-normal">
                Or
              </div>
              <div className="w-full h-[0px] border border-neutral-300"></div>
            </div>
          </div>
        </form>
      </Form>
      <Link
        href=""
        className="flex items-center justify-center gap-2 w-full m-h-11 py-3 bg-blue-500 rounded-xl shadow border border-gray-300"
      >
        <Image
          src="/assets/icons/fb.svg"
          alt="facebook"
          width={24}
          height={24}
          className="object-contain mr-4"
        />
        <p className="text-light-900 text-base font-semibold ml-7">
          Continue with Facebook
        </p>
      </Link>
      <Link
        href=""
        className="flex items-center justify-center gap-2 w-full m-h-11 py-3 bg-white rounded-xl shadow border border-gray-300"
      >
        <Image
          src="/assets/icons/gl.svg"
          alt="google"
          width={24}
          height={24}
          className="object-contain mr-4"
        />
        <p className="text-slate-700 text-base font-semibold ml-7">
          Continue with Google
        </p>
      </Link>
    </>
  );
};

export default Login;
