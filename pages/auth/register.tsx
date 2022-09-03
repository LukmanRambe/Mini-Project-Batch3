import React from "react";
import Head from "next/head";
import { Grid } from "@chakra-ui/react";

import LayoutAuth from "../../components/auth/layout";
import FormRegister from "../../components/auth/Register";
import { authPage } from "../middleware/authorizationPage";

export async function getServerSideProps(ctx: any) {
  await authPage(ctx);
  return {
    props: {},
  };
}

const Register = () => {
  return (
    <>
      <Head>
        <title>Daftar</title>
      </Head>

      <Grid bg="#F8F8FB" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        <LayoutAuth />
        <FormRegister />
      </Grid>
    </>
  );
};

export default Register;
