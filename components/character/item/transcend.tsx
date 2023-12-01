import { CustomEquipmentType } from "../../../type/character";
import { TranscendAvg } from "../../../utils/dataFormat";

interface TranscendPropsType {
  items: CustomEquipmentType[] | undefined;
}

const Transcend = ({ items }: TranscendPropsType) => {
  if (!items || TranscendAvg(items) <= 0) return <></>;


  return (
    <div className="">
      <div className="flex items-center mb-3">초월</div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1 space-y-1">
          <p className="flex items-center text-xs text-gray1">
            <img
              className="w-4 h-4 saturate-50"
              src="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png"
            />
            <span>합계 { TranscendAvg(items) }</span>
          </p>
          <p className="flex leading-none text-sm">
            평균 { (TranscendAvg(items) / 15).toFixed(1) }단계
          </p>
        </div>
      </div>
    </div>
  )
};

export default Transcend;