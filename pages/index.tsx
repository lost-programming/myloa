import LinkButton from "../components/button/linkButton";
import { useRouter } from "next/router";
import InputContainer from "../components/container/inputContainer";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-4 text-center">
        <InputContainer style={'w-[500px] h-[50px]'} placeHolder="캐릭터 검색"/>
      </div>
    </div>
  )
}

export default Home;
