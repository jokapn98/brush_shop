import React from "react";
import { Layout } from "../components/Layout";
import Contact from "../components/contact/Contact";
import Newsletter from "../components/Newsletter";

const ContactPage = () => {
  return (
    <Layout>
      <Contact />
      <Newsletter />
    </Layout>
  );
};

export default ContactPage;
