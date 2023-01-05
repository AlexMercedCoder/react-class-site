import { useLoaderData, Outlet, Link } from "react-router-dom";
import { UnitContainer, UnitLink, UnitWrapper } from "../styled-components/containers";

export default function Units() {
  const unit = useLoaderData();
  console.log(unit);

  return (
    <UnitWrapper>
      <h1>{unit.name}</h1>
      <p>{unit.description}</p>
      <UnitContainer>
        {unit.weeks.map((item, index) => {
          return (
            <Link to={`/${unit.unit_index}/${index}`} key={item.name}>
              <UnitLink>{item.name}</UnitLink>
            </Link>
          );
        })}
      </UnitContainer>
      <Outlet />
    </UnitWrapper>
  );
}
