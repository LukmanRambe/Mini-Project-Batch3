import React, { useState } from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Link,
  Show,
} from "@chakra-ui/react";
import Login from "../../components/auth/Login";

const index = () => {
  return (
    <Box w="100%" h="100vh" bg="gray.50">
      <Flex>
        <Show breakpoint="(min-width: 62em)">
          <Flex
            direction="column"
            justify="center"
            borderRightRadius="90px"
            align="center"
            h="100vh"
            bg="white"
            flex="1.5"
            px="114px">
            <Box>
              <Image
                mb="20px"
                w="full"
                maxW="590px"
                objectFit="contain"
                src="https://mini-project-vocasia.vercel.app/image/logo.svg"
                alt="Logo"
              />
            </Box>
            <Box>
              <Image
                src="https://mini-project-vocasia.vercel.app/image/loginregister-page/image-1.png"
                alt="Banner Logo"
                mb="40px"
              />
            </Box>
            <Box>
              <Heading as="h2" size={{ base: "sm", lg: "lg", xl: "xl" }}>
                Atur Jadwalmu Jadi Produktif 👋
              </Heading>
              <Text
                fontSize={{ base: "sm", lg: "lg", xl: "xl" }}
                mt={2}
                maxW="600px"
                color="#737373">
                Bantu kamu mengatur jadwal kegiatanmu sehari-hari dengan mudah.
                Jadikah harimu lebih produktif dengan menulis setiap kegiatanmu
                yang perlu diselesaikan
              </Text>
            </Box>
          </Flex>
        </Show>
        {/* components Login Form*/}
        <Login />
      </Flex>
    </Box>
  );
};

export default index;
