import { useState } from "react";
import Days from "../components/Days/Days";

const Weather = (props) => {
  const [dailyWeatherData, setDailyWeatherData] = useState(null);

  const loadData = async ({ latitude, longitude }) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,current,minutely,alertsy&appid=beee642417472dda459c37521388b2e1`
    );

    if (!res.ok) return;

    const { daily } = await res.json();

    setDailyWeatherData(daily);
  };

  const successLocation = (pos) => {
    loadData(pos.coords);
  };

  const errorLocation = () => {
    console.error("Not found 404");
  };

  if (!dailyWeatherData) {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
  }

  return (
    <div>
      {dailyWeatherData ? (
        <Days dailyWeatherData={dailyWeatherData} />
      ) : (
        "Loading ...."
      )}
    </div>
  );
};

export default Weather;
