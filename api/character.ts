import axios from "axios";
import { CharacterInfo } from "../type/character";
const cheerio = require('cheerio');

export const getCharacterInfo = async (name: any) => {
  try {
    const response = await axios.get(
      `/Profile/Character/${name}`
    ).then((res: any) => {
      const $ = cheerio.load(res.data);
      const $bodyList = $("div.profile-equipment__slot").children("div");
      const chData: CharacterInfo = {
        name: $("div.profile-character-info > span.profile-character-info__name").text(),
        job: $("#lostark-wrapper > div > main > div > div.profile-character-info > img").attr("alt"),
        item_level: $("div.level-info2 > div.level-info2__item > span").text().replace(/[^0-9|,.]/g, '').replace(/[.]/, ''),
        battle_level: $("div.level-info > div.level-info__item > span").text().replace(/[^0-9]/gi, ''),
        expedition: $("div.level-info > div.level-info__expedition > span").text().replace(/[^0-9]/gi, ''),
        server: $("div.profile-character-info > span.profile-character-info__server").text().replace(/[@]/, ''),
        guild: $("div.game-info > div.game-info__guild").text(),
        equ: [],
        acc: [],
      };
      const gak = $("#profile-ability > div.profile-ability-engrave > div > div.swiper-wrapper > ul > li > span").text();
      const basic = $("#profile-ability > div.profile-ability-basic > ul > li > span").text();
      const battle = $("#profile-ability > div.profile-ability-battle > ul > li > span").text();
      // 장착된 장비, 카드, 보석 이름 및 효과 정보
      const equipmentInfo = $('script').get()[2].children[0].data;
      // 장착중인 아이템 이미지 가져오기
      $bodyList.each((i: any, el: any) =>  {
        if (!el.children[0]) {
          return false;
        }
        const info = {
          url: el.children[0].attribs.src
        }
        const [type, find] = findCharacterInfo(equipmentInfo, el.attribs['data-item'] + `":`);
        Object.assign(info, find);
        switch (type) {
          case 'acc':
            chData.acc.push(info);
            break;
          case 'equ':
            chData.equ.push(info);
          default:
            break;
        }
        //chData.equ.push(info);
      })
      console.log(chData);
      return chData;
    })
    return response;
  } catch (e) {
    console.log(e);
  }
};

const findCharacterInfo = (target: any, variable: any) => {
  const items: any = {};
  const chopFront = target.substring(target.search(variable)+variable.length, target.length);
  const itemNameList = chopFront.substring(chopFront.search(`"type"`), chopFront.search(`},`));
  const itemName = itemNameList.substring(itemNameList.search('#'), itemNameList.search('</FONT>'));
  // 장비, 각인 이름 가져오기
  if (itemName) {
    // 색깔 + 이름
    const name = itemName.split("'>");
    items.color = name[0];
    items.name = name[1];
  } else {
    // 장착한 각인
    const engraveList = itemNameList.substring(itemNameList.search('value'), itemNameList.search('value') + 20);
    const engrave = engraveList.split(':');
    items.name = engrave[1].replace(/\n|\r|\s|\"*/g, "");
  }
  // 장착한 장비 상세 정보 (품질, 등급 등등)
  const list = chopFront.substring(chopFront.search(`"Element_001":`), chopFront.search(`"Element_002"`)).split('value":');
  const itemDetail = JSON.parse(list[1].replace('},', ''));
  let itemType = '';
  // 장비, 악세, 각인 구분해서 상태별로 푸시
  if (itemDetail.leftStr0) {
    if (itemDetail.leftStr0.search(/목걸이|귀걸이|반지/) > 0) {
      items.quality = itemDetail.qualityValue;
      itemType = 'acc';
    } else if (itemDetail.leftStr0.search('스톤') > 0) {
      itemType = 'stone';
    } else if (itemDetail.leftStr0.search('팔찌') > 0) {
      itemType = 'pal';
    } else {
      const list = chopFront.substring(chopFront.search(`"Element_008":`), chopFront.search(`"Element_009"`)).split('value":');
      const setLevelData =JSON.parse(list[1].replace('},', ''));

      items.quality = itemDetail.qualityValue;
      itemType = 'equ';
    }
  }
  return [itemType, items];
  // 팔찌 효과 정보 => Element_004
  // console.log(itemDetail);
}
