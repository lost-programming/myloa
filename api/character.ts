import axios from "axios";
const cheerio = require('cheerio');

export const getCharacterInfo = async (name: any) => {
  console.log(name);
  if (name) {
    const data: any = await axios.get(
      `/Profile/Character/${name}`
    ).then((res: any) => {
      if (res.status === 200) {
        const test: any = [];
        const html: any = res.data;
        const $ = cheerio.load(html);
        // 아이템 이미지 정보
        const $bodyList = $("div.profile-equipment__slot").children("div");
        const job = $("#lostark-wrapper > div > main > div > div.profile-character-info > img").attr("alt");
        const gak = $("#profile-ability > div.profile-ability-engrave > div > div.swiper-wrapper > ul > li > span").text();
        console.log('job: ' + job);
        console.log(gak);
        // 장착된 장비, 카드, 보석 이름 및 효과 정보
        const equipmentInfo = $('script').get()[2].children[0].data;
        const find = findTextAndReturnRemainder(equipmentInfo, '목걸이');
        console.log(find);
        // console.log(equipmentInfo);
        $bodyList.each((i: any, el: any) =>  {
          const url = el.children[0].attribs.src;
          test.push(url);
          // console.log(el);
        })
        return test;
      }
    })

    return data;
  }
};

function findTextAndReturnRemainder(target: any, variable: any){
  var chopFront = target.substring(target.search(variable)+variable.length,target.length);
  var result = chopFront.substring(0,chopFront.search(";"));
  return result;
}
