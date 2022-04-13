import dataRegions from "./table-data.json";

export const CountRegionsRoad = (regionName) => {
  let tamirYol = 0,
    rejaYol = 0,
    tayyorYol = 0;

  dataRegions.forEach((data) => {
    if (data.viloyat === regionName) {
      if (data.statusi === "Rejalashtirilmoqda") rejaYol += data.uzunligi;
      if (data.statusi === "Ta'mirlanmoqda") tamirYol += data.uzunligi;
      if (data.statusi === "Tayyor") tayyorYol += data.uzunligi;
    }
  });

  return {
    viloyat: regionName,
    reja: Math.ceil(rejaYol),
    tamir: Math.ceil(tamirYol),
    tayyor: Math.ceil(tayyorYol),
  };
};

export const CountRespublicRoad = () => {
  let tamirYol = 0,
    rejaYol = 0,
    tayyorYol = 0;

  dataRegions.forEach((data) => {
    if (data.statusi === "Rejalashtirilmoqda") rejaYol += data.uzunligi;
    if (data.statusi === "Ta'mirlanmoqda") tamirYol += data.uzunligi;
    if (data.statusi === "Tayyor") tayyorYol += data.uzunligi;
  });
  return {
    viloyat: "O'zbekiston Respublikasi",
    reja: Math.ceil(rejaYol),
    tamir: Math.ceil(tamirYol),
    tayyor: Math.ceil(tayyorYol),
  };
};