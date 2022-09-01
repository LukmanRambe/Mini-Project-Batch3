// Styles
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import { useEffect, useState, useCallback, SetStateAction } from "react";
import AnalogueClock from "react-analogue-clock";

const CalendarClock = () => {
  const isDisabled = useCallback(
    (date: { getDate: () => number; getMonth: () => number }) => {
      // disable wednesdays and any date that is divisible by 5
      if (date.getDate() == 17) {
        if (date.getMonth() == 7) {
          return true;
        }
      }
    },
    []
  );
  const time = new Date();
  const timerun = time.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  const clockOptions = {
    baseColor: "#22345E",
    borderColor: "#15264F",
    borderWidth: 5,
    centerColor: "#22345E",
    handColors: {
      hour: "#FFFFFF",
      minute: "#FFFFFF",
      second: "#DA2E7C",
    },
    notchColor: "#737373",
    numbersColor: "#000000",
    showNumbers: false,
    size: 150,
  };
  return (
    <Box
      flex="1"
      my="20px"
      border="1px"
      w="100%"
      h="auto"
      borderColor="gray.200"
    >
      <Grid
        justifyContent="center"
        alignItems="center"
        borderBottom="1px"
        borderColor="gray.200"
        h="5rem"
        w="100%"
      >
        <Heading as="h2" size="md">
          Jam dan Tanggal Hari ini
        </Heading>
      </Grid>
      <Grid justifyContent="center" alignItems="center" gap={5}>
        <Box display={{ md: "flex" }}>
          <Center padding={5}>
            <Box>
              <AnalogueClock {...clockOptions} />
            </Box>
            <Box padding={4}>
              <Heading>{timerun}</Heading>
            </Box>
          </Center>
        </Box>
      </Grid>
      <Grid
        justifyContent="center"
        alignItems="center"
        gap={5}
        padding-bottom={5}
      >
        <GridItem>
          <Calendar
            size={250}
            fontSize={14}
            hideAdjacentDates
            isDisabled={isDisabled}
          />
        </GridItem>
        <h3>Keterangan</h3>
        <VStack align="stretch">
          <Box bg="red" borderRadius={16} padding={4} maxWidth={400}>
            <Flex>
              <Center>
                <Box padding={2} className="segitiga">
                  <Heading size="md">17</Heading>
                </Box>
                <Box className="segitiga2"></Box>
              </Center>
              <Box className="borderLeft"></Box>
              <Box>
                <Text color="white">Rabu, 17 Agustus 2022</Text>
                <Text color="white" fontSize="xs">
                  Hari Proklamasi Kemerdekaan RI
                </Text>
              </Box>
            </Flex>
          </Box>
        </VStack>
      </Grid>
    </Box>
  );
};

export default CalendarClock;
