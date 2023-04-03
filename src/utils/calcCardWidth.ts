function calcCardWidth(appWidth: number) {
  // (appWidth - xxx) / n ==> (appWidth - gaps between cards and container padding) / nb of cards a row
  if (appWidth < 250) {
    return 150;
  }
  if (appWidth < 350) {
    return (appWidth - 32) / 2;
  }
  if (appWidth < 450) {
    return (appWidth - 42) / 3;
  }
  if (appWidth < 600) {
    return (appWidth - 52) / 4;
  }
  if (appWidth < 900) {
    return (appWidth - 62) / 5;
  }
  return 150;
}

export default calcCardWidth;
