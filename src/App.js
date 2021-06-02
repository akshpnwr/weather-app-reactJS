import { Fragment } from "react";
import Header from "./components/Header/Header";
import Weather from "./containers/Weather";
function App() {
  return (
    <Fragment>
      <Header />
      <Weather />
    </Fragment>
  );
}

export default App;
