import "./App.css";
import "./assets/style.css";
import "./assets/bootstrap.min.css";
import AppLayout from "./AppLayout";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AppLayout} />
        <Route exact path="/о-нас" component={AppLayout} />
        <Route exact path="/услуги" component={AppLayout} />
        <Route exact path="/контакты" component={AppLayout} />
      </Switch>
    </div>
  );
}

export default App;
