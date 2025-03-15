type SizeType = {
  width: number;
  height: number;
};
export type mockDatamockDataToysType = {
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
  configuration: number;
  reviews: string[];
  availability: boolean;
  piecesLeft: number;
};

export const mockDataToys = [
  {
    id: String(Math.random() + Date.now() + Math.random()),
    presentImage: "/categories/stuffed.png",
    images: [],
    title: "Toys stuffed 2",
    description: "Some Data",
    category: "wooden",
    price: 2600,
    type: "Игрушки",
    material: "",
    color: "",
    sizeElem: { width: 27, height: 27 },
    weight: "2kg",
    manufacturer: "Ortek",
    configuration: 12,
    reviews: [],
    availability: true,
    piecesLeft: 5,
  },
  {
    id: String(Math.random() + Date.now() + Math.random()),
    presentImage: "/categories/stuffed2.png",
    images: [],
    title: "Toys stuffed 2",
    description: "Some Data",
    category: "wooden",
    price: 2600,
    type: "Игрушки",
    material: "",
    color: "",
    sizeElem: { width: 27, height: 27 },
    weight: "2kg",
    manufacturer: "Ortek",
    configuration: 12,
    reviews: [],
    availability: true,
    piecesLeft: 5,
  },
  {
    id: String(Math.random() + Date.now() + Math.random()),
    presentImage: "/categories/stuffed.png",
    images: [],
    title: "Toys stuffed 2",
    description: "Some Data",
    category: "wooden",
    price: 2600,
    type: "Игрушки",
    material: "",
    color: "",
    sizeElem: { width: 27, height: 27 },
    weight: "2kg",
    manufacturer: "Ortek",
    configuration: 12,
    reviews: [],
    availability: true,
    piecesLeft: 5,
  },
  {
    id: String(Math.random() + Date.now() + Math.random()),
    presentImage: "/categories/stuffed2.png",
    images: [],
    title: "Toys stuffed 2",
    description: "Some Data",
    category: "wooden",
    price: 2600,
    type: "Игрушки",
    material: "",
    color: "",
    sizeElem: { width: 27, height: 27 },
    weight: "2kg",
    manufacturer: "Ortek",
    configuration: 12,
    reviews: [],
    availability: true,
    piecesLeft: 5,
  },
];
