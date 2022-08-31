import React, { useState, useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import { Grid } from "@chakra-ui/react";

import LayoutAuth from "../../components/auth/layout";
import FormRegister from "../../components/auth/Register";
const Register = () => {
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
          <title>Daftar</title>
        </Head>

        <Grid bg="#F8F8FB" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
          <LayoutAuth />
          <FormRegister />
        </Grid>
      </>
    )
  );
};

export default Register;
