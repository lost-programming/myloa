import React from "react";

interface EquipmentProps {
  type: string;
}

const Equipment = ({ type }: EquipmentProps) => {
  return (
    <div className="flex items-center py-2">
      <img
        src={
          type === 'accessories' ?
          'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_213.png' :
          'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/MEM_Item/MEM_Item_165.png'
        }
        className="w-12 h-12 bg-grade2 border border-gray060 rounded-lg"
      />
      <div className="flex flex-col ml-2">
        <p className="text-[14px] font-bold">
          { type === 'accessories' ? '목걸이' : '투구' }
        </p>
        <p className="text-[14px] text-ancient">
          { type === 'accessories' ? '참혹한 파멸의 목걸이 (특화/신속)' : '+25 광기의 지배 머리장식' }
        </p>
      </div>
    </div>
  )
}

export default Equipment;
