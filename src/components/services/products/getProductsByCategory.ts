import { mockDataMats } from "@/utils/mockDataMats";
import { mockDataToys } from "@/utils/mockDataToys";

export const getProductsByCategory = async (category?: string) => {
  switch (category) {
    case "toys":
      return mockDataToys;
    case "massage":
      return mockDataMats;

    default:
      return [];
  }
};
