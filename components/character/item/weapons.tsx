import { customEquipmentType } from "../../../type/character";
import SmallColorText from "../../text/smallColorText";
import { itemBackground, qualityColor } from "../../../utils/dataFormat";

interface WeaponsPropTypes {
  item: customEquipmentType;
}

const Weapons = ({ item }: WeaponsPropTypes) => {
  return (
    <div className="flex gap-3 sm:gap-4 items-center">
      {/* 장착 아이템 이미지 */}
      <div className={`${ itemBackground(item.grade) } relative flex flex-col items-center rounded-md overflow-hidden`}>
        <img className="w-11 h-11" src={ item.icon }/>
      </div>
      <div className="flex items-center leading-none text-sm gap-x-4">
        <div className="flex flex-col gap-1">
          {/* 장비 타입, 아이템 레벨, 강화 단계, 품질 표시 */}
          <div className="flex items-center">
            <span className="w-[4.25em]">{ item.type } +{ item.enhance }</span>
            <SmallColorText text={ item.itemLevel } style="w-[3.25em] text-gray1 mr-[8px] border border-[#464c56]"/>
            <SmallColorText text={ String(item.quality) } style={`w-[2.5em] text-white1 ${ qualityColor(item.quality) }`}/>
          </div>
          {/* 초월 */}
          <div className="flex items-center h-5 text-2xs">
            {
              item.type !== "무기" && item.transcend ? (
                <>
                  <img
                    className="w-3.5 h-3.5 saturate-50"
                    src="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png"
                  />
                  <span className="ml-[4px] text-xs text-gold2">{ item.transcend?.stage }</span>
                  <span className="ml-[6px] text-xs text-gray1">x{ item.transcend?.count }</span>
                </>
              ) : (
                <span className="text-xs text-blue1">{ item.type === "무기" && item.grade === "에스더" ? "에스더" : "" }</span>
              )
            }
          </div>
        </div>
        {/* 엘릭서 표시 */}
        <div className="flex flex-col gap-2">
          {
            item.elixir?.map((v, i) => {
              return (
                <div className="flex gap-2 items-center" key={"elixir" + i}>
                  <span className="text-sm rounded-md text-center w-5 bg-black1">{ v[1] }</span>
                  <span className="text-sm text-gray1 font-normal">{ v[0] }</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Weapons;
