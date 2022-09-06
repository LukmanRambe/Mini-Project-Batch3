import { useState } from "react";
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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useRouter } from "next/router";

const FormRegister = () => {
  const router = useRouter();

  // stateInput
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  // error
  const [errorEmail, setErrorEmail] = useState("");
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

  // RegisterButton
  const handleSubmit = async (e: any) => {
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
          try {
            setLoading(true);
            const response = await fetch("https://nouky.xyz/b3/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
              body: JSON.stringify(user),
            });

            const responseData = await response.json();

            if (responseData.code === 201) {
              setResponseCode(responseData.code);
              setMessage(responseData.message);

              setTimeout(() => {
                router.push("/");
                setResponseCode(null);
                setMessage("");
              }, 3000);
            } else {
              setResponseCode(responseData.code);
              setMessage(responseData.message);
              setMessage("");
            }
          } catch (err) {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setResponseCode(400);
              setMessage("Server Terjadi Masalah");
            }, 500);
          }
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
          bg={responseCode === 201 ? "green.400" : "red.400"}
        >
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
                {!loading && <p> Daftar</p>}
                {loading && <Spinner> </Spinner>}
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
