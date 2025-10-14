import ReactGA from "react-ga4";
import Main from "./containers/Main";
import {useEffect} from "react";
import "./App.scss";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-C6V8XZX5C4");
    ReactGA.send("pageview");
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
