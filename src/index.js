import React from "react";
import  {createRoot}  from "react-dom/client";
import  Counter,{getNumb} from "./utils/function.js"
import  "./index.css"
import "font-awesome/css/font-awesome.min.css"
import App from "./App"

const b = new Counter();
b.chang(getNumb);
const tag = createRoot(document.getElementById("root"));
tag.render(<App/>)
