import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [data, setData] = useState("");

  function changeDta(e) {
    setData(data.concat(e.target.value));
  }

  function getResult() {
    setData(eval(data).toString());
  }

  function allClear() {
    setData("");
  }
  return (
    <div className="main">
      <input className="input" type="text" id="output" value={data} />

      <input type="button" value="7" className="button" onClick={changeDta} />
      <input type="button" value="8" className="button" onClick={changeDta} />
      <input type="button" value="9" className="button" onClick={changeDta} />
      <input type="button" value="/" className="opt" onClick={changeDta} />
      <input type="button" value="4" className="button" onClick={changeDta} />
      <input type="button" value="5" className="button" onClick={changeDta} />
      <input type="button" value="6" className="button" onClick={changeDta} />
      <input type="button" value="*" className="opt" onClick={changeDta} />
      <input type="button" value="1" className="button" onClick={changeDta} />
      <input type="button" value="2" className="button" onClick={changeDta} />
      <input type="button" value="3" className="button" onClick={changeDta} />
      <input type="button" value="+" className="opt" onClick={changeDta} />
      <input type="button" value="." className="button" onClick={changeDta} />
      <input type="button" value="0" className="button" onClick={changeDta} />
      <input type="button" value="=" className="button" onClick={getResult} />
      <input type="button" value="-" className="opt" onClick={changeDta} />

      <button className="clear" onClick={allClear}>
        Clear{" "}
      </button>
    </div>
  );
}
