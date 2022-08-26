import React from "react";
import Head from "next/head";
import { Grid } from "@chakra-ui/react";

import LayoutAuth from "../../components/auth/layout";
import ForgetPassword from "../../components/auth/ForgetPassword";
export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Lupa Password</title>
      </Head>

      <Grid bg="#F8F8FB" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        <LayoutAuth />
        <ForgetPassword />
      </Grid>
    </>
  );
}
