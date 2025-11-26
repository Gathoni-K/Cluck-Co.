// products.ts
export interface ProductType {
  id: number;
  price: number | string;
  image: string;
  description: string;
  quantity?: number;
}

export const products: ProductType[] = [
  {
    id: 1,
    description: "Point of Lay chicks",
    image: "/pointOfLayChicks.png",
    price: 850,
  },
  {
    id: 2,
    description: "Day Old chicks",
    image: "/dayOldChicks.png",
    price: 110,
  },
  {
    id: 3,
    description: "Week Old chicks",
    image: "/weekOldChicks.png",
    price: 150,
  },
  {
    id: 4,
    description: "2 Weeks Old chicks",
    image: "/twoWeeksOldChicks.png",
    price: 180,
  },
  {
    id: 5,
    description: "3 Weeks Old chicks",
    image: "/threeWeeksOldChicks.png",
    price: 240,
  },
  {
    id: 6,
    description: "4 Weeks Old chicks",
    image: "/fourWeeksOldChicks.png",
    price: 280,
  },
  {
    id: 7,
    description: "6 Weeks Old chicks",
    image: "/sixWeeksOldChicks.png",
    price: 350,
  },
  {
    id: 8,
    description: "8 Weeks Old chicks",
    image: "/eightWeeksOldChicks.png",
    price: 450,
  },
  {
    id: 9,
    description: "Meat",
    image: "/meat.png",
    price: "750 per kg",
  },
];