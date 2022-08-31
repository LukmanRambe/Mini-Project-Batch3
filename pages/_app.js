import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import myNewTheme from "../styles/theme.ts";
import { extendTheme } from "@chakra-ui/react";
import Router from "next/router";
import NProgress from "nprogress";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  });

  return (
    <ChakraProvider resetCSS theme={myNewTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
