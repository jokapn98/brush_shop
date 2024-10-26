import React from "react";
import { Layout } from "../components/Layout";
import Home from "../components/Home";
import Logos from "../components/Logos";

import Bestsellers from "../components/bestsellers/Bestsellers";
import Recomendation from "../components/recomendation/Recomendation";
import Instagram from "../components/instagram/Instagram";
import Quality from "../components/Quality";
import Newsletter from "../components/Newsletter";

export const HomePage = () => {
  return (
    <div>
      <Layout className="container bred">
        <Home />
        <Logos />
        <Bestsellers />
        <Recomendation />
        <Quality />
        <Instagram />

        <Newsletter />
      </Layout>
    </div>
  );
};
