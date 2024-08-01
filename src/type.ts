export type Car = {
  brand: string;
  wheels: number;
  door: number;
};

export type PeugeotCar = Car & {
  model: string;
};
