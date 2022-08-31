import React, { useState, useEffect } from "react";
import Router from "next/router";
import Auth from "./auth/index";

export default function Home() {
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
      <div>
        <Auth></Auth>
      </div>
    )
  );
}
