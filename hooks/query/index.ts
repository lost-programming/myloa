import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../keys";
import { getCharacterInfo } from "../../api/character";

// 캐릭터 정보 조회
export const useGetCharacterInfo = (name: string, filter?: string) => {
  const data = useQuery({
      queryKey: [QUERY_KEYS.GET_CHARACTER_INFO, name, filter],
      queryFn: () => getCharacterInfo(name, filter),
    }
  );
  console.log(data);
  return data;
};