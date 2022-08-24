import React, { useState } from "react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Link,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Flex
      flex="1"
      h="100vh"
      direction="column"
      align="center"
      justify="center"
      px="115px">
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        maxW="450px"
        h="full">
        <Heading as="h2" size="lg">
          Masuk
        </Heading>
        <form action="submit" style={{ width: "100%" }}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              bg="white"
              borderRadius="12px"
              py="13px"
              px="20px"
              required
            />
            <Box mt="16px">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  py="13px"
                  px="20px"
                  type={show ? "text" : "password"}
                  borderRadius="12px"
                  bg="white"
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
            </Box>
            {/* Lupa Password */}
            <Flex justify="flex-end" mt="15px">
              <Link color="primary">Lupa Password?</Link>
            </Flex>

            <Button mt="40px" variant="primary" w="100%" type="submit">
              LOGIN
            </Button>
          </FormControl>
        </form>
        <Flex mt="20px">
          <Text color="#737373" fontSize="lg">
            Belum Punya Akun?
            <Link color="primary" fontWeight="bold" ml="1">
              Daftar
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
