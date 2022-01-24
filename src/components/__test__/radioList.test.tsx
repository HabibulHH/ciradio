
import RasioList from "../radioList";
import ReactDOM from "react-dom";


it("renders list parent component properly", () => {
  const container = document.createElement("div");
  ReactDOM.render(<RasioList></RasioList>, container);
});
