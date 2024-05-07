import { CardsProps } from "@/types/cardsTypes";

export function lowSort(arr: CardsProps[]) {
  // Clone the original array and Make the amount number type
  let newArr = arr.map((item) => ({ ...item }));

  // Sort the cloned array
  newArr.sort((a, b) => a.reward - b.reward);

  // Return the sorted array
  return newArr;
}
