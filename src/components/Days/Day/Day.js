import Card from "../../UI/Card/Card";
import classes from "./Day.module.css";

const Day = (props) => {
  console.log(props);

  return (
    <div className={classes.day}>
      <Card>
        <p>date</p>
        <h2>icon</h2>
        <p>weather</p>
      </Card>
    </div>
  );
};

export default Day;
