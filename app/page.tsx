"use client";
import { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav-Bar";
import OfferSurveyFilter from "./components/Offer&SurveyFilter";

export default function Home() {
  const [offerFilter, setOfferFilter] = useState("offer");
  return (
    <div>
      <Nav />
      <OfferSurveyFilter setFilter={setOfferFilter} />
      <Footer />
    </div>
  );
}
