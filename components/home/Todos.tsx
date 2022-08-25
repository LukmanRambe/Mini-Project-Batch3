import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

// data Dummy
import todo from "../../todos.json";
import { Todo } from "../../ts/interface";
import TodoList from "../../components/home/TodoList";
import AddModal from "./Modal/AddModal";
// import Layout from "../../components/home/Layout";

const Todos = ({ Header }: any) => {
  const router = useRouter();
  const pathName = router.asPath;

  const [todos, setTodos] = useState<Todo[]>([]);
  const [visibleAddModal, setVisibleAddModal] = useState(false);
  // pengetesan todo ketika kosong dan terdapat data
  useEffect(() => {
    setTimeout(() => {
      setTodos(todo);
    }, 5000);
  }, [todos]);

  return (
    <Box m="20px" border="1px" w="100%" borderColor="gray.200" h="780px">
      <Flex
        px="28px"
        align="center"
        h="5rem"
        w="100%"
        mb="30px"
        justify="space-between"
        borderBottom="1px"
        borderColor="gray.200">
        <Heading as="h2" size="md">
          {Header}
        </Heading>
        {pathName === "/home" ? (
          <Button onClick={() => setVisibleAddModal(true)}>Tambah</Button>
        ) : (
          ""
        )}
      </Flex>
      <Flex h="100%" direction="column" overflowY="auto" px="28px">
        {/* Todos Done */}
        {todos.length != 0 ? (
          <TodoList todos={todos} />
        ) : (
          <Text textAlign="center" mb="25px">
            Belum ada Tugas untuk dilakukan
          </Text>
        )}
      </Flex>
      {/* add Todos */}
      <AddModal
        isOpen={visibleAddModal}
        onClose={() => setVisibleAddModal((prev) => !prev)}
      />
    </Box>
  );
};

export default Todos;
