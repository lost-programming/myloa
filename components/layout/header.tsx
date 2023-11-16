import React from "react";
import InputContainer from "../container/inputContainer";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className="fixed w-full h-[3.375rem] bg-black020 border-b-[1px] border-black030 z-[999]">
      <div className="h-full flex items-center justify-between w-[1280px] mx-auto">
        <p className="cursor-pointer" onClick={() => router.push('/')}>Home</p>
        <InputContainer style={'w-[230px] h-[20px]'}/>
      </div>
    </div>
  )
}

export default Header;
