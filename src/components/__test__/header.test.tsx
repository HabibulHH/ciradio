import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../header";
import ReactDOM from "react-dom";

test("renders learn react link", () => {
  //render(<Header />);
  const container = document.createElement("div");
  ReactDOM.render(<Header></Header>, container);
});
