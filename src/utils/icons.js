import React from "react";
import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiDayRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiNightClear,
  WiNightCloudy,
  WiNightRain,
} from "react-icons/wi";

export const getIcon = code => {
  const iconCode = {
    "01d": <WiDaySunny className="weather-icon" />,
    "02d": <WiDayCloudy className="weather-icon" />,
    "03d": <WiCloud className="weather-icon" />,
    "04d": <WiCloudy className="weather-icon" />,
    "09d": <WiRain className="weather-icon" />,
    "10d": <WiDayRain className="weather-icon" />,
    "11d": <WiThunderstorm className="weather-icon" />,
    "13d": <WiSnow className="weather-icon" />,
    "50d": <WiFog className="weather-icon" />,
    "01n": <WiNightClear className="weather-icon" />,
    "02n": <WiNightCloudy className="weather-icon" />,
    "03n": <WiCloud className="weather-icon" />,
    "04n": <WiCloudy className="weather-icon" />,
    "09n": <WiRain className="weather-icon" />,
    "10n": <WiNightRain className="weather-icon" />,
    "11n": <WiThunderstorm className="weather-icon" />,
    "13n": <WiSnow className="weather-icon" />,
    "50n": <WiFog className="weather-icon" />,
  };
  return iconCode[code];
};
