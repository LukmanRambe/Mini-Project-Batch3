import Head from "next/head";
import { Grid } from "@chakra-ui/react";

import LayoutAuth from "../../components/auth/layout";
import ForgetFrom from "../../components/auth/Forget";
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
