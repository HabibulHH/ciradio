import React from "react";
import { render } from "@testing-library/react";
import RadioListGenerator from "../radioItemList";
import ReactDOM from "react-dom";
import Radio from "../../Models/Radio";
const data = [
    new Radio("radio amar", "34.4", "/radio.png")
  ];
it("renders list generator properly", () => {
  const container = document.createElement("div");
  ReactDOM.render(<RadioListGenerator radioList={data}></RadioListGenerator>, container);
});

it("renders list with data list", () => {
    render(<RadioListGenerator radioList={data} />);
});
it("renders list without data list", () => {
    render(<RadioListGenerator radioList={undefined}  />);
});
  
it("renders list without any props", () => {
    render(<RadioListGenerator   />);
});
  