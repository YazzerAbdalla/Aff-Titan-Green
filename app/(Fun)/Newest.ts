import { CardsProps } from "@/types/cardsTypes";

export default function newest(arr: CardsProps[]) {
  // Create a copy of the array to avoid mutating the original array
  const newArr = arr.map((item) => ({ ...item }));

  // Sort the array by the newest date
  newArr.sort((a, b) => {
    const dateA = new Date(a.date); // Convert string to Date object
    const dateB = new Date(b.date); // Convert string to Date object
    return dateB.getTime() - dateA.getTime(); // Sort in descending order (newest first)
  });

  // Return the sorted array
  return newArr;
}
