import { CardsProps } from "@/types/cardsTypes";

export function highSort(arr: CardsProps[]) {
  // Clone the original array and Make the amount number type
  let newArr = arr.map((item) => ({ ...item }));

  // Sort the cloned array
  if (newArr[0].reward) {
    newArr.sort((a, b) => b.reward - a.reward);
  }

  // Return the sorted array
  return newArr;
}
