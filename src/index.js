import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import MainDraggableAppTwo from "./compononets/dragable-two/MainDraggableAppTwo";
//import { PlainMainApp } from "./compononets/Plain-form-validation/plain-main-app";
//import AppToggleDemo from "./compononets/hoc-demo/AppToggleDemo";
// import DraggableApp from "./compononets/dragable";
//import ReactFormApp from "./compononets/react-form-demo-yup";
//import ReactHookFormPlain from "./compononets/react-form.tsx";
//import MainDraggableAppTwo from "./compononets/dragable2/MainDraggableAppTwo";
import App from "./App";
import { Provider } from "react-redux";
import store from "./compononets/redux-toolkit-demo/app/store";
import Counter from "./compononets/redux-toolkit-demo/app/features/counter/Counter";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ReactHookFormPlain /> */}
    {/* <DraggableApp /> */}
    {/* <MainDraggableAppTwo /> */}
    {/* <PlainMainApp /> */}
    {/* <AppToggleDemo /> */}
    <Provider store={store}>
      <App />
      <Counter />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
