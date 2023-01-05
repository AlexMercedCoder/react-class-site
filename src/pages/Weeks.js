import { useLoaderData, Outlet, Link } from "react-router-dom";
import {
  WeekWrapper,
  WeekContainer,
  WeekLink,
} from "../styled-components/containers";
export default function Weeks() {
  const week = useLoaderData();

  return (
    <WeekWrapper>
      <h1>{week.name}</h1>
      <p>{week.description}</p>
      <WeekContainer>
        {week.days.map((item, index) => {
          return (
            <Link
              to={`/${week.unit_index}/${week.week_index}/${index}`}
              key={item.name}
            >
              <WeekLink>{item.name}</WeekLink>
            </Link>
          );
        })}
      </WeekContainer>
      <Outlet />
    </WeekWrapper>
  );
}
