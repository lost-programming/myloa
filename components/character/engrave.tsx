import React from "react";

interface EngraveProps {

}

const Engrave = ({}: EngraveProps) => {
  return (
    <div className="flex items-center w-full my-2">
      <img src="https://static.loawa.com/seals/058.png" className="w-11 h-11 mr-2 rounded-full"/>
      <p className="">원한 Lv.3</p>
    </div>
  )
}

export default Engrave;
