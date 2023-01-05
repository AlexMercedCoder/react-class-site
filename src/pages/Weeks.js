import { useLoaderData, Outlet, Link } from "react-router-dom";

export default function Weeks() {
  const week = useLoaderData();

  return (
    <div>
      <h1>{week.name}</h1>
      <p>{week.description}</p>
      <div>
        {week.days.map((item, index) => {
          return (
            <Link
              to={`/${week.unit_index}/${week.week_index}/${index}`}
              key={item.name}
            >
              <div>{item.name}</div>
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}
