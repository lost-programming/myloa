import LinkButton from "../components/button/linkButton";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <LinkButton
            text={'캐릭터 정보'} style={'w-[120px] h-[48px] mr-[4px]'}
            onClick={() => router.push('/info')}
          />
          <LinkButton
            text={'일일 에포나 정보'} style={'w-[120px] h-[48px]'}
            onClick={() => router.push('/info')}
          />
        </div>
      </div>
    </>
  )
}

export default Home
