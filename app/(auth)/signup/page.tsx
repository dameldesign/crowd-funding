
import Signup from "@/components/forms/Signup";

const page = () => {
  return (
    <div className="p-10 bg-white rounded-xl shadow flex flex-col justify-center items-center gap-8 mt-24">
      <div>
        <span className="text-slate-900 text-3xl font-bold leading-loose">
          Sign up to{" "}
        </span>
        <span className="text-primary-base text-3xl font-bold leading-loose">
         FUND.IO
        </span>
      </div>
      <div className="flex-col justify-center items-start gap-4 flex">
        <Signup />
      </div>
    </div>
  );
};

export default page;
