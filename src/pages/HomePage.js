import React from "react";
import { Layout } from "../components/Layout";
import Home from "../components/Home";
import Logos from "../components/Logos";
import Deals from "../components/deals/Deals";
import Bestsellers from "../components/bestsellers/Bestsellers";
import Recomendation from "../components/recomendation/Recomendation";

export const HomePage = () => {
  return (
    <div>
      <Layout className="container bred">
        <Home />
        <Logos />
        <Bestsellers />
        <Recomendation />
      </Layout>
    </div>
  );
};
