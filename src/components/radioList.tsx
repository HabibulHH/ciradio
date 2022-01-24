import "../App.css";
import Radio from "../Models/Radio";
import RadioListGenerator from "./radioItemList";

function RadioList() {
  const data = [
    new Radio("radio amar", "34.4", "/radio.png"),
    new Radio("radio today", "88.4", "/radio.png"),
    new Radio("radio shadhin", "88", "/radio.png"),
    new Radio("mango radio", "100.8", "/radio.png"),
    new Radio("radio tufan", "90.8", "/radio.png"),
    new Radio("duronto radio", "30.8", "/radio.png"),
    new Radio("duronto radio", "30.8", "/radio.png"),
    new Radio("duronto radio", "30.8", "/radio.png"),
    new Radio("duronto radio", "30.8", "/radio.png"),
  ];

  return (
    <div className="station-container">
      <RadioListGenerator radioList={data} />
    </div>
  );
}

export default RadioList;
