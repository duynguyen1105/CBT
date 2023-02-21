import { createRoot } from "react-dom/client";
import "react-hot-loader";
import { Provider } from "react-redux";

import App from "App";
import "index.css";
import { configureStore, history } from "store/configureStore";
import sagaMiddleware from "store/middlewares/saga";
import { rootSaga } from "store/sagas";
import * as serviceWorker from "./serviceWorker";

const initialState = {};
const store = configureStore(initialState);

sagaMiddleware.run(rootSaga);

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>
);

serviceWorker.unregister();
