"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav-Bar";
import OfferSurveyFilter from "../../components/Offer&SurveyFilter";
import OffersSurveysContainer from "../../components/OffersSurveysContainer";
import LoadingP4 from "@/app/components/LoadingP4";
import { CardsProps } from "@/types/cardsTypes";
import { ErrorType } from "@/types/ErrorType";
import { highSort } from "../../(Fun)/HighSort";
import { MostPopular } from "@/app/(Fun)/MostPopular";
import newest from "@/app/(Fun)/Newest";
import freeOfferSort from "../../(Fun)/FreeSort";
import mobileSort from "../../(Fun)/MobileSort";
import AllSort from "../../(Fun)/AllSort";
import { DeviceTypeSort } from "@/app/(Fun)/DeviceTypeSort";
import { data } from "@/types/data";
import { addDateAndPointsToObjects } from "@/app/(Fun)/AddTheDateProp";

export default function Home({
  params,
}: {
  params: { id: string; userID: string };
}) {
  const [offerFilter, setOfferFilter] = useState("offer");
  const [selectedDeviceSortType, setSelectedDeviceSortType] = useState("");
  const [points, setPoints] = useState<number | string>("0");
  const [highOrMostPopOrNewSort, setHighOrMostPopOrNewSort] =
    useState("Most Popular");
  const [freeOrAllOrMobileSort, setFreeOrAllOrMobileSort] =
    useState("All Offers");
  const [sortedOffers, setSortedOffers] = useState<CardsProps[]>([]);
  const [offers, setOffers] = useState<CardsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>();

  useEffect(() => {
    setOffers(addDateAndPointsToObjects(data, "2024-07-04"));
    setLoading(false);
  }, []);

  useEffect(() => {
    let OffersAfterSort: CardsProps[];
    if (highOrMostPopOrNewSort === "Highest Paying") {
      OffersAfterSort = highSort(offers);
    } else if (highOrMostPopOrNewSort.includes("Most")) {
      OffersAfterSort = MostPopular(offers);
    } else if (highOrMostPopOrNewSort.includes("Newest")) {
      OffersAfterSort = newest(offers);
    } else {
      OffersAfterSort = offers;
    }
    setSortedOffers(OffersAfterSort);
  }, [highOrMostPopOrNewSort, offers]);

  useEffect(() => {
    let OffersAfterSort: CardsProps[];
    if (freeOrAllOrMobileSort === "Free") {
      OffersAfterSort = freeOfferSort(offers);
    } else if (freeOrAllOrMobileSort === "All") {
      OffersAfterSort = AllSort(offers);
    } else if (freeOrAllOrMobileSort === "Mobile App") {
      OffersAfterSort = mobileSort(offers);
    } else {
      OffersAfterSort = offers;
    }
    setSortedOffers(OffersAfterSort);
  }, [freeOrAllOrMobileSort, offers]);
  useEffect(() => {
    let OffersAfterSort: CardsProps[];
    OffersAfterSort = DeviceTypeSort(offers, selectedDeviceSortType);
    setSortedOffers(OffersAfterSort);
  }, [selectedDeviceSortType, offers]);

  return (
    <div>
      {loading ? (
        <LoadingP4 />
      ) : (
        <>
          <Nav
            selectedDeviceSortType={selectedDeviceSortType}
            setSelectedDeviceSortType={setSelectedDeviceSortType}
            points={points}
          />
          <div className="min-h-[80dvh]">
            <div className="flex justify-center w-full">
              <OfferSurveyFilter setFilter={setOfferFilter} />
            </div>
            {offerFilter === "Survey" ? (
              <OffersSurveysContainer
                error={error}
                filterKey="Survey"
                highOrMostPopOrNewSort={highOrMostPopOrNewSort}
                setHighOrMostPopOrNewSort={setHighOrMostPopOrNewSort}
                sortedOffers={sortedOffers}
                freeOrAllOrMobileSort={freeOrAllOrMobileSort}
                setFreeOrAllOrMobileSort={setFreeOrAllOrMobileSort}
              />
            ) : (
              <OffersSurveysContainer
                error={error}
                filterKey="offer"
                highOrMostPopOrNewSort={highOrMostPopOrNewSort}
                setHighOrMostPopOrNewSort={setHighOrMostPopOrNewSort}
                sortedOffers={sortedOffers}
                freeOrAllOrMobileSort={freeOrAllOrMobileSort}
                setFreeOrAllOrMobileSort={setFreeOrAllOrMobileSort}
              />
            )}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
