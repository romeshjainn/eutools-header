import { createRoot } from "react-dom/client";
import HeaderTools from "./header";
import "@/css/index.css";
// import { Provider } from "react-redux";
// import store from "./redux/store";

createRoot(document.getElementById("root")!).render(
  // <Provider store={store}>
    <HeaderTools />
  // </Provider>
);
