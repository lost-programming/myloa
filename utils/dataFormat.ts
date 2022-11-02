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