// Styles
import { Box, Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import moment from "moment";
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
  const [day, setDay] = useState([]);
  const fetchData = () => {
    fetch("https://api-harilibur.vercel.app/api")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDay(data);
      });
  };

  useEffect(() => {
    fetchData();
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
      <Grid justifyContent="center" alignItems="center" padding-bottom={5}>
        <Box display={{ md: "flex" }}>
          <Center>
            <Box>
              <Calendar
                size={350}
                fontSize={18}
                hideAdjacentDates
                isDisabled={isDisabled}
              />
              <h3>Keterangan</h3>
              {day.length > 0 && (
                <div>
                  {day.map((days) => {
                    if (days.is_national_holiday == true) {
                      const dates = moment(days.holiday_date).format("LL");
                      const number = days.holiday_date;
                      const numbers = number.split("-");

                      return (
                        <Box
                          bg="red"
                          borderRadius={16}
                          padding={4}
                          margin={2}
                          key={i++}
                        >
                          <Flex>
                            <Center>
                              <Box padding={2} className="segitiga">
                                <Heading size="md">{numbers[1]}</Heading>
                              </Box>
                              <Box className="segitiga2"></Box>
                            </Center>
                            <Box className="borderLeft"></Box>
                            <Box>
                              <Text color="white">{dates} </Text>
                              <Text color="white" fontSize="xs">
                                {days.holiday_name}
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      );
                    }
                  })}
                </div>
              )}
            </Box>
          </Center>
        </Box>
      </Grid>
    </Box>
  );
};

export default CalendarClock;
