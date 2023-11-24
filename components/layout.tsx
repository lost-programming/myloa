import React from "react";
import Header from "./layout/header";

const Layout = ({ children }: any) => {
  return (
    <div className="flex">
      <Header/>
      <div className="relative w-full h-[100vh] overflow-y-auto border-x-[1px] border-black4">
        { children }
      </div>
    </div>
  )
}

export default Layout;
