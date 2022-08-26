import React, { useState } from "react";
import {
  Button,
  GridItem,
  VStack,
  Box,
  Heading,
  Text,
  Input,
  Flex,
  Link,
  Container,
  Center,
  FormControl,
} from "@chakra-ui/react";
import NextLink from "next/link";

const ForgetFrom = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <GridItem>
      <VStack
        w="full"
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Container>
          <Box textAlign="center" mb={7}>
            <Heading as="h1" size="md" mt={2}>
              Lupa Password
            </Heading>
          </Box>
          <form action="submit">
            <FormControl isRequired>
              <Box textAlign="center" mb={7}>
                <Text fontSize="sm" color="#737373" mt={3}>
                  Masukan email yang telah terdaftar,
                </Text>
                <Text fontSize="sm" color="#737373">
                  kami akan mengirim link untuk mengembalikan akunmu
                </Text>
              </Box>
              <Flex gap={1} marginTop={4} marginBottom={2}>
                <Text fontSize="md">Email </Text>
                <Text fontSize="md" color="red">
                  {" "}
                  *
                </Text>
              </Flex>
              <Input
                type="text"
                py="13px"
                px="20px"
                borderRadius="12px"
                bg="white"
                placeholder="Masukkan Email"
                value={email}
                onChange={(e) => handleEmailChange(e)}
                required
              />

              <Button
                size="md"
                bg="#BA181B"
                _hover={{ bg: "#9e2427" }}
                color="#fff"
                mt={7}
                w="full"
                _active={{
                  bg: "#9e2427",
                  transform: "scale(0.98)",
                }}>
                Daftar
              </Button>
            </FormControl>
          </form>
          <Center>
            <Flex mt="20px">
              <NextLink href="/" passHref>
                <Link color="primary" fontWeight="bold" ml="1">
                  Kembali
                </Link>
              </NextLink>
            </Flex>
          </Center>
        </Container>
      </VStack>
    </GridItem>
  );
};

export default ForgetFrom;
