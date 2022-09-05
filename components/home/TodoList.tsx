import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Todo } from "../../ts/interface";
import { serviceURL } from "../../utils/config";
import { mutate } from "swr";
import DeleteModal from "./Modal/DeleteModal";
import EditModal from "./Modal/EditModal";
// Styles
import { Box, Flex, Text, Button, useToast, Skeleton } from "@chakra-ui/react";

interface Props {
  todos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos }: Props) => {
  const toast = useToast();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [task_id, setTaskId] = useState<number | undefined>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const isDeleteClick = (id: number | undefined) => {
    setIsDeleteModalOpen((prev) => !prev);
    setTaskId(id);
  };

  const isEditClick = (id: number | undefined) => {
    setIsEditModalOpen((prev) => !prev);
    setTaskId(id);
  };

  const updateTaskStatus = async (taskId: number | undefined) => {
    const todoData = todos.filter((todo) => todo.id_task === taskId)[0];
    if (todoData) {
      if (
        todoData.keterangan === "Progress" ||
        todoData.keterangan === "Overdue"
      ) {
        await axios
          .post(`${serviceURL}/task/finish_task/${taskId}`, null, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("xtoken"),
            },
          })
          .then((result) => {
            toast({
              position: "top",
              title: "Berhasil",
              description: result.data.message,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            mutate(`${serviceURL}/task/show_all`);
            mutate(`${serviceURL}/task/show_done`);
            mutate(`${serviceURL}/task/show_overdue`);
            mutate(`${serviceURL}/task/count_todo`);
            mutate(`${serviceURL}/task/count_overdue`);
            mutate(`${serviceURL}/task/count_done`);
          })
          .catch((err) => {
            if (err.code === "ECONNABORTED") {
              toast({
                position: "top",
                title: "Gagal",
                description:
                  "Tidak dapat menjangkau Server, Periksa koneksi anda dan ulangi beberapa saat lagi.",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            } else if (err.response) {
              toast({
                position: "top",
                title: "Gagal",
                description: err.message,
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }
          });
      } else if (
        todoData.keterangan === "Done" ||
        todoData.keterangan === "Overdue"
      ) {
        await axios
          .post(`${serviceURL}/task/undo_done_task/${taskId}`, null, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("xtoken"),
            },
          })
          .then((result) => {
            toast({
              position: "top",
              title: "Berhasil",
              description: result.data.message,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            mutate(`${serviceURL}/task/show_all`);
            mutate(`${serviceURL}/task/show_done`);
            mutate(`${serviceURL}/task/show_overdue`);
            mutate(`${serviceURL}/task/count_todo`);
            mutate(`${serviceURL}/task/count_overdue`);
            mutate(`${serviceURL}/task/count_done`);
          })
          .catch((err) => {
            if (err.code === "ECONNABORTED") {
              toast({
                position: "top",
                title: "Gagal",
                description:
                  "Tidak dapat menjangkau Server, Periksa koneksi anda dan ulangi beberapa saat lagi.",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            } else if (err.response) {
              toast({
                position: "top",
                title: "Gagal",
                description: err.message,
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }
          });
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div>
      {todos
        ?.sort((todoA: Todo, todoB: Todo) => todoB?.id_task - todoA?.id_task)
        .map((todo, index) => (
          <Skeleton mt={isLoaded ? 0 : 2} isLoaded={isLoaded} key={index}>
            <Box boxShadow="rgb(173 173 173 / 10%) 0px 6px 0px 0px" py="3px">
              <Flex
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
                w="full"
                align={{ base: "flex-start", sm: "center" }}>
                <Flex
                  align="center"
                  opacity={`${todo.keterangan === "Done" ? "0.6" : ""}`}>
                  <Box
                    _hover={{
                      color: `${todo.keterangan !== "Done" ? "primary" : ""}`,
                      cursor: "pointer",
                    }}
                    _checked={{ color: "primary" }}
                    onClick={() => updateTaskStatus(todo.id_task)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={`${
                        todo.keterangan === "Done" ? "#C53030" : "none"
                      }`}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect
                        x="3"
                        y="3"
                        color={`${todo.keterangan === "Done" ? "#C53030" : ""}`}
                        width="18"
                        height="18"
                        rx="4"></rect>
                      <path
                        color={`${todo.keterangan === "Done" ? "white" : ""}`}
                        d="M9 12l2.25 2L15 10"></path>
                    </svg>
                  </Box>
                  <Box w="full" m={4} mt={6}>
                    <Text
                      fontSize="md"
                      fontWeight="bold"
                      color="primary"
                      style={{
                        textDecoration: `${
                          todo.keterangan === "Done" ? "line-through" : ""
                        }`,
                      }}>
                      {todo.judul}
                    </Text>
                    <Text
                      fontSize="sm"
                      maxW="400px"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      textDecoration="initial"
                      overflow="hidden"
                      style={{
                        textDecoration: `${
                          todo.keterangan === "Done" ? "line-through" : ""
                        }`,
                      }}>
                      {todo.komentar}
                    </Text>
                    <Flex
                      mt="7px"
                      align={{
                        lg: "center",
                        base: "left",
                      }}
                      direction={{
                        lg: "row",
                        base: "column",
                      }}>
                      <Text color="red" fontSize="sm">
                        {todo.jam}
                      </Text>
                      <Text mx="5px">-</Text>
                      <Text fontSize="sm">
                        {" "}
                        {moment(todo.tanggal)
                          .locale("id")
                          .format("dddd, DD MMMM YYYY")}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
                <Flex
                  justify={{ base: "space-around", sm: "flex-end" }}
                  w={{ base: "full", sm: "auto" }}
                  py={3}>
                  <Button
                    mr={2}
                    bg="transparent"
                    color="green"
                    onClick={() => isEditClick(todo.id_task)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621z"></path>
                      <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </Button>
                  <Button
                    bg="transparent"
                    color="primary"
                    _hover={{ background: "gray.100" }}
                    onClick={() => isDeleteClick(todo.id_task)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
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
          </Skeleton>
        ))}
      <EditModal
        id_task={task_id}
        todo={todos}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        onEditModalClose={() => setIsEditModalOpen((prevState) => !prevState)}
      />
      <DeleteModal
        id_task={task_id}
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        onDeleteModalClose={() =>
          setIsDeleteModalOpen((prevState) => !prevState)
        }
      />
    </div>
  );
};

export default TodoList;
