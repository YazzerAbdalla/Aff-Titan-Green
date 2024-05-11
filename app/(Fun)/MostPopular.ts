import { CardsProps } from "@/types/cardsTypes";

export function MostPopular(arr: CardsProps[]): CardsProps[] {
  // Create a copy of the array to avoid mutating the original array
  const newArr = arr.map((item) => ({ ...item }));

  // Sort the array based on the `favorite` property
  newArr.sort((a, b) => {
    if (a.favorite === 1 && b.favorite === 0) {
      return -1; // a comes before b
    }
    if (a.favorite === 0 && b.favorite === 1) {
      return 1; // b comes before a
    }
    return 0; // no change in order
  });

  // Return the sorted array
  return newArr;
}
