import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Fooder";
import { Container } from "react-bootstrap";
import HomeScreens from "./screens/HomeScreens";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Container>
          {/* <HomeScreens /> */}
          <Route path={"/"} exact>
            <HomeScreens />
          </Route>
          <Route path={"/product/:id"}>
            <ProductScreen />
          </Route>
          {/* <Route path="/" exact component={<HomeScreens />} />*/}
          {/* <Route path="/product/:id" exact component={<ProductScreen />} /> */}
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
