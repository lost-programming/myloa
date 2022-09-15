import axios from "axios";
const cheerio = require('cheerio');

export const getCharacterInfo = async () => {
  const data: any = await axios.get(
    `/Profile/Character/배부른나무늘보`
  ).then((res: any) => {
    if (res.status === 200) {
      const test: any = [];
      const html: any = res.data;
      const $ = cheerio.load(html);
      // 아이템 이미지 정보
      const $bodyList = $("div.profile-equipment__slot").children("div");
      // 장착된 장비, 카드, 보석 이름 및 효과 정보
      console.log($('script').get()[2].children[0].data);
      $bodyList.each((i: any, el: any) =>  {
        const url = el.children[0].attribs.src;
        test.push(url);
        // console.log(el);
      })
      return test;
    }
  })

  return data;
};
