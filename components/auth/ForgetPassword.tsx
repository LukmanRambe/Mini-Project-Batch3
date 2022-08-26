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
} from "@chakra-ui/react";

const ForgetPassword = () => {
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
        alignItems="center"
        px={{ base: 14, lg: 114 }}>
        <Box>
          <Box textAlign="center" mb={7}>
            <Heading as="h1" size="md" mt={2}>
              Lupa Password
            </Heading>
            <Text fontSize="xs" color="#737373" mt={3}>
              Masukan email yang telah terdaftar,
            </Text>
            <Text fontSize="xs" color="#737373">
              kami akan mengirim link untuk mengembalikan akunmu
            </Text>
          </Box>
          <Flex gap={1} mb={2}>
            <Text fontSize="xs">Email </Text>
            <Text fontSize="xs" color="red">
              {" "}
              *
            </Text>
          </Flex>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={(e) => handleEmailChange(e)}
            bg="#fff"
            placeholder="Email"
            size="sm"
            borderRadius={12}
          />
          <Button
            size="sm"
            bg="#BA181B"
            _hover={{ bg: "#9e2427" }}
            color="#fff"
            mt={7}
            w="full"
            _active={{
              bg: "#9e2427",
              transform: "scale(0.98)",
            }}>
            Lanjut
          </Button>
        </Box>
      </VStack>
    </GridItem>
  );
};

export default ForgetPassword;
