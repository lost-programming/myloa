import { CustomAccType } from "../../../type/character";
import { itemBackground, qualityColor } from "../../../utils/dataFormat";
import SmallColorText from "../../text/smallColorText";

interface AccessoriesPropType {
  acc: CustomAccType;
}

const Accessories = ({ acc }: AccessoriesPropType) => {
  return (
    <div className="flex gap-3 sm:gap-4 items-center">
      {/* 장신구 이미지 */}
      <div className={`${ itemBackground(acc.grade) } relative flex flex-col items-center rounded-md overflow-hidden`}>
        <img className="w-11 h-11" src={ acc.icon }/>
      </div>
      <div className="flex items-center leading-none text-sm">
        <div className="flex flex-col gap-1.5">
          {/* 장신구 이름, 스탯, 품질  */}
          <div className="flex items-center">
            <span className="w-fit mr-[8px]">{ acc.name }</span>
            { acc.stat?.map((stat) =>
              <SmallColorText text={ stat } style="px-2 mr-[4px] text-gray1 leading-snug border border-[#464c56]" key={ stat }/>
            )}
            { acc.type !== "어빌리티 스톤" &&
              <SmallColorText text={ String(acc.quality) } style={`w-[2.5em] ml-[4px] text-white1 ${ qualityColor(acc.quality) }`}/>
            }
          </div>
          {/* 각인 표시 */}
          <div className="flex items-center">
            {
              acc.engraves?.map((engrave) =>
                <SmallColorText text={ engrave } style="w-fit px-2 py-0.5 mr-[8px] bg-black1" key={ engrave.replace(/\d/g, "") }/>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
