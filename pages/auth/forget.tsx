import React from "react";
import Head from "next/head";
import { Grid } from "@chakra-ui/react";

import LayoutAuth from "../../components/auth/layout";
import ForgetFrom from "../../components/auth/Forget";
import { authPage } from "../middleware/authorizationPage";

export async function getServerSideProps(ctx: any) {
  authPage(ctx);
  return {
    props: {},
  };
}

const Forgot = () => {
  return (
    <>
      <Head>
        <title>Lupa Password</title>
      </Head>

      <Grid bg="#F8F8FB" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        <LayoutAuth />
        <ForgetFrom />
      </Grid>
    </>
  );
};

export default Forgot;
