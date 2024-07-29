"use client"
import React from "react";
import Image from "next/image";
import vibes from "../../public/vibes.png";
const Landing = () => {
  return (
    <div className="bg-[#eea47fff] h-screen pt-5">
      <div className="relative flex  items-center justify-center  ">
        <div className="bg-[url(https://i.pinimg.com/564x/c9/e9/a7/c9e9a72f4123a90d87360420c23f846b.jpg)] bg-cover bg-center border  border-[#00539cff] h-[33rem] w-[20rem]"></div>
        <div className=" bg-[url(https://i.pinimg.com/564x/9b/91/a2/9b91a2a8dbb2c0d98e1f7fa568764290.jpg)] bg-cover bg-center border border-[#00539cff]  h-[33rem] w-[20rem]"></div>
        <div className="bg-[url(https://i.pinimg.com/736x/1c/6c/2b/1c6c2be3f2113c609e2861ab543171fa.jpg)] bg-cover bg-center border border-[#00539cff]  h-[33rem] w-[20rem]"></div>
        <div className=" bg-[url(https://i.pinimg.com/564x/57/7b/56/577b5629d4d5f63d965bc2a62961e7d2.jpg)] bg-cover bg-center border border-[#00539cff]  h-[33rem] w-[20rem]"></div>
      </div>
<Image src={vibes} alt="image of vibe"  className="absolute top-[8rem] left-[16rem]  h-[10rem] w-[10rem] bg-center bg-cover" />
<div className=" absolute top-[25rem] left-[36rem]  rotate-[35deg] border-[2px] border-blue-900 w-[39rem]"></div>
    </div>
  );
};

export default Landing;

