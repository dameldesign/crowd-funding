import ProjectUpload from '@/components/forms/ProjectUpload';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className="p-10 bg-white rounded-xl shadow-xl flex flex-col justify-center items-center gap-8 mt-24">
        <div>
        <div className="w-full relative border-white bg-transparent p-3 border-[12px] -translate-y-2 max-h-[750px] flex max-w-[500px] overflow-hidden rounded-xl">
        <Image
          width={612}
          height={208}
          className="min-w-full object-cover rounded-xl"
          quality={100}
          src="/assets/images/form.png"
          alt="hero_image"
        />
      </div>
        </div>
        <h1 className='text-3xl font-normal'>Fund.io Project - Submissions</h1>
        <p className='text-sm text-black/80'>Welcome to the Fund.io Project Submission Form. Please use this form to submit your project proposal following the provided guidelines.</p>
        <div className="flex-col justify-center items-start gap-4 flex">
          <ProjectUpload />
        </div>
      </div>
    );
};

export default page;