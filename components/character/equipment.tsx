import React from "react";

interface EquipmentProps {
  type: string;
  data?: any;
}

const Equipment = ({ type, data }: EquipmentProps) => {
  return (
    <div className="flex items-center py-2">
      <img
        src={ data && data.url }
        className="w-12 h-12 bg-grade2 border border-gray060 rounded-lg"
      />
      <div className="flex flex-col ml-2">
        <p className="text-[14px] text-white font-bold tracking-wider">
          { data && data.name }
        </p>
      </div>
    </div>
  )
}

export default Equipment;
