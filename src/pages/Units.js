import { useLoaderData, Outlet, Link } from "react-router-dom";

export default function Units() {
  const unit = useLoaderData();
  console.log(unit);

  return (
    <div>
      <h1>{unit.name}</h1>
      <p>{unit.description}</p>
      <div>
        {unit.weeks.map((item, index) => {
          return (
            <Link to={`/${unit.unit_index}/${index}`} key={item.name}>
              <div>{item.name}</div>
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}
