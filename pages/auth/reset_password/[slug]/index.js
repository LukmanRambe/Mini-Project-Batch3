import React from "react";
import Head from "next/head";
import { Grid } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import LayoutAuth from "../../../../components/auth/layout";
import ResetPassword from "../../../../components/auth/reset_password/index";
import { authPage } from "../../../middleware/authorizationPage";

export async function getServerSideProps(ctx) {
  await authPage(ctx);
  return {
    props: {},
  };
}

const index = () => {
  const router = useRouter();
  const tokenSlug = router.query.slug;
  return (
    <>
      <Head>
        <title>Reset Password</title>
      </Head>

      <Grid bg="#F8F8FB" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        <LayoutAuth />
        <ResetPassword slug={tokenSlug} />
      </Grid>
    </>
  );
};

export default index;
