import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import data from "./data";

// console.log(data);

ReactDOM.render(<App currentData={data} />, document.getElementById("root"));

// const ugyReactJSX = React.createElement("div", {}, [
//   React.createElement("h1", {}, "🦀"),
//   React.createElement("p", {}, "no thx.")
// ]);
// const prettierJSX = (
//   <div>
//     <h1>🥜</h1>
//     <p>helloooo!!</p>
//   </div>
// );
