import { Fragment } from "react";
import Day from "./Day/Day";
import classes from "./Days.module.css";

const Days = (props) => {
  const days = (
    <Fragment>
      {props.dailyWeatherData.map((weatherData) => {
        return (
          <Day
            key={weatherData.dt}
            date={weatherData.dt}
            weather={weatherData.weather}
          />
        );
      })}
    </Fragment>
  );

  return <div className={classes.days}>{days}</div>;
};

export default Days;
