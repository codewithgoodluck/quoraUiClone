import Quora from "./component/Quora";
import "../src/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./component/users/Register";



function App() {
  return (

      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Quora} />
        <Route exact path="/reg" component={Register} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
