// sortOffersByCPi.ts
import { CardsProps } from "@/types/cardsTypes";

export default function sortOffersByCPi(arr: CardsProps[]): CardsProps[] {
  const newArr = arr.filter((card) => card.offer_type === "CPi");

  newArr.sort((a, b) => {

    return 0;
  });

  return newArr;
}
