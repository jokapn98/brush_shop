import React from "react";
import { Layout } from "../components/Layout";
import ProductDetails from "../components/productDetails/ProductDetails";
import Recomendation from "../components/recomendation/Recomendation";
import Newsletter from "../components/Newsletter";
import Quality from "../components/Quality";
const ProductDetailsPage = () => {
  return (
    <Layout>
      <ProductDetails />
      <Recomendation />
      <Quality />
      <Newsletter />
    </Layout>
  );
};

export default ProductDetailsPage;
