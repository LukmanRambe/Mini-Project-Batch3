import { useState } from "react";
import NextLink from "next/link";
import Router from "next/router";
import Cookies from "universal-cookie";
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useStore } from "../../store/useStore";

const Login = () => {
  const { login } = useStore();
  const toast = useToast();
  // Input User
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  function validatePassword(): boolean {
    var validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (validate.test(password) === false) {
      toast({
        position: "top",
        title: "Gagal",
        description: "Password minimal 8 Character, Satu Huruf Besar dan Angka",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    } else {
      return true;
    }
  }

  function validateEmail(): boolean {
    if (email === "") {
      toast({
        position: "top",
        title: "Gagal",
        description: "Email Harus Diisi",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    } else {
      return true;
    }
  }

  const fetcher = async () => {
    const cookies = new Cookies();
    setLoading(true);
    await axios
      .post(
        "https://nouky.xyz/b3/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then((result) => {
        if (result.data.code === 200) {
          toast({
            position: "top",
            title: "Berhasil",
            description: result.data.message,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          // CookieAdd untuk logout
          cookies.set("ci_session", result.data.data.token, {
            path: "/",
            domain:
              process.env.NODE_ENV === "development"
                ? "localhost"
                : "mini-project-batch3.vercel.app",
          });
          // TokenJWT
          let dataToken = JSON.stringify(result.data.data.token);
          localStorage.setItem("xtoken", JSON.parse(dataToken));
          // nameUser
          let Name = JSON.stringify(result.data.data.name);
          localStorage.setItem("name", JSON.parse(Name));
          // auth;
          setTimeout(() => {
            login();
            Router.push("/home");
          }, 1000);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(true);
        if (err.code === "ECONNABORTED") {
          toast({
            position: "top",
            title: "Gagal",
            description:
              "Tidak dapat menjangkau Server, periksa koneksi Anda dan ulangi beberapa saat lagi.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setLoading(false);
        } else if (err.response) {
          toast({
            position: "top",
            title: "Gagal",
            description: err.response.data.messages.error,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setLoading(false);
        }
      });
  };

  const handleMasuk = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateEmail()) {
      if (validatePassword()) {
        // fetching API and Login
        fetcher();
      }
    }
  };

  // show type password
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
          <form onSubmit={(e) => handleMasuk(e)}>
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
                onChange={(e) => handleEmailChange(e)}
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
                  onChange={(e) => handlePassword(e)}
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
                }}>
                {!loading && <Text>Masuk</Text>}
                {loading && <Spinner></Spinner>}
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
