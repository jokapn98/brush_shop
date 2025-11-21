import React from "react";
import { Layout } from "../components/Layout";

import Recomendation from "../components/recomendation/Recomendation";
import Quality from "../components/Quality";
import Instagram from "../components/instagram/Instagram";
import Newsletter from "../components/Newsletter";
import Shopplace from "../components/shopplace/Shopplace";
const ShopPage = () => {
  return (
    <div>
      <Layout>
        <Shopplace />
        {/* Ovo je shop gde ne izgledda sve ok, ali se trudim da sve radi. ovo mora da se sredi  */}

        {/* <Shop brushes={brushes} />{" "}
       Ovo je shop gde izgledda sve ok, ovo mora da se sredi  */}
        <Recomendation />
        <Quality />
        <Instagram />
        <Newsletter />
      </Layout>
    </div>
  );
};

export default ShopPage;
