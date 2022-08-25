import React from "react";
import { Todo } from "../../ts/interface";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

interface Props {
  todos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos }: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <Box boxShadow="rgb(173 173 173 / 10%) 0px 6px 0px 0px" key={todo.id}>
          <Flex direction="row" justify="space-between" w="full" align="center">
            <Flex align="center">
              <Box
                _hover={{ color: "primary", cursor: "pointer" }}
                _checked={{ color: "primary" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="4"></rect>
                  <path d="M9 12l2.25 2L15 10"></path>
                </svg>
              </Box>
              <Box w="full" m={4}>
                <Text fontSize="md" fontWeight="bold" color="primary">
                  {todo.title}
                </Text>
                <Text
                  fontSize="sm"
                  w="400px"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  textDecoration="initial"
                  overflow="hidden">
                  {todo.body}
                </Text>
                <Flex align="center">
                  <Text color="red" mr="2" fontSize="sm">
                    {todo.jam_task} AM
                  </Text>
                  <Text mr={2} fontSize="sm">
                    - {todo.tanggal_task}
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Flex>
              <Button
                mr={2}
                bg="transparent"
                color="green"
                _hover={{ background: "gray.100" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621z"></path>
                  <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </Button>
              <Button
                bg="transparent"
                color="primary"
                _hover={{ background: "gray.100" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6z"></path>
                  <path d="M7.345 3.147A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853z"></path>
                  <path d="M2 6h20"></path>
                  <path d="M10 11v5"></path>
                  <path d="M14 11v5"></path>
                </svg>
              </Button>
            </Flex>
          </Flex>
        </Box>
      ))}
    </div>
  );
};

export default TodoList;
