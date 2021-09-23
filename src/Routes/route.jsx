import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./home";
import { Products } from "./products";
import { ProductsPage } from "./ProductPage";
import { Switch } from "react-router-dom";
const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id">
          <ProductsPage />
        </Route>
        <Route>404 not found</Route>
      </Switch>
    </div>
  );
};

export { Router };
