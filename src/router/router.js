import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Units from "../pages/Units";
import Weeks from "../pages/Weeks";
import Days from "../pages/Days";
import { appLoader, unitLoader, weekLoader, dayLoader } from "./loaders";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} loader={appLoader}>
        <Route path=":unit" element={<Units />} loader={unitLoader}>
          <Route path=":week" element={<Weeks />} loader={weekLoader}>
            <Route path=":day" element={<Days />} loader={dayLoader}></Route>
          </Route>
        </Route>
      </Route>
    </>
  )
);

export default router;
