import { CardsProps } from "@/types/cardsTypes";

export function DeviceTypeSort(arr: CardsProps[], filterKind: string) {
  const newArr = arr.map((item) => ({ ...item }));

  // Sort the array
  newArr.sort((a, b) => {
    // If the os of a contains the filterKind but not b, place a before b
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
  });

  // Return the sorted array
  return newArr;
}
