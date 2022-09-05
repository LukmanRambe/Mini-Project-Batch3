import { useState, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Image,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { IAddModal, Todo } from "../../../ts/interface";
import { serviceURL } from "../../../utils/config";
import { mutate } from "swr";

const AddModal = ({ isOpen, onClose }: IAddModal) => {
  const date = new Date();
  let tempHours = `${date.getHours() < 10 ? "0" : ""}${date.getHours()}`;
  let tempMinutes = `${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
  const toast = useToast();

  const [data, setData] = useState<Todo>({
    judul: "",
    komentar: "",
    jam: `${tempHours}:${tempMinutes}`,
    tanggal: date.toISOString().substring(0, 10),
  });
  const [isError, setIsError] = useState(false);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onHandleAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async () => {
    if (data.judul === "") {
      setIsError(true);
    } else {
      if (data) {
        await axios
          .post(`${serviceURL}/task/create`, data, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("xtoken"),
            },
          })
          .then((result) => {
            if (result.data.code === 200) {
              toast({
                position: "top",
                title: "Berhasil",
                description: result.data.message,
                status: "success",
                duration: 3000,
                isClosable: true,
              });
              onClose();
              setData({
                judul: "",
                komentar: "",
                jam: `${tempHours}:${tempMinutes}`,
                tanggal: date.toISOString().substring(0, 10),
              });
            } else {
              toast({
                position: "top",
                title: "Berhasil",
                description: result.data.message,
                status: "success",
                duration: 3000,
                isClosable: true,
              });
              onClose();
              setData({
                judul: "",
                komentar: "",
                jam: `${tempHours}:${tempMinutes}`,
                tanggal: date.toISOString().substring(0, 10),
              });
            }
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
                description: err.response.data.message,
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            } else {
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
    if (data.judul !== "") {
      setIsError(false);
    }
  }, [data.judul]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={true}>
      <ModalOverlay />
      <ModalContent
        height={{
          base: 400,
          md: "auto",
        }}
        overflow={{
          base: "auto",
          md: "hidden",
        }}
        mx="15px"
        alignSelf="center">
        <ModalHeader textAlign="center" color="#BA181B">
          Task
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={isError === true} isRequired mb={5}>
            <FormLabel fontWeight="bold">Judul Task</FormLabel>
            <Input
              required
              placeholder="Judul Task"
              name="judul"
              value={data.judul}
              onChange={(event) => onHandleChange(event)}
            />
            {isError === true && (
              <FormErrorMessage>Judul is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl mb={5}>
            <FormLabel fontWeight="bold">Komentar Task</FormLabel>
            <Textarea
              placeholder="Komentar Task"
              name="komentar"
              value={data.komentar}
              onChange={(event) => onHandleAreaChange(event)}
            />
          </FormControl>
          <FormControl w={180} mb={5}>
            <FormLabel fontWeight="bold">Jam Task</FormLabel>
            <Input
              placeholder="Select Date and Time"
              type="time"
              name="jam"
              value={data.jam}
              onChange={(e) => onHandleChange(e)}
            />
          </FormControl>
          <FormControl w={180} mb={5}>
            <FormLabel fontWeight="bold">Tanggal Task</FormLabel>
            <Input
              placeholder="Select Date and Time"
              type="date"
              name="tanggal"
              value={data.tanggal}
              onChange={(event) => onHandleChange(event)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter
          justifyContent="center"
          backgroundColor="rgba(186, 24, 27, 0.02)"
          boxShadow="0px -4px 22px rgba(0, 0, 0, 0.1)"
          pt={10}
          pb={5}>
          <Image
            position="absolute"
            right={0}
            alt="footer"
            src="https://mini-project-vocasia.vercel.app/image/custom/vektor1.svg"
          />
          <Button
            bg="#BA181B"
            size="lg"
            _hover={{ bg: "#9e2427" }}
            color="#fff"
            _active={{
              bg: "#9e2427",
              transform: "scale(0.98)",
            }}
            onClick={onSubmit}
            w={175}>
            Tambahkan Task
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddModal;
