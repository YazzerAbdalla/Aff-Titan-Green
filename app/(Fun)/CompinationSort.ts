import { CardsProps } from "@/types/cardsTypes";
import { highSort } from "./HighSort";
import { lowSort } from "./LowSort";

export function compinationSort(
  selectedSortType: string,
  DataAfterSort: CardsProps[]
) {
  if (selectedSortType === "High Price") {
    DataAfterSort = highSort(DataAfterSort);
  } else if (selectedSortType === "Lower Price") {
    DataAfterSort = lowSort(DataAfterSort);
  }
  return DataAfterSort;
}
