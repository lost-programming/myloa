import React, { useState } from "react";
import SearchIcon from "../icon/searchIcon";
import { useRouter } from "next/router";

interface inputContainerType {
  style: string;
}

const InputContainer = ({ style }: inputContainerType) => {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <div className="relative flex items-center">
      <input
        type='text'
        value={name}
        className={`${ style } p-4 border border-gray3 rounded-md bg-gray3 text-white`}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={(e) => {
          if (!name) return false;
          if (e.keyCode === 13) {
            router.push(`/info/${name}`);
            setName('');
          }
        }}
      />
      <SearchIcon
        style={'absolute right-[15px] text-white cursor-pointer'}
        onClick={() => {
          if (!name) return false;
          router.push(`/info/${name}`)
        }}
      />
    </div>
  )
}

export default InputContainer;