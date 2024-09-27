import React from "react";
import { Layout } from "../components/Layout";
import Home from "../components/Home";
import Logos from "../components/Logos";
import Deals from "../components/Deals";

export const HomePage = () => {
  return (
    <div className="">
      <Layout>
        <div>
          <Home />
          <Logos />
          <Deals />
        </div>
      </Layout>
    </div>
  );
};
