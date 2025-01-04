import React from "react";
import { Layout } from "../components/Layout";
import Shop from "../components/Shop/Shop";
import { useSelector } from "react-redux"; // Importuj useSelector
import Recomendation from "../components/recomendation/Recomendation";
import Quality from "../components/Quality";
import Instagram from "../components/instagram/Instagram";
import Newsletter from "../components/Newsletter";
import Shopplace from "../components/shopplace/Shopplace";
const ShopPage = () => {
  const brushes = useSelector((state) => state.brushes);
  return (
    <div>
      <Layout>
        <Shopplace />
      </Layout>
      <Layout>
        <Shop brushes={brushes} />
        <Recomendation />
        <Quality />
        <Instagram />
        <Newsletter />
      </Layout>
    </div>
  );
};

export default ShopPage;
