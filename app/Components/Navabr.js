import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#eea47fff] text-[#00539cff]">
      <div className="flex items-center justify-center text-[1rem] pt-1">
       <Link href="/" className="mr-4 cursor-pointer text-[1.1rem]">Home</Link>
       <Link href="/About" className="mr-4 cursor-pointer text-[1.1rem]">About</Link>
       <Link href="/Contact" className="mr-4 cursor-pointer text-[1.1rem]">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;