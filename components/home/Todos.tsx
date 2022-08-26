import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";

// data Dummy
import todo from "../../todos.json";
import { Todo } from "../../ts/interface";
import TodoList from "../../components/home/TodoList";
import AddModal from "./Modal/AddModal";
// import Layout from "../../components/home/Layout";

const Todos = ({ Header, todo_status, overdue }: any) => {
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
    <Box
      flex="3"
      m={{ base: "0px", xl: "20px" }}
      border="1px"
      w="full"
      borderColor="gray.200">
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
      <Flex
        direction="column"
        overflowY="auto"
        px="28px"
        pb="28px"
        h={{ base: "500px", xl: "780px" }}
        className={styles.todo}>
        {/* Todos Done */}
        {todos.length != 0 ? (
          <TodoList todos={todos} todo_status={todo_status} overdue={overdue} />
        ) : (
          <Text textAlign="center" mb="25px">
            Belum ada Tugas untuk dilakukan
          </Text>
        )}
      </Flex>
      {/* add Todos */}
      <AddModal
        todos={todos}
        setTodos={setTodos}
        isOpen={visibleAddModal}
        onClose={() => setVisibleAddModal((prev) => !prev)}
      />
    </Box>
  );
};

export default Todos;
