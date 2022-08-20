import React from "react";

const Bracelet = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_304.png"
             className="w-12 h-12 bg-grade2 border border-gray060 rounded-lg"/>
        <p className="ml-2 text-[14px] text-ancient font-bold">찬란한 영웅의 팔찌</p>
      </div>
      <p className="mt-4 mb-3 text-[13px] text-blue030 font-bold">팔찌 효과</p>
      <p className="flex items-start my-1">
        <img src="https://static.loawa.com/icons/ico_tooltip_locked.png"
             className="w-5 h-5"/>
        <span className="ml-1 text-[13px] font-[500]">신속 + 100</span>
      </p>
      <p className="flex items-start my-1">
        <img src="https://static.loawa.com/icons/ico_tooltip_locked.png"
             className="w-5 h-5"/>
        <span className="ml-1 text-[13px] font-[500]">특화 + 100</span>
      </p>
      <p className="flex items-start my-1">
        <img src="https://static.loawa.com/icons/ico_tooltip_changeable.png"
             className="w-5 h-5"/>
        <span className="ml-1 text-[13px] font-[500]">
          [순환] 몬스터에게 공격 정중 시 30초 동안 '순환'효과를 획득한다. 해당 효과는 갱신되지 않는다.<br/>
          순환: 10초 간격으로 스킬 피해 3% 증가, 치명타 적중률 5% 증가, 치명타 피해 8% 증가 효과가 순차적으로 적용된다.
        </span>
      </p>
    </div>
  )
}

export default Bracelet;
