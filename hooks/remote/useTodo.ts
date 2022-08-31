import { useToast } from "@chakra-ui/react";
import useSWR from "swr";
import { fetcher, serviceURL } from "../../utils/config";

export const useTodo = (path: string) => {
  const toast = useToast();
  const { data: todos, error: errorTodos } = useSWR(
    `${serviceURL}/task/${path}`,
    fetcher,
    {
      refreshWhenOffline: true,
      onError: (err) => {
        if (err.code === "ECONNABORTED") {
          toast({
            title:
              "Tidak dapat menjangkau Server, Periksa koneksi anda dan ulangi beberapa saat lagi.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else if (err.response.data) {
          toast({
            title: err.response.data.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            title: err.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      },
    }
  );
  return {
    todos,
    errorTodos,
  };
};
