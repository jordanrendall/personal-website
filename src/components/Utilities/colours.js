export const ballBlue = `hsl(195, 77%, 30%)`;
export const lighterBallBlue = `hsl(195, 77%, 90%)`;
export const lightestBallBlue = `hsl(195, 77%, 95%)`;
export const modalBackground = `hsla(195, 77%, 40%, 0.6)`;
export const dangerRed = `hsl(0, 100%, 50%)`;
export const lightDangerRed = `hsl(0, 100%, 80%)`;
export const lightestDangerRed = `hsl(0, 100%, 95%)`;

export const grayBlue = '#4A6770';
export const midBlue = '#128DB3';
export const lightBlue = '#6BDCFF';
export const orange = '#F07800';
export const lightOrange = '#FFCC5D';
export const lightBrown = '#BC9A78';
export const white = '#ffffff';

export const primary = [midBlue, lightBlue, grayBlue, modalBackground];
export const danger = [dangerRed, lightDangerRed, ballBlue, lightestDangerRed];

export default (colourIndex, importance = 0) =>
  colourIndex === 0 ? primary[importance] : danger[importance];
