const white = "#ffffff";
const silver = "#808080";

const freezing = "#000000";
const cold = "#d1dfe6";
const chilly = "#b2eddb";
const good = "#e6f7b0";
const warm = "#fcec6f";
const hot = "#ffc175";
const burning = "#fca474";

export const getWeatherColor = tempInCelsius => {
  let bg,
    text = "";
  if (tempInCelsius <= -5) {
    bg = freezing;
    text = "#000000";
  } else if (tempInCelsius <= 5) {
    bg = cold;
    text = silver;
  } else if (tempInCelsius <= 20) {
    bg = chilly;
    text = silver;
  } else if (tempInCelsius <= 26) {
    bg = good;
    text = silver;
  } else if (tempInCelsius <= 32) {
    bg = warm;
    text = silver;
  } else if (tempInCelsius <= 36) {
    bg = hot;
    text = silver;
  } else {
    bg = burning;
    text = white;
  }
  return {
    bg,
    text,
  };
};
