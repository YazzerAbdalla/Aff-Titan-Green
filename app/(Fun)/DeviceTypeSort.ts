import { CardsProps } from "@/types/cardsTypes";

export function DeviceTypeSort(
  arr: CardsProps[],
  filterKind: string
): CardsProps[]{
  const newArr = arr.map((item) => ({ ...item }));

  // Sort the array
  if (
    filterKind === "Android" ||
    filterKind === "iOS" ||
    filterKind === "Web"
  ) {
    newArr.sort((a, b) => {
      // If the os of a contains the filterKind but not b, place a before b
      if (a.os && b.os) {
        if (
          a.os.includes(filterKind.toLowerCase()) &&
          !b.os.includes(filterKind.toLowerCase())
        ) {
          return -1;
        }
        // If the os of b contains the filterKind but not a, place b before a
        else if (
          !a.os.includes(filterKind.toLowerCase()) &&
          b.os.includes(filterKind.toLowerCase())
        ) {
          return 1;
        }
        // Otherwise, keep the order unchanged
        else {
          return 0;
        }
      }
      // Return 0 if a.os or b.os is undefined
      return 0;
    });
  }

  // Return the sorted array
  return newArr;
}
