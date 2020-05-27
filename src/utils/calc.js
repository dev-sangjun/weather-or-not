import { FAHRENHEIT } from "../reducers";
export const roundTemp = temp => parseFloat(temp).toFixed(1);
export const convertTemp = (degree, tempInCelsius) =>
  roundTemp(degree === FAHRENHEIT ? tempInCelsius * 1.8 + 32 : tempInCelsius);
export const getCurUTCDate = () => {
  const today = new Date();
  const curTimezoneOffset = today.getTimezoneOffset() * 60;
  return new Date(today.getTime() + curTimezoneOffset * 1000);
};
export const getUTCDateWithOffset = (UTCDate, timezoneOffset) => {
  return new Date(UTCDate.getTime() + timezoneOffset * 1000);
};
const formatTwoDigitNumber = num => {
  return num < 10 ? `0${num}` : num;
};
export const getTimeString = date => {
  const hr = date.getHours() > 12 ? date.getHours() % 12 : date.getHours();
  const mn = date.getMinutes();
  const pr = date.getHours() < 12 ? "AM" : "PM";
  return `${formatTwoDigitNumber(hr)}:${formatTwoDigitNumber(mn)} ${pr}`;
};
