import React from "react";
import Header from "./layout/header";

const Layout = ({ children }: any) => {
  return (
    <div className="flex font-sans">
      <Header/>
      <div className="relative w-full h-[100vh] pb-[60px] overflow-y-auto border-x-[1px] border-black4 scroll-none">
        { children }
      </div>
    </div>
  )
}

export default Layout;
