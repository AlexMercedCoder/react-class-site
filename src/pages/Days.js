import { useLoaderData } from "react-router-dom";
import { DayWrapper, DayContainer, DayLink } from "../styled-components/containers";

export default function Days() {
  const day = useLoaderData();

  return (
    <DayWrapper>
      <h1>{day.name}</h1>
      <p>{day.description}</p>
      <DayContainer>
        {day.links.map((item, index) => {
          return (
            <a href={item.url} key={item.name} target="_blank" rel="noreferrer">
              <DayLink>{item.name}</DayLink>
            </a>
          );
        })}
      </DayContainer>
    </DayWrapper>
  );
}
