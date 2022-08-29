import React, { useState } from "react";
import axios from "axios";
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
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password, password_confirmation };

    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const filterPas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (filter.test(email)) {
      setErrorEmail("");
      if (filterPas.test(password)) {
        setErrorPassword("");
        if (password === password_confirmation) {
          // console.log(user);
          fetch("https://nouky.xyz/b3/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          }).then(() => {
            console.log("chekc");
          });
        } else {
          setErrorPasswordConfirm(
            "Password Konfirmasi tidak valid. Pastikan Password benar."
          );
        }
      } else {
        setErrorPasswordConfirm("");
        setErrorPassword(
          "Password tidak valid. Pastikan format Password benar."
        );
      }
    } else {
      setErrorEmail("Email tidak valid. Pastikan format email benar.");
    }
  };

  // showPassword
  const [show, setShow] = useState<boolean>(false);
  const [showUlangi, setShowUlangi] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };
  const handleShowUlangi = () => {
    setShowUlangi(!showUlangi);
  };

  return (
    <GridItem>
      <VStack
        w="full"
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Container>
          <Box textAlign="center" mb={7}>
            <Heading as="h1" size="md" mt={2}>
              Daftar
            </Heading>
          </Box>
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Text color="tomato" fontSize="sm">
                {errorEmail}
              </Text>
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
                  onChange={(e) => setPassword(e.target.value)}
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
                    onClick={handleShow}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Text color="tomato" fontSize="sm">
                {errorPassword}
              </Text>
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
                  value={password_confirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                    onClick={handleShowUlangi}
                  >
                    {showUlangi ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Text color="tomato" fontSize="sm">
                {errorPasswordConfirm}
              </Text>
              <Button
                type="submit"
                size="md"
                bg="#BA181B"
                _hover={{ bg: "#9e2427" }}
                color="#fff"
                mt={7}
                w="full"
                _active={{
                  bg: "#9e2427",
                  transform: "scale(0.98)",
                }}
              >
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
