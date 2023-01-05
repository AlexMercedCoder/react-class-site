import { Outlet, useLoaderData, Link } from "react-router-dom";
import Navigation from "./components/header";

function App() {
  const units = useLoaderData();
  return (
    <div className="App">
      <Navigation />
      <div>
        {units.map((item, index) => {
          return (
            <Link to={`/${index}`} key={item.name}>
              <div>{item.name}</div>
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default App;
