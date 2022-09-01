import { useToast } from "@chakra-ui/react";
import useSWR from "swr";
import { fetcher, serviceURL } from "../../utils/config";

export const useCountDoneTodo = () => {
    const toast = useToast();
    const { data: countDoneTodo, error: errorCountDoneTodo } = useSWR(
        `${serviceURL}/task/count_done`,
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
        countDoneTodo,
        errorCountDoneTodo,
    };
};
