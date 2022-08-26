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

const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ulangiPassword, setUlangiPassword] = useState("");

  const [show, setShow] = useState<boolean>(false);
  const [showUlangi, setShowUlangi] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };
  const handleShowUlangi = () => {
    setShowUlangi(!showUlangi);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleUlangiPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUlangiPassword(event.target.value);
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
              Daftar
            </Heading>
          </Box>
          <form action="submit">
            <FormControl isRequired>
              <Flex marginTop={4} marginBottom={2}>
                <Text fontSize="md">Nama </Text>
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
                value={name}
                onChange={(e) => handleNameChange(e)}
                placeholder="Masukkan Nama"
                required
              />
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
                  value={password}
                  onChange={(e) => handlePasswordChange(e)}
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
              <Flex gap={1} marginTop={4} marginBottom={2}>
                <Text fontSize="md">Ulangi Password</Text>
                <Text fontSize="md" color="red">
                  {" "}
                  *
                </Text>
              </Flex>
              <InputGroup size="md">
                <Input
                  type={showUlangi ? "text" : "password"}
                  name="ulangiPassword"
                  py="13px"
                  px="20px"
                  borderRadius="12px"
                  bg="white"
                  value={ulangiPassword}
                  onChange={(e) => handleUlangiPasswordChange(e)}
                  placeholder="Ulangi Password"
                  required
                />
                <InputRightElement>
                  <Button
                    h="full"
                    bg="transparent"
                    size="md"
                    borderRightRadius="12px"
                    borderLeftRadius="0"
                    onClick={handleShowUlangi}>
                    {showUlangi ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
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
              <Text color="#737373" fontSize="sm">
                Sudah Punya Akun?
                <NextLink href="/" passHref>
                  <Link color="primary" fontWeight="bold" ml="1">
                    Masuk
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

export default FormRegister;
