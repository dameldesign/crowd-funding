import ForgotPassword from "@/components/forms/ForgotPassword";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[480px] p-10 bg-white rounded-xl shadow-xl flex-col justify-start items-end gap-4 flex">
      <div className="flex-col justify-start items-center gap-6 flex">
        <p className="text-slate-900 text-3xl font-bold leading-loose">
          Forgot password?
        </p>
        <p className="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
          Enter your email address you have registered with to receive the reset
          password link
        </p>
        <ForgotPassword />
      </div>
    </div>
  );
};

export default page;
