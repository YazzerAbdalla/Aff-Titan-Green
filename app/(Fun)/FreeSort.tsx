  import { CardsProps } from "@/types/cardsTypes";

  export default function sortByPoints(arr: CardsProps[]) {

      const newArr = arr.map((item) => ({ ...item }));

    newArr.sort((a, b) => {
      return b.points - a.points; 
    });

    return newArr;
  }
