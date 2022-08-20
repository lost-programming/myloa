import axios from "axios";
//https://lostark.game.onstove.com/Profile/Character/배부른나무늘보
// axios.defaults.baseURL = 'https://lostark.game.onstove.com'

export const getCharacterInfo = async () => {
  const data: any = await axios.get(
    `/Profile/Character/배부른나무늘보`,
    {
      headers: {
        'Content-Type': 'text/xml',
      }
    }
  )
};
