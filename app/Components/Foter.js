"use client";
import React from "react";

const Foter = () => {
  return (
    <div className="h-screen bg-[#eea47fff] text-[#00539cff]">
      <h1 className="text-[3rem] flex items-center justify-center ">
        Music Session
        
      </h1>

       <div className="  border-b-2 border-[#00539cff] -mt-1 w-[35rem] ml-[30%] "></div>


      <audio className="mt-14 ml-4"
         controls
         src="/music.mp3"
       >
         Your browser does not support the
         <code className="bg-slate-700">audio</code> element.
       </audio>
       <div className=" border-b-2 border-[#00539cff] mt-3 "></div>

       <audio className="mt-6 ml-[12rem] "
         controls
         src="/jj.wav"
       >
         Your browser does not support the
         <code className="bg-slate-700">audio</code> element.
       </audio>
       <div className=" border-b-2 border-[#00539cff] mt-3 "></div>

       <audio className="mt-6 ml-[22rem] "
         controls
         src="/kk.wav"
       >
         Your browser does not support the
         <code className="bg-slate-700">audio</code> element.
       </audio>
       <div className=" border-b-2 border-[#00539cff] mt-3 "></div>
       <audio className="mt-6 ml-[33rem]"
         controls
         src="/l.wav"
       >
         Your browser does not support the
         <code className="bg-slate-700">audio</code> element.
       </audio>
    </div>
  );
};

export default Foter;
