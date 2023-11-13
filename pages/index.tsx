import LinkButton from "../components/button/linkButton";
import { useRouter } from "next/router";
import InputContainer from "../components/container/inputContainer";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <InputContainer style={'w-[500px] h-[50px]'}/>

      <div className="flex justify-center mt-8">
        <LinkButton
          text={'일일 에포나 정보 test'} style={'w-[120px] h-[48px]'}
          onClick={() => router.push('/info/배부른나무늘보')}
        />
      </div>
    </div>
  )
}

export default Home;
