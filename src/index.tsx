import ReactDOM from "react-dom/client";
import App from "./App";
import "@/assets/css/reset.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
const rootEl = document.getElementById("root") as HTMLElement;
Sentry.init({
    dsn: "https://e9b439eb93154dca8d59f7c29568252d@o1309979.ingest.sentry.io/6556744",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
});
ReactDOM.createRoot(rootEl).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
);
