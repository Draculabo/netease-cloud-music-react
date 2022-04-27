import ReactDOM from "react-dom/client";
import App from "./App";
import "@/assets/css/reset.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores";

const rootEl = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootEl).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
);
