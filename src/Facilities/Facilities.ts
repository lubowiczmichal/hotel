import pool from "../assets/facilities/pool.png";

type Facility = {
  name: string;
  image: string;
};

const facilitiesData: Facility[] = [
  {
    name: "Swimming Pool",
    image: pool,
  },
  {
    name: " Pool",
    image: pool,
  },
  {
    name: "aaa Pool",
    image: pool,
  },
];
export { facilitiesData };
export type { Facility };
