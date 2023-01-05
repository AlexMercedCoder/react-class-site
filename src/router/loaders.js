import materials from "../json/materials.json";

export const appLoader = ({ params }) => {
  return materials.units.map((u) => {
    return { name: u.name };
  });
};

export const unitLoader = ({ params }) => {
  const unit = materials.units[params.unit];
  unit.unit_index = params.unit;
  return unit;
};

export const weekLoader = ({ params }) => {
  const week = materials.units[params.unit].weeks[params.week];
  week.unit_index = params.unit;
  week.week_index = params.week;
  return week;
};

export const dayLoader = ({ params }) => {
  const day = materials.units[params.unit].weeks[params.week].days[params.day];
  day.unit_index = params.unit;
  day.week_index = params.week;
  day.day_index = params.day;
  return day;
};
