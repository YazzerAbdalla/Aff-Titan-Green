// sortOffersByModel.ts
import { CardsProps } from "@/types/cardsTypes";

export default function sortOffersByModel(arr: CardsProps[]): CardsProps[] {
  const newArr = arr.slice(); 

  newArr.sort((a, b) => {
    if (a.model === "offer" && b.model === "Survey") {
      return -1; 
    } else if (a.model === "Survey" && b.model === "offer") {
      return 1; 
    } else {
      return 0; 
    }
  });

  return newArr;
}
