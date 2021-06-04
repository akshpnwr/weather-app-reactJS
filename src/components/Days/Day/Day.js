import Card from "../../UI/Card/Card";
import classes from "./Day.module.css";

const Day = (props) => {
  const day = new Date(props.date * 1000)
    .toLocaleString("en-us", {
      weekday: "long",
    })
    .toUpperCase();

  const imgSrc = `http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`;
  const description = props.weather[0].description;
  const tempInCelsius = `${(props.temp.day - 273.15).toFixed(2)}°C`;
  // console.log(date.getDay());
  // const day = date.getDay();

  return (
    <div className={classes.day}>
      <Card>
        <p>{day}</p>
        <img src={imgSrc} alt="Weather icon" />
        <p>{description}</p>
        <h2>{tempInCelsius}</h2>
      </Card>
    </div>
  );
};

export default Day;
// {dt: 1622874600,
//   description: "scattered clouds"
//   icon: "03d"
//   id: 802
//   main: "Clouds"}
// 1: {dt: 1622874600, sunrise: 1622850132, sunset: 1622899649, moonrise: 1622839020, moonset: 1622883960, …}
// 2: {dt: 1622961000, sunrise: 1622936527, sunset: 1622986076, moonrise: 1622927160, moonset: 1622973540, …}
// 3: {dt: 1623047400, sunrise: 1623022922, sunset: 1623072501, moonrise: 1623015420, moonset: 1623063000, …}
// 4: {dt: 1623133800, sunrise: 1623109319, sunset: 1623158926, moonrise: 1623103800, moonset: 1623152640, …}
// 5: {dt: 1623220200, sunrise: 1623195717, sunset: 1623245350, moonrise: 1623192300, moonset: 1623242280, …}
// 6: {dt: 1623306600, sunrise: 1623282117, sunset: 1623331773, moonrise: 1623281040, moonset: 1623331920, …}
