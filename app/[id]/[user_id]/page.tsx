"use client";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav-Bar";
import OfferSurveyFilter from "../../components/Offer&SurveyFilter";
import SurveyPage from "../../components/SurveyPage";
import { CardsProps } from "@/types/cardsTypes";
import OfferDialog from "../../components/OfferDialog";
import LoadingP4 from "@/app/components/LoadingP4";
import HighPriceSort from "../../components/HighPriceSort";
import { highSort } from "../../(Fun)/HighSort";
import { ErrorType } from "@/types/ErrorType";
import OffersSurveysContainer from "@/app/components/OffersSurveysContainer";
import { MostPopular } from "@/app/(Fun)/MostPopular";
import newest from "@/app/(Fun)/Newest";

export default function Home({
  params,
}: {
  params: { id: string; userID: string };
}) {
  const [offerFilter, setOfferFilter] = useState("offer");
  const [points, setPoints] = useState<number | string>("0");
  const [highOrMostPopOrNewSort, setHighOrMostPopOrNewSort] =
    useState("Most Popular");
  const [sortedOffers, setSortedOffers] = useState<CardsProps[]>([]);
  const [offers, setOffers] = useState<CardsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>();

  useEffect(() => {
    axios
      .get(
        `https://afftitan.com/api/v1/offers-iframe/${params.id}/${params.userID}`,
        {
          // query URL without using browser cache
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      )
      .then((res) => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          setOffers(res.data.offers);
          setPoints(res.data.points);
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log("🚀 ~ useEffect ~ e:", e);
        if (e.response) {
          setError({
            message: e.response.data.error,
          });
        } else {
          setError({
            message: "Some thing wronge !!!",
          });
        }
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let OffersAfterSort: CardsProps[];
    if (highOrMostPopOrNewSort == "Highest Paying") {
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
  return (
    <div>
      {loading ? (
        <LoadingP4 />
      ) : (
        <>
          <Nav points={points} />
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
              />
            ) : (
              <OffersSurveysContainer
                error={error}
                filterKey="offer"
                highOrMostPopOrNewSort={highOrMostPopOrNewSort}
                setHighOrMostPopOrNewSort={setHighOrMostPopOrNewSort}
                sortedOffers={sortedOffers}
              />
            )}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
