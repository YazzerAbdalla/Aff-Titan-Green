"use client";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav-Bar";
import OfferSurveyFilter from "./components/Offer&SurveyFilter";
import SurveyPage from "./components/SurveyPage";
import axios, { AxiosResponse } from "axios";
import { CardsProps } from "@/types/cardsTypes";
import OfferDialog from "./components/OfferDialog";
import LoadingP4 from "@/app/components/LoadingP4";
import HighPriceSort from "./components/HighPriceSort";
import { highSort } from "./(Fun)/HighSort";

export default function Home() {
  const [offerFilter, setOfferFilter] = useState("offer");
  const [highOrMostPopOrNewSort, setHighOrMostPopOrNewSort] = useState("Most Popular");
  const [sortedOffers, setSortedOffers] = useState<CardsProps[]>([]);
  const [offers, setOffers] = useState<CardsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/offer`)
      .then((response: AxiosResponse<{ offers: CardsProps[] }>) => {
        setOffers(response.data.offers);
        setTimeout(() => setLoading(false), 3200); // Set loading to false after 3 seconds
      })
      .catch((error) => {
        console.error("Error fetching offers:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let OffersAfterSort;
    if (highOrMostPopOrNewSort == "Highest Paying") {
      OffersAfterSort = highSort(offers);
    } else {
      OffersAfterSort = offers;
    }
    setSortedOffers(OffersAfterSort);
  }, [highOrMostPopOrNewSort, offers]);
  return (
    <div>
      {loading ? (
        <LoadingP4 />
      ) : (
        <>
          <Nav />
          <div className="min-h-[80dvh]">
            <div className="flex justify-center w-full">
              <OfferSurveyFilter setFilter={setOfferFilter} />
            </div>
            {offerFilter === "survey" ? (
              <SurveyPage />
            ) : (
              <div className="flex flex-col">
                <div className="w-fit lg:px-48 flex flex-row gap-4">
                  <HighPriceSort
                    selectedSortType={highOrMostPopOrNewSort}
                    setSelectedSortType={setHighOrMostPopOrNewSort}
                  />
                </div>
                <div className="flex justify-center mt-6 w-full">
                  {sortedOffers.length > 0 ? (
                    <div className="lg:grid grid-cols-2 gap-y-2  gap-x-16 flex flex-col  justify-center">
                      {sortedOffers.map((offer) => (
                        <OfferDialog key={offer.id} {...offer} />
                      ))}
                    </div>
                  ) : (
                    <p>No offers available</p>
                  )}
                </div>
              </div>
            )}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
