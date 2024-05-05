"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav-Bar";
import OfferSurveyFilter from "./components/Offer&SurveyFilter";
import SurveyPage from "./components/SurveyPage";
import axios, { AxiosResponse } from "axios";
import { CardsProps } from "@/types/cardsTypes";
import OfferDialog from "./components/OfferDialog";

export default function Home() {
  const [offerFilter, setOfferFilter] = useState("offer");
  const [offers, setOffers] = useState<CardsProps[]>([]);

  useEffect(() => {
    axios
      .get(`/api/offer`)
      .then((response: AxiosResponse<{ offers: CardsProps[] }>) =>
        setOffers(response.data.offers)
      )

      .catch((error) => console.error("Error fetching offers:", error));
  }, []);

  return (
    <div>
      <Nav />
      <div className="flex justify-center w-full">
        <OfferSurveyFilter setFilter={setOfferFilter} />
      </div>
      {offerFilter === "survey" ? (
        <SurveyPage />
      ) : (
        <div className="flex justify-center mt-6 w-full">
          {offers.length > 0 ? (
            <div className="lg:grid grid-cols-2 gap-y-2  gap-x-16 flex flex-col  justify-center">
              {offers.map((offer) => (
                <OfferDialog key={offer.campaign_id} {...offer} />
              ))}
            </div>
          ) : (
            <p>No offers available</p>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}
