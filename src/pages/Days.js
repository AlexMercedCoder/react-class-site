import { useLoaderData } from "react-router-dom";

export default function Days() {
  const day = useLoaderData();

  return (
    <div>
      <h1>{day.name}</h1>
      <p>{day.description}</p>
      <div>
        {day.links.map((item, index) => {
          return (
            <a href={item.url}>
              <div>{item.name}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
