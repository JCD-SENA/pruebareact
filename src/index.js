import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import reportWebVitals from "./reportWebVitals";

import Ejemplo from "./Components/ejemplo.js"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Ejemplo cantidad="2">A</Ejemplo>
		<Ejemplo cantidad="4">B</Ejemplo>
		<Ejemplo cantidad="6">C</Ejemplo>
	</React.StrictMode>
);

reportWebVitals(console.log);