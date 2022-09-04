import React from "react";
import Auth from "./auth/index";
// import authPage from "./middleware/authorizationPage";

export async function getServerSideProps(ctx: any) {
  const token = ctx.req?.cookies?.ci_session;
  if (token) {
    return ctx.res
      .writeHead(302, {
        location: "/home",
      })
      .end();
  }
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
