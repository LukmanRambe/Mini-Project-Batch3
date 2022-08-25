import Head from "next/head";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Calendar from "./Calendar";

// Styles
import { Box, Flex } from "@chakra-ui/react";

const Layout = ({ children, title }) => {
  return (
    <Box display="flex" maxW="100%" minH="1024px">
      <Head>
        <title>{title}</title>
      </Head>
      <Sidebar />
      <Box w="100%">
        <Header />
        <Flex>
          {children}
          <Calendar />
        </Flex>
      </Box>
    </Box>
  );
};

export default Layout;
