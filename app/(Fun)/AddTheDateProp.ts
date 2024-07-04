import { CardsProps } from "../../types/cardsTypes";
import { data } from "../../types/data";

// Create a type that includes all properties of CardsProps except for date
type CardsPropsWithoutDate = Omit<CardsProps, "date">;

// Define the function that adds the date property to each object
export function addDateAndPointsToObjects(
  objects: CardsPropsWithoutDate[],
  date: string
): CardsProps[] {
  return objects.map((obj) => ({ ...obj, date }));
}
