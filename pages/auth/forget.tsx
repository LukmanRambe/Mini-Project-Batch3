import React, { useState, useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import { Grid } from "@chakra-ui/react";

import LayoutAuth from "../../components/auth/layout";
import ForgetFrom from "../../components/auth/Forget";
const Forgot = () => {
  // have token
  const [isHaveToken, setIsHaveToken] = useState<boolean>(false);

  useEffect(() => {
    setIsHaveToken(localStorage.getItem("xtoken") !== null);
    if (isHaveToken) {
      Router.push("/home");
    }
  });
  return (
    isHaveToken === false && (
      <>
        <Head>
          <title>Lupa Password</title>
        </Head>

        <Grid bg="#F8F8FB" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
          <LayoutAuth />
          <ForgetFrom />
        </Grid>
      </>
    )
  );
};

export default Forgot;
