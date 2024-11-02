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

export const HomePage = () => {
  const brushes = useSelector((state) => state.brushes); // Preuzmi brushes iz stanja

  return (
    <div>
      <Layout className="container bred">
        <div className="bb">
          {brushes.map((brush) => (
            <p key={brush.id}>{brush.naziv}</p>
          ))}
        </div>
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
