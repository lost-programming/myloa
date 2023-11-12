import axios from "axios";
import { BraceletInfo, CharacterInfo, StoneInfo } from "../type/character";
import { qualityColor, findCharacterInfo, findGemEffect } from "../utils/dataFormat";
const cheerio = require('cheerio');

axios.defaults.baseURL = 'https://developer-lostark.game.onstove.com/';
axios.defaults.headers.common['accept'] = 'application/json';
axios.defaults.headers.common['authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxODY2MzcifQ.d_xyhIB8LKjaTlIXOuSdB7PQSYvoKrIeG18VmVrGBA9JxS6IDWYOh7kigcVrAUmayhej_INbALRArwDEJsMKrw0svFrG8vfs0PU4Ha3rwoiRsm-QzWvv4-Tya48OqPOM9I2rC623FY_xjGHFe3g82CfharQPsLfpwnZLqjJbJDDBMKVEdpQo1J4-PWugSFNT-vd6GHCPe4m3R13fFDgizlHpIdAHStb1pk5m4dReJ1zxSher8KGfM5VayEmdix0N73a86G_w3qtmbPdAsL6Hwe68pNUegMtkmQIQJ1CSOLV1bZzwYqB5z_BHm1vXFuSp79NsgTl4zMyIZ9ku7WGHtA';

export const getCharacterInfo = async (name: any, filter?: string) => {
  try {
    const data = await axios.get(`/armories/characters//${name}/gems`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

// export const getCharacterInfo = async (name: any) => {
//   try {
//     const response = await axios.get(
//       `/Profile/Character/${name}`
//     ).then((res: any) => {
//       const $ = cheerio.load(res.data);
//       const $bodyList = $("div.profile-equipment__slot").children("div");
//       const gemList = $("div.jewel__wrap > span");
//       const gemEffectList = $("div.jewel-effect__list > div > ul > li");
//       const chData: CharacterInfo = {
//         name: $("div.profile-character-info > span.profile-character-info__name").text(),
//         job: $("#lostark-wrapper > div > main > div > div.profile-character-info > img").attr("alt"),
//         job_img: $("#lostark-wrapper > div > main > div > div.profile-character-info > img").attr("src"),
//         item_level: Number($("div.level-info2 > div.level-info2__item > span").text().replace(/[^0-9|.]/g, '').replace(/[.]/, '')),
//         battle_level: $("div.level-info > div.level-info__item > span").text().replace(/[^0-9]/gi, ''),
//         expedition: $("div.level-info > div.level-info__expedition > span").text().replace(/[^0-9]/gi, ''),
//         server: $("div.profile-character-info > span.profile-character-info__server").text().replace(/[@]/, ''),
//         guild: $("div.game-info > div.game-info__guild").text(),
//         engraves: $("#profile-ability > div.profile-ability-engrave > div > div.swiper-wrapper > ul > li > span").text().replace(/(?<=([0-9]))/gi, ',').replace(/,\s*$/, '').split(','),
//         equ: [],
//         acc: [],
//         stone: {
//           color: '',
//           engraves : [],
//           health: '',
//           name: '',
//           url: '',
//           quality: '90',
//           quality_color: 'bg-quPink'
//         },
//         bracelet: {
//           url: '',
//           name: '',
//           color: '',
//           effects: []
//         },
//         gems: []
//       };
//       const basic = $("#profile-ability > div.profile-ability-basic > ul > li > span").text();
//       const battle = $("#profile-ability > div.profile-ability-battle > ul > li > span").text();
//       // 장착된 장비, 카드, 보석 이름 및 효과 정보
//       const equipmentInfo = $('script').get()[2].children[0].data;
//       chData.gems = findGemEffect(equipmentInfo, gemList, gemEffectList);
//       // 장착중인 아이템 이미지 가져오기
//       $bodyList.each((i: any, el: any) =>  {
//         if (!el.children[0]) { return false; }
//
//         const info = {
//           url: el.children[0].attribs.src
//         }
//         const [type, find] = findCharacterInfo(equipmentInfo, el.attribs['data-item'] + `":`);
//         Object.assign(info, find);
//         // 아이템 종류별 데이터 입력
//         switch (type) {
//           case 'acc':
//             chData.acc.push(info);
//             break;
//           case 'equ':
//             chData.equ.push(info);
//             break;
//           case 'stone':
//             chData.stone = <StoneInfo>info;
//             break;
//           case 'bracelet':
//             chData.bracelet = <BraceletInfo>info;
//             break;
//           default:
//             break;
//         }
//         //chData.equ.push(info);
//       })
//       console.log(chData);
//       return chData;
//     })
//     return response;
//   } catch (e) {
//     console.log(e);
//   }
// };