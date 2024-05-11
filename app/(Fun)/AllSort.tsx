export function sortAllData<T>(arr: T[], ascending: boolean = true): T[] {
    // Create a copy of the array to avoid mutating the original array
    const newArr = [...arr];
  
    // Sort the array based on all properties
    newArr.sort((a, b) => {
      for (const key in a) {
        if ((a as Record<string, unknown>).hasOwnProperty(key) && (b as Record<string, unknown>).hasOwnProperty(key)) {
          if (a[key] < b[key]) return ascending ? -1 : 1;
          if (a[key] > b[key]) return ascending ? 1 : -1;
        }
      }
      return 0;
    });
  
    // Return the sorted array
    return newArr;
  }
  