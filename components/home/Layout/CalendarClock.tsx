// Styles
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import moment from "moment";
import { useEffect, useState, useCallback } from "react";
import AnalogueClock from "react-analogue-clock";

const CalendarClock = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const isDisabled: any = useCallback(
    (date: { getDate: () => number; getMonth: () => number }) => {
      // disable wednesdays and any date that is divisible by 5
      if (date.getDate() == 17) {
        if (date.getMonth() == 7) {
          return true;
        }
      }
      if (date.getDate() == 8) {
        if (date.getMonth() == 9) {
          return true;
        }
      }
      if (date.getDate() == 25) {
        if (date.getMonth() == 11) {
          return true;
        }
      }
    },
    []
  );

  const [days, setDays] = useState([]);
  const fetchData = () => {
    const date = new Date();
    const currentMonth = date.toLocaleString("id-ID").substring(2, 3);

    fetch(`https://api-harilibur.vercel.app/api?month=${currentMonth}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDays(data);
      });
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

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
    handColors: {
      hour: "#FFFFFF",
      minute: "#FFFFFF",
      second: "#DA2E7C",
    },
    notchColor: "#737373",
    numbersColor: "#000000",
    showNumbers: false,
    size: 200,
    centerColor: "#FFFFFF",
  };
  let i = 0;
  return (
    <Box
      flex="1"
      my="20px"
      border="1px"
      w="100%"
      h="auto"
      px="15px"
      borderColor="gray.200">
      <Grid
        justifyContent="center"
        alignItems="center"
        borderBottom="1px"
        borderColor="gray.200"
        h="5rem"
        w="100%">
        <Heading as="h2" size="md">
          Jam dan Tanggal Hari ini
        </Heading>
      </Grid>
      <Grid justifyContent="center" alignItems="center" gap={5}>
        <Box display={{ md: "flex" }}>
          <Center padding={5} display={{ base: "block", md: "flex" }}>
            <Box>
              <AnalogueClock {...clockOptions} />
            </Box>
            <Box padding={4}>
              <Heading textAlign="center">{timerun}</Heading>
            </Box>
          </Center>
        </Box>
      </Grid>
      <Grid justifyContent="center" alignItems="center" padding-bottom={5}>
        <Box display={{ md: "flex" }} flexWrap="wrap">
          <Center textAlign={{ base: "center", md: "left" }}>
            <Box maxW="100%">
              <Box display={{ base: "block", md: "none" }}>
                <Calendar
                  size={220}
                  fontSize={18}
                  hideAdjacentDates
                  isDisabled={isDisabled}
                />
              </Box>
              <Box display={{ base: "none", md: "block" }}>
                <Skeleton isLoaded={isLoaded}>
                  <Calendar
                    size={350}
                    fontSize={18}
                    hideAdjacentDates
                    isDisabled={isDisabled}
                  />
                </Skeleton>
              </Box>
              <Heading fontSize="18px" py="12px" px="18px">
                Keterangan
              </Heading>
              {days?.length > 0 ? (
                <div>
                  {days.map((day: any) => {
                    if (day.is_national_holiday === true) {
                      const dates = moment(day.holiday_date).format("LL");
                      const number = day.holiday_date;
                      const numbers = number.split("-");

                      return (
                        <Box
                          bg="red"
                          borderRadius={16}
                          padding={4}
                          mt={2}
                          key={i++}>
                          <Flex>
                            <Center>
                              <Box padding={2} className="segitiga">
                                <Heading size="md">{numbers[2]}</Heading>
                              </Box>
                              <Box className="segitiga2"></Box>
                            </Center>
                            <Box
                              borderLeft="1px solid #ffffff"
                              ml="12px"
                              px="15px">
                              <Text color="white">{dates}</Text>
                              <Text color="white" fontSize="xs">
                                {day.holiday_name}
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      );
                    }
                  })}
                </div>
              ) : (
                <Text color="#737373" px={4} py={4}>
                  Tidak ada hari libur
                </Text>
              )}
            </Box>
          </Center>
        </Box>
      </Grid>
    </Box>
  );
};

export default CalendarClock;
