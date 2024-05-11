import React from "react";
import HighPriceSort from "./HighPriceSort";
import FreeAllSort from "./free&AllSort"; // Update the import statement

import OfferDialog from "./OfferDialog";
import { ErrorType } from "@/types/ErrorType";
import { CardsProps } from "@/types/cardsTypes";
interface offersSurveysContainerProps {
  error: ErrorType | undefined;
  filterKey: string;
  highOrMostPopOrNewSort: string;
  setHighOrMostPopOrNewSort: React.Dispatch<React.SetStateAction<string>>;
  sortedOffers: CardsProps[];
  freeOrAllOrMobileSort: string;
  setFreeOrAllOrMobileSort: React.Dispatch<React.SetStateAction<string>>; // Update the prop name
}
const OffersSurveysContainer = ({
  error,
  filterKey,
  highOrMostPopOrNewSort,
  setHighOrMostPopOrNewSort,
  sortedOffers,
  freeOrAllOrMobileSort,
  setFreeOrAllOrMobileSort,
}: offersSurveysContainerProps) => {
  return (
    <div className="flex justify-center items-center  flex-col">
      <div className="w-fit  flex flex-row gap-4">
        <HighPriceSort
          selectedSortType={highOrMostPopOrNewSort}
          setSelectedSortType={setHighOrMostPopOrNewSort}
        />
        <FreeAllSort
          selectedSortType={freeOrAllOrMobileSort}
          setSelectedSortType={setFreeOrAllOrMobileSort}
        />
      </div>

      <div className="flex justify-center mt-6 w-full">
        {sortedOffers.length > 0 ? (
          <div className="lg:grid grid-cols-2 lg:gap-y-2  lg:gap-x-16 flex flex-col  justify-center">
            {sortedOffers
              .filter(({ model }) => model === filterKey)
              .map((offer) => (
                <OfferDialog key={offer.id} {...offer} />
              ))}
          </div>
        ) : (
          <p>{error ? error.message : "No offers available"}</p>
        )}
      </div>
    </div>
  );
};

export default OffersSurveysContainer;
