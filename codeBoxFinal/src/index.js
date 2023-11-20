import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CodeBox from "../public/codebox.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <App />
        <CodeBox />
    </StrictMode>,
    rootElement
);
