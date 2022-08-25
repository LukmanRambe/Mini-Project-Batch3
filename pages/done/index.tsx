import React from "react";
import Layout from "../../components/home/Layout";

import Todos from "../../components/home/Todos";

const Done = () => {
  return (
    <Layout title="Mini Project Vocasia - Done">
      <Todos Header="Done" />
    </Layout>
  );
};

export default Done;
