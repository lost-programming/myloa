import { customAccType } from "../../../type/character";
import SmallColorText from "../../text/smallColorText";
import { qualityColor } from "../../../utils/dataFormat";
import SmallBoxText from "../../text/smallBoxText";

interface AccessoriesPropType {
  acc: customAccType;
}

const Accessories = ({ acc }: AccessoriesPropType) => {
  return (
    <div className="flex gap-3 sm:gap-4 items-center">
      {/* 장신구 이미지 */}
      <div className="bg-gradient-to-br from-[#3d3325] to-[#dcc999] relative flex flex-col items-center rounded-md overflow-hidden">
        <img className="w-11 h-11" src={ acc.icon }/>
      </div>
      <div className="flex items-center leading-none text-sm">
        <div className="flex flex-col gap-1.5">
          {/* 장신구 이름, 스탯, 품질  */}
          <div className="flex items-center">
            <span className="w-fit mr-[8px]">{ acc.name }</span>
            { acc.stat?.map((v) =>
              <SmallColorText text={ v } style="px-2 mr-[4px] color-gray1 leading-snug border border-[#464c56]" key={ v }/>
            )}
            { acc.type !== "어빌리티 스톤" &&
              <SmallColorText text={ String(acc.quality) } style={`w-[2.5em] ml-[4px] text-white ${ qualityColor(acc.quality) }`}/>
            }
          </div>
          {/* 각인 표시 */}
          <div className="flex items-center last:bg-red05">
            {
              acc.engraves?.map((v) => <SmallColorText text={ v } style="w-fit px-2 py-0.5 mr-[8px] bg-black1" key={ v.replace(/\d/g, "") }/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
