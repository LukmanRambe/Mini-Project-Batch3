import React from "react";
import Auth from "./auth/index";
import { authPage } from "./middleware/authorizationPage";

export async function getServerSideProps(ctx: any) {
  await authPage(ctx);
  return {
    props: {},
  };
}
export default function Home() {
  return (
    <div>
      <Auth></Auth>
    </div>
  );
}
