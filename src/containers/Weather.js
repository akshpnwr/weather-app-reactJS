import Card from "../components/UI/Card/Card";

const Weather = (props) => {
  const loadData = async ({ latitude, longitude }) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,current,minutel,alertsy&appid=beee642417472dda459c37521388b2e1`
    );

    if (!res.ok) return;

    const data = await res.json();

    console.log(data);
  };

  const successLocation = (pos) => {
    // const { latitude: lat, longitude: lon } = pos.coords;

    loadData(pos.coords);
  };

  const errorLocation = () => {
    console.error("Not found 404");
  };

  navigator.geolocation.getCurrentPosition(successLocation, errorLocation);

  return (
    <div>
      <Card>Day 1</Card>
    </div>
  );
};

export default Weather;
