// Styles
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCountDoneTodo } from "../../../hooks/remote/useCountDoneTodo";
import { useCountOverdueTodo } from "../../../hooks/remote/useCountOverdueTodo";
import { useCountTodo } from "../../../hooks/remote/useCountTodo";

const Header = () => {
  const { countTodo } = useCountTodo();
  const { countDoneTodo } = useCountDoneTodo();
  const { countOverdueTodo } = useCountOverdueTodo();
  const [name, setName] = useState<string | null>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const username = localStorage.getItem("name");
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    setName(username);
  }, []);

  return (
    <Box borderBottom="1px" borderBottomColor="#EFEFEF" p="40px" pb="60px">
      <Flex
        justify={{
          base: "center",
          md: "center",
          lg: "space-between",
        }}
        flexWrap={{
          base: "wrap",
          lg: "nowrap",
        }}
        gap={4}>
        <Flex
          gap="15px"
          w="100%"
          align="center"
          direction={{
            base: "column",
            lg: "row",
          }}
          textAlign={{
            base: "center",
            lg: "left",
          }}>
          {/* START: Profile Picture */}
          <SkeletonCircle
            isLoaded={isLoaded}
            display="flex"
            alignItems="center"
            justifyContent="center"
            minW={{
              base: "78px",
              lg: "82px",
            }}
            minH={{
              base: "78px",
              lg: "82px",
            }}>
            <Box
              color="#ffffff"
              bg="#718096"
              borderRadius="100%"
              minW={{
                base: "78px",
                lg: "82px",
              }}
              minH={{
                base: "78px",
                lg: "82px",
              }}
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Heading
                fontSize={{
                  base: "42px",
                  lg: "48px",
                }}
                fontWeight="700">
                {name && name[0]}
              </Heading>
            </Box>
          </SkeletonCircle>
          {/* END: Profile Picture */}

          {/* START: Username & Typography */}
          <Box>
            <SkeletonText
              noOfLines={1}
              w={isLoaded ? "full" : "80px"}
              mb={isLoaded ? 0 : 2}
              isLoaded={isLoaded}>
              <Heading fontSize="24px" mb={0} fontWeight="700">
                {name && name}
              </Heading>
            </SkeletonText>
            <SkeletonText
              noOfLines={2}
              w={isLoaded ? "full" : "120px"}
              isLoaded={isLoaded}>
              <Text fontSize="18px" color="#737373">
                Ayo Lebih Produktif 💪
              </Text>
            </SkeletonText>
          </Box>
          {/* END: Username & Typography */}
        </Flex>

        {/* START: Todos Counter */}
        <Flex
          w={{
            base: "100%",
            lg: "inherit",
          }}
          direction={{
            base: "column",
            md: "row",
            lg: "row",
          }}
          gap={{
            base: 5,
            lg: 10,
          }}
          mt={{
            base: 10,
            md: 10,
            lg: 0,
          }}>
          {/* START: Todo Counter */}
          <Skeleton
            isLoaded={isLoaded}
            borderRadius={{
              base: "12px",
              lg: "6px",
            }}
            w={{
              base: "100%",
              lg: "140px",
              sm: "100%",
            }}
            h={{
              base: "100%",
              lg: "77px",
              sm: "90px",
            }}
            bgSize="cover"
            bgRepeat="no-repeat">
            <Container
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="#ffffff"
              bgImage="https://mini-project-vocasia.vercel.app/dashboard/todo-stats-bg/todo-counter-bg.svg"
              borderRadius={{
                base: "12px",
                lg: "6px",
              }}
              w={{
                base: "100%",
                lg: "140px",
                sm: "100%",
              }}
              h={{
                base: "100%",
                lg: "77px",
                sm: "90px",
              }}
              bgSize="cover"
              bgRepeat="no-repeat">
              <Heading fontSize="47px" fontWeight="400" mr="8px">
                {countTodo?.jumlah_data || 0}
              </Heading>
              <Text fontSize="12px">
                To Do <br /> Task Today
              </Text>
            </Container>
          </Skeleton>
          {/* START: Todo Counter */}

          {/* START: Done Todo Counter */}
          <Skeleton
            isLoaded={isLoaded}
            borderRadius={{
              base: "12px",
              lg: "6px",
            }}
            w={{
              base: "100%",
              lg: "140px",
              sm: "100%",
            }}
            h={{
              base: "100%",
              lg: "77px",
              sm: "90px",
            }}
            bgSize="cover"
            bgRepeat="no-repeat">
            <Container
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="#ffffff"
              bgImage="https://mini-project-vocasia.vercel.app/dashboard/todo-stats-bg/done-counter-bg.svg"
              borderRadius={{
                base: "12px",
                lg: "6px",
              }}
              w={{
                base: "100%",
                lg: "140px",
                sm: "100%",
              }}
              h={{
                base: "100%",
                lg: "77px",
                sm: "90px",
              }}
              bgSize="cover"
              bgRepeat="no-repeat">
              <Heading fontSize="47px" fontWeight="400" mr="8px">
                {countDoneTodo?.jumlah_data || 0}
              </Heading>
              <Text fontSize="12px">Done Task</Text>
            </Container>
          </Skeleton>
          {/* END: Done Todo Counter */}

          {/* START: Overdue Todo Counter */}
          <Skeleton
            isLoaded={isLoaded}
            borderRadius={{
              base: "12px",
              lg: "6px",
            }}
            w={{
              base: "100%",
              lg: "140px",
              sm: "100%",
            }}
            h={{
              base: "100%",
              lg: "77px",
              sm: "90px",
            }}
            bgSize="cover"
            bgRepeat="no-repeat">
            <Container
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="#ffffff"
              bgImage="https://mini-project-vocasia.vercel.app/dashboard/todo-stats-bg/overdue-counter-bg.svg"
              borderRadius={{
                base: "12px",
                lg: "6px",
              }}
              w={{
                base: "100%",
                lg: "140px",
                sm: "100%",
              }}
              h={{
                base: "100%",
                lg: "77px",
                sm: "90px",
              }}
              bgSize="cover"
              bgRepeat="no-repeat">
              <Heading fontSize="47px" fontWeight="400" mr="8px">
                {countOverdueTodo?.jumlah_data || 0}
              </Heading>
              <Text fontSize="12px">
                Overdue <br /> Task
              </Text>
            </Container>
          </Skeleton>
          {/* END: Overdue Todo Counter */}
        </Flex>
        {/* END: Todos Counter */}
      </Flex>
    </Box>
  );
};

export default Header;
