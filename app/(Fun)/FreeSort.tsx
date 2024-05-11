import { CardsProps } from "@/types/cardsTypes";

export default function sortByPoints(arr: CardsProps[]) {
  const newArr = arr.map((item) => ({ ...item }));

  newArr.sort((a, b) => {
    if (a.reward === 0 && b.reward === 0) {
      // If both rewards are 0, maintain their original order
      return 0;
    } else if (a.reward === 0) {
      // If only 'a' has 0 reward, place it at the top
      return -1;
    } else if (b.reward === 0) {
      // If only 'b' has 0 reward, place it at the top
      return 1;
    } else {
      // For non-zero rewards, sort in descending order
      return b.reward - a.reward;
    }
  });

  return newArr;
}
