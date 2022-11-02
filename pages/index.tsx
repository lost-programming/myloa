import LinkButton from "../components/button/linkButton";
import { useRouter } from "next/router";
import { useState } from "react";
import SearchIcon from "../components/icon/searchIcon";

const Home = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex items-center">
        <input
          type='text'
          value={name}
          className='w-[500px] h-[50px] p-4 border border-gray3 rounded-md bg-gray3 text-white'
          onChange={(e) => setName(e.target.value)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              router.push(`/info/${name}`);
            }
          }}
        />
        <SearchIcon
          style={'absolute right-[15px] text-white cursor-pointer'}
          onClick={() => router.push(`/info/${name}`)}
        />
      </div>
      <div className="flex justify-center mt-8">
        <LinkButton
          text={'일일 에포나 정보'} style={'w-[120px] h-[48px]'}
          onClick={() => router.push('/info/배부른나무늘보')}
        />
      </div>
    </div>
  )
}

export default Home;
