import React from "react";
import { useSelector } from "react-redux"; // Importuj useSelector
import { Layout } from "../components/Layout";
import Home from "../components/Home";
import Logos from "../components/Logos";
import Bestsellers from "../components/bestsellers/Bestsellers";
import Recomendation from "../components/recomendation/Recomendation";
import Instagram from "../components/instagram/Instagram";
import Quality from "../components/Quality";
import Newsletter from "../components/Newsletter";
import Test from "../components/Test";
export const HomePage = () => {
  const brushes = useSelector((state) => state.brushes);

  return (
    <div>
      <Layout className="container bred">
        <Test />
        <Home />
        <Logos />
        <Bestsellers brushes={brushes} />
        <Recomendation />
        <Quality />
        <Instagram />
        <Newsletter />
      </Layout>
    </div>
  );
};
