import React from "react";

const Layout = ({ children }: any) => {
  return (
    <div className="w-[1160px] h-full py-[80px] my-0 mx-auto">
      { children }
    </div>
  )
}

export default Layout;
