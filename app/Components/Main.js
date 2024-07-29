"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
const Main = () => {
  let ref = useRef(null)

  return (
    <div className=" relative  bg-[#eea47fff] text-[#00539cff] h-screen">
      <div className="h-[3rem] bg-gradient-to-r from-purple-500 to-pink-500 z-20">
        <h1 className="  text-[4rem] font-bold">Vibes:</h1>
      </div>
      <div className=" w-[52rem] mt-14 ml-20 font-extralight">
        "Vibes: the silent language that speaks volumes."{" "}
      </div>

      <div className="z top-0 absolute mt-7  ml-[59rem] bg-[url(https://i.pinimg.com/564x/5b/dd/c8/5bddc8a737a141496b63a9d54604cfe6.jpg)] bg-cover bg-center border  border-[#00539cff] h-[33rem] w-[24rem] "></div>
      <h1 className=" ml-[19rem] -pb-[1rem] text-[2rem] flex items-center ">
        Play with card
      </h1>

      <div
      ref={ref}
        className="cursor-pointer border border-blue-900 h-[24.5rem] w-[45rem] ml-36 mt-2 "
      >
      
      <motion.div
          drag
          dragConstraints={ref}
          whileDrag={{ scale: 1.2 }}
          className="bg-blue-700 h-16 rounded-[50%]  w-16 "
        ></motion.div>
          <motion.div
          drag
          dragConstraints={ref}
          whileDrag={{ scale: 1.2 }}
          className="bg-green-300 h-16 rounded-[50%]  w-16 "
        ></motion.div>
          <motion.div
          drag
          dragConstraints={ref}
          whileDrag={{ scale: 1.2 }}
          className= "mix-blend-multiply bg-pink-700 h-16 rounded-[50%]  w-16 "
        ></motion.div>
          <motion.div
          drag
          dragConstraints={ref}
          whileDrag={{ scale: 1.2 }}
          className="bg-yellow-300 h-16 rounded-[50%]  w-16 "
        ></motion.div>
          <motion.div
          drag
          dragConstraints={ref}
          whileDrag={{ scale: 1.2 }}
          className="bg-pink-300 h-16 rounded-[50%]  w-16 "
        ></motion.div>
          <motion.div
          drag
          dragConstraints={ref}
          whileDrag={{ scale: 1.2 }}
          className="bg-red-900 h-16 rounded-[50%]  w-16 "
        ></motion.div>
        
      </div>

    </div>
  );
};

export default Main;
