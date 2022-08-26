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
  InputRightElement,
  InputGroup,
  Link,
  Container,
  Center,
  FormControl,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
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
              Masuk
            </Heading>
          </Box>
          <form action="submit">
            <FormControl isRequired>
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
                required
              />
              <Flex gap={1} marginTop={4} marginBottom={2}>
                <Text fontSize="md">Password </Text>
                <Text fontSize="md" color="red">
                  {" "}
                  *
                </Text>
              </Flex>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  py="13px"
                  px="20px"
                  borderRadius="12px"
                  bg="white"
                  placeholder="Password"
                  required
                />
                <InputRightElement>
                  <Button
                    h="full"
                    bg="transparent"
                    size="md"
                    borderRightRadius="12px"
                    borderLeftRadius="0"
                    onClick={handleShow}>
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Flex justify="flex-end" mt="15px">
                <NextLink href="/auth/forget" passHref>
                  <Link color="primary">Lupa Password?</Link>
                </NextLink>
              </Flex>
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
                Masuk
              </Button>
            </FormControl>
          </form>
          <Center>
            <Flex mt="20px">
              <Text color="#737373" fontSize="sm">
                Belum Punya Akun?
                <NextLink href="/auth/register" passHref>
                  <Link color="primary" fontWeight="bold" ml="1">
                    Daftar
                  </Link>
                </NextLink>
              </Text>
            </Flex>
          </Center>
        </Container>
      </VStack>
    </GridItem>
  );
};

export default Login;
