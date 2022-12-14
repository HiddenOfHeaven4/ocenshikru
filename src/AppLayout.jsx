import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import About from "./About";
import Services from "./Services";
import Facts from "./Facts";
import Contact from "./Contact";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">

          <Carousel />
          <About />
          <Facts />
          <Services />
        </Route>
        <Route exact path="/о-нас">
          <About />
          <Facts />
        </Route>
        <Route exact path="/услуги">
          <Services />
          <Facts />
        </Route>
        <Route exact path="/контакты">

          <Contact />
        </Route>
      </Switch>

      <Footer />
    </>
  );
};
export default AppLayout;
