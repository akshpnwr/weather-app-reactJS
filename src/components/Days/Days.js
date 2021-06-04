import { Fragment } from "react";
import Day from "./Day/Day";
import classes from "./Days.module.css";

const Days = (props) => {
  console.log(props);

  const days = (
    <Fragment>
      {props.dailyWeatherData.slice(0, 7).map((weatherData) => {
        return (
          <Day
            key={weatherData.dt}
            date={weatherData.dt}
            weather={weatherData.weather}
            temp={weatherData.temp}
          />
        );
      })}
    </Fragment>
  );

  return <div className={classes.days}>{days}</div>;
};

export default Days;
