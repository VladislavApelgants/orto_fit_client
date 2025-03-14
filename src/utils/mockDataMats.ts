type SizeType = {
  width: number;
  height: number;
};
export type mockDataMatsType = {
  id: string;
  presentImage: string;
  images: string[];
  title: string;
  description: string;
  category: string;
  price: number;
  type: string;
  material: string;
  color: string;
  sizeElem: SizeType;
  weight: string;
  manufacturer: string;
  configuration: string;
  reviews: string[];
  availability: boolean;
  piecesLeft: number;
};

export const mockDataMats = [
  {
    id: String(Math.random() + Date.now()),
    presentImage: "/categories/wooden2.png",
    images: [],
    title: "Wooden Toy 2",
    description: "Some Data",
    category: "wooden",
    price: 2600,
    type: "Игрушки",
    material: "",
    color: "",
    sizeElem: { width: 27, height: 27 },
    weight: "2kg",
    manufacturer: "Ortek",
    configuration: "12",
    reviews: [],
    availability: true,
    piecesLeft: 5,
  },
  {
    id: String(Math.random() + Date.now()),
    presentImage: "/categories/wooden.png",
    images: [],
    title: "Wooden Toy 2",
    description: "Some Data",
    category: "wooden",
    price: 2600,
    type: "Игрушки",
    material: "",
    color: "",
    sizeElem: { width: 27, height: 27 },
    weight: "2kg",
    manufacturer: "Ortek",
    configuration: "12",
    reviews: [],
    availability: true,
    piecesLeft: 5,
  },
  {
    id: String(Math.random() + Date.now()),
    presentImage: "/categories/wooden2.png",
    images: [],
    title: "Wooden Toy 2",
    description: "Some Data",
    category: "wooden",
    price: 2600,
    type: "Игрушки",
    material: "",
    color: "",
    sizeElem: { width: 27, height: 27 },
    weight: "2kg",
    manufacturer: "Ortek",
    configuration: "12",
    reviews: [],
    availability: true,
    piecesLeft: 5,
  },
  {
    id: String(Math.random() + Date.now()),
    presentImage: "/categories/wooden.png",
    images: [],
    title: "Wooden Toy 2",
    description: "Some Data",
    category: "wooden",
    price: 2600,
    type: "Игрушки",
    material: "",
    color: "",
    sizeElem: { width: 27, height: 27 },
    weight: "2kg",
    manufacturer: "Ortek",
    configuration: "12",
    reviews: [],
    availability: true,
    piecesLeft: 5,
  },
];
