import React from "react";
import { BraceletInfo } from "../../type/character";

interface BraceletData {
  data: BraceletInfo;
}

const Bracelet = ({ data }: BraceletData) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <img src={ data.url }
             className="w-12 h-12 bg-grade2 border border-gray4 rounded-lg"/>
        <p className="text-[14px] text-white font-semibold tracking-wider">{ data.name }</p>
      </div>
      <p className="mt-4 mb-3 text-[13px] font-bold text-gray2">팔찌 효과</p>
      <ul className="flex flex-col gap-1">
        {data.effects.map((effect: string, index) => {
          return (
            <li className="text-[13px] font-[500]" key={ index }>{ effect }</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Bracelet;
