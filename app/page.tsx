"use client";
import { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav-Bar";
import OfferSurveyFilter from "./components/Offer&SurveyFilter";
import SurveyPage from "./components/SurveyPage";
import OfferCard from "./components/OfferCard";

export default function Home() {
  const [offerFilter, setOfferFilter] = useState("offer");
  return (
    <div>
      <Nav />
      <div className="flex justify-center w-full">
        <OfferSurveyFilter setFilter={setOfferFilter} />
      </div>
      {offerFilter === "survey" ? (
        <SurveyPage />
      ) : (
        <div className="flex justify-center w-full">
          <div className=" px-24 py-6 lg:grid grid-cols-2 gap-x-20 gap-y-4 flex flex-col">
            <OfferCard />
            <OfferCard />
            <OfferCard />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
