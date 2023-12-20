import { useRouter } from "next/router";
import InputContainer from "../components/container/inputContainer";
import withHead from "../hoc/withHead";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/images/main_banner.png" className="w-full"/>
      <div className="py-4 text-center">
        <InputContainer style={'w-[500px] h-[50px]'} placeHolder="캐릭터 검색"/>
      </div>
      {/* 최근에 검색한 캐릭터 리스트 TODO: 실제검색한 결과 보여주기 */}
      <div className="flex flex-col p-4 w-full border-t border-gray3">
        <h4 className="mb-[10px] text-md text-gray1 font-[700]">최근 검색한 캐릭터</h4>
        <div className="flex gap-2">
          <div className="flex flex-col py-2 px-3 text-gray1 bg-black2 rounded-md">
            <span className="text-md">배부른나무늘보</span>
            <span className="text-sm">1630</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withHead(Home);
