import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

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
  FormErrorMessage,
  FormLabel,
  InputRightElement,
  InputGroup,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Spinner,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const ResetPassword = ({ slug: string }) => {
  const router = useRouter();
  // const toast = useToast();
  // const pathName = router.query;

  // stateInput
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  // error
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");

  // alert
  const [message, setMessage] = useState<string | null>(null);
  const [responseCode, setResponseCode] = useState<number | null>(null);
  const handleClose = (): void => {
    setMessage("");
    setResponseCode(null);
  };
  const [loading, setLoading] = useState(false);

  const handleSubmitResetPassword = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const userPassword = { password, password_confirmation };

    var validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if (validate.test(password)) {
      setErrorPassword("");
      if (password === password_confirmation) {
        try {
          setLoading(true);
          const response = await axios.post(
            `https://nouky.xyz/b3/reset_password/${slug}`,
            {
              body: JSON.stringify(userPassword),
            }
          );
          if (response.status === 200) {
            // console.log(response.request.responseURL);
            router.push("/");
            setLoading(false);
            setResponseCode(null);
            setMessage("");
          }
        } catch (err) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            console.log(err);
            setResponseCode(400);
            setMessage("Server Terjadi Masalah");
          }, 500);
        }

        setErrorPasswordConfirm("");
        setErrorPassword("");
      } else {
        setErrorPasswordConfirm(
          "Password tidak sama. Pastikan Password benar."
        );
      }
    } else {
      setErrorPasswordConfirm("");
      setErrorPassword(
        "Password tidak valid. (minimal 8 karakter, menggunakan minimal satu huruf besar dan angka)"
      );
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

  useEffect(() => {
    // if (email !== "") {
    //   setIsError(false);
    // }
  }, []);

  return (
    <GridItem>
      {message && (
        <Alert
          status={responseCode === 201 ? "success" : "error"}
          position="absolute"
          w="auto"
          top="2"
          left="50%"
          transform="translateX(-50%)"
          borderRadius="md"
          color="white"
          bg={responseCode === 201 ? "green.400" : "red.400"}>
          <AlertIcon color="white" />
          <Box pr={10} pl={2}>
            <AlertTitle>
              {responseCode === 201 ? "Berhasil" : "Gagal"}
            </AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="absolute"
            right={2}
            top={2}
            onClick={handleClose}
          />
        </Alert>
      )}
      <VStack
        w="full"
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Container>
          <Box textAlign="center" mb={7}>
            <Heading as="h1" size="md" mt={2}>
              Reset Password
            </Heading>
          </Box>

          <form
            method="POST"
            onSubmit={(event) => handleSubmitResetPassword(event)}>
            <FormControl isRequired>
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
                    onClick={handleShow}>
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
                    onClick={handleShowUlangi}>
                    {showUlangi ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Text color="tomato" fontSize="sm">
                {errorPasswordConfirm}
              </Text>
              <Button
                type="submit"
                mt={7}
                w="full"
                size="md"
                color="#fff"
                bg="#BA181B"
                _hover={{ bg: "#9e2427" }}
                _active={{
                  bg: "#9e2427",
                  transform: "scale(0.98)",
                }}>
                {!loading && <p>Reset Password</p>}
                {loading && <Spinner> </Spinner>}
              </Button>
            </FormControl>
          </form>
        </Container>
      </VStack>
    </GridItem>
  );
};

export default ResetPassword;
