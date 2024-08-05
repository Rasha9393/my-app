import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
//import App from "./ex1-class-component/App";
import App from "./ex-function-component/App";

const root =ReactDom.createRoot(document.getElementById("root"));
root.render (<App/>);