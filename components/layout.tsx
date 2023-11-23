import React from "react";
import Header from "./layout/header";

const Layout = ({ children }: any) => {
  return (
    <div className="flex">
      <Header/>
      <div className="w-full h-full">
        { children }
      </div>
    </div>
  )
}

export default Layout;
