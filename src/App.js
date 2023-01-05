import { Outlet, useLoaderData, Link } from "react-router-dom";
import Navigation from "./components/header";
import { AppContainer, AppLink } from "./styled-components/containers";

function App() {
  const units = useLoaderData();
  return (
    <div className="App">
      <Navigation />
      <AppContainer>
        {units.map((item, index) => {
          return (
            <Link to={`/${index}`} key={item.name}>
              <div>{item.name}</div>
            </Link>
          );
        })}
      </AppContainer>
      <Outlet />
    </div>
  );
}

export default App;
