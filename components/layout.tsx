import React from "react";
import Header from "./layout/header";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header/>
      <div className="w-[1280px] h-full py-[80px] my-0 mx-auto">
        { children }
      </div>
    </div>
  )
}

export default Layout;
