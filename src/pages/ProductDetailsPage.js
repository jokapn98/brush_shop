import React from "react";
import { Layout } from "../components/Layout";
import { useSelector } from "react-redux"; // Importuj useSelector
import ProductDetails from "../components/productDetails/ProductDetails";
import Recomendation from "../components/recomendation/Recomendation";
import Newsletter from "../components/Newsletter";
import Quality from "../components/Quality";
const ProductDetailsPage = () => {
  const brushes = useSelector((state) => state.brushes);
  return (
    <Layout>
      <ProductDetails brushes={brushes} />
      <Recomendation />
      <Quality />
      <Newsletter />
    </Layout>
  );
};

export default ProductDetailsPage;
