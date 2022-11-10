export const qualityColor = (quality: number) => {
  if (quality === 100) {
    return 'bg-quGold';
  } else if (quality >= 90) {
    return 'bg-quPink';
  } else if (quality >= 70) {
    return 'bg-quBlue';
  } else if (quality >= 30) {
    return 'bg-quGreen';
  } else if (quality >= 10) {
    return 'bg-quOrange';
  } else {
    return 'bg-quRed';
  }
}

export const itemBackground = (code: string) => {
  switch (code) {
    case '#F99200':
      return 'bg-grade4';
    case '#FA5D00':
      return 'bg-grade3';
    case '#E3C7A1':
      return 'bg-grade2';
    case '#00B0FA':
      return 'bg-grade5';
    case '#ce43fc':
      return 'bg-grade6';
    default:
      return 'bg-grade2';
  }
}

export const findCharacterInfo = (target: any, variable: any) => {
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
  const itemDetail = changeHtmlToJson(chopFront, '"Element_001":', '"Element_002"');
  let itemType = '';
  // 장비, 악세, 각인 구분해서 상태별로 푸시
  if (itemDetail.leftStr0) {
    if (itemDetail.leftStr0.search(/목걸이|귀걸이|반지/) > 0) {
      // 장신구 특성 정리
      const effects = changeHtmlToJson(chopFront, '"Element_005":', '"Element_006"');

      items.quality = itemDetail.qualityValue;
      items.quality_color = qualityColor(itemDetail.qualityValue);
      items.effect = effects.Element_001.replace(/<BR>/g, ' ').replace(/[+]/g, ''); // 특성
      items.engraves = searchEngraves(chopFront);
      itemType = 'acc';
    } else if (itemDetail.leftStr0.search('스톤') > 0) {
      const healthData = changeHtmlToJson(chopFront, '"Element_004":', '"Element_005"');

      items.engraves = searchEngraves(chopFront);
      items.health = healthData.Element_001;
      items.quality = items.engraves.join(',').replace(/[ㄱ-힁]| /g, '').replace(/[,]/g, ' ');
      items.quality_color = 'bg-quPink';
      itemType = 'stone';
    } else if (itemDetail.leftStr0.search('팔찌') > 0) {
      const effects = changeHtmlToJson(chopFront, '"Element_004":', '"Element_005"');
      const list = effects.Element_001.replace(/<BR>/g, 'ㅢ').replace(/#f9f7d0|#99ff99|#969696|-6|-5|'20'|[a-z]|[\[\]#<>'"_=/-]/gi, '').replace(/ +/g, ' ').split('ㅢ');

      items.effects = list;
      itemType = 'bracelet';
    } else {
      const setLevelData = changeHtmlToJson(chopFront, '"Element_008":', '"Element_009"');

      items.level = itemDetail.leftStr2.substring(itemDetail.leftStr2.indexOf('레벨 '), itemDetail.leftStr2.indexOf(' ('));
      items.set_level = setLevelData.Element_001 ? setLevelData.Element_001.replace(/FONT|COLOR|FFD200|[=<>/'#]| */g, '') : '';
      items.quality = itemDetail.qualityValue;
      items.quality_color = qualityColor(itemDetail.qualityValue);
      itemType = 'equ';
    }
  }
  return [itemType, items];
  // 팔찌 효과 정보 => Element_004
  // console.log(itemDetail);
}

export const searchEngraves = (list: string) => {
  const engraveHtml = list.substring(list.search(`"Element_006":`), list.search(`"Element_007"`)).split('value":')[1];
  const engraveJson = JSON.parse(engraveHtml.substring(engraveHtml.search('"contentStr":'), engraveHtml.search('"topStr"')).replace('"contentStr": ', '').replace(/,\s*$/, ''));

  const enList = [];
  engraveJson.Element_000 ? enList.push(replaceText(engraveJson.Element_000.contentStr)) : '';
  engraveJson.Element_001 ? enList.push(replaceText(engraveJson.Element_001.contentStr)) : '';
  engraveJson.Element_002 ? enList.push(replaceText(engraveJson.Element_002.contentStr)) : '';

  return enList;
}

const replaceText = (text: string) => {
  return text.replace(/활성화|[\[\]<>+.,"'=#/]|FE2E2E|[a-z]|활성도 /ig, '').replace(/ /, '');
}

export const changeHtmlToJson = (html: string, range1: string, range2: string) => {
  const changeHtml = html.substring(html.search(range1), html.search(range2)).split('value":');
  const info = JSON.parse(changeHtml[1].replace('},', ''));

  return info;
}

export const findGemEffect = (script: any, gemImgList: any, gemEffectsList: any) => {
  const gemList: any = [];
  const effectList: any = [];
  gemImgList.each((i: any, el: any) => {
    const variable = el.attribs['data-item'] + `":`;
    const chopFront = script.substring(script.search(variable)+variable.length, script.length);
    const gemName = changeHtmlToJson(chopFront, '"Element_000":', '"Element_001"');
    const imgData = {
      name: gemName.replace(/[^0-9ㄱ-힁 ]|99200/gi, '').replace(/ +/, ''),
      url: el.children[3].children[0].attribs.src,
      level: Number(gemName.replace(/[^0-9]|99200/g, '')),
      type: gemName.replace(/[^0-9ㄱ-힁 ]|99200/gi, '').replace(/레벨|의|보석|[0-9]| /g, '')
    }
    gemList.push(imgData);
  })
  gemEffectsList.each((i: any, el: any) => {
    const effectData = {
      skill_img: el.children[1].children[1].attribs.src,
      skill_name: el.children[3].children[0].data,
      gemEffect: el.children[5].children[1].data.replace(/ /, '')
    }
    effectList.push(effectData);
  })
  for (let i = 0; i < gemList.length; i++) {
    Object.assign(gemList[i], effectList[i]);
  }
  gemList.sort((a: any, b: any) => {
    return b.level - a.level
  })
  gemList.sort((a: any, b: any) => {
    return a.type < b.type ? -1 : a.type > b.type ? 1 : 0;
  })
  return gemList;
}