export const TDXApi = (city, number) => {
  const baseURL = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/";
  const endPoint = `${baseURL}${city}?$top=${number}`;

  return fetch(endPoint).then((res) => res.json());
};
