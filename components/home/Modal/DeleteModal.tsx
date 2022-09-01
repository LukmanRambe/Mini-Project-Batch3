// Styles
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
} from "@chakra-ui/react";

import { IDeleteModal } from "../../../ts/interface";
import { mutate } from "swr";

const DeleteModal = ({
  id_task,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  onDeleteModalClose,
}: IDeleteModal) => {
  const toast = useToast();
  const handleHapus = async () => {
    try {
      await fetch("https://nouky.xyz/b3/task/delete/" + id_task, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("xtoken"),
        },
      }).then((result) => {
        console.log(result.status);
        if (result.status == 200) {
          toast({
            position: "top",
            title: "Berhasil",
            description: "Data Berhasil Terhapus",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setIsDeleteModalOpen(false);
        } else {
          toast({
            position: "top",
            title: "Gagal",
            description: "Terjadi Kesalahan",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setIsDeleteModalOpen(false);
        }
        mutate(`${"https://nouky.xyz/b3"}/task/show_all`);
        mutate(`${"https://nouky.xyz/b3"}/task/show_todo`);
        mutate(`${"https://nouky.xyz/b3"}/task/show_overdue`);
        mutate(`${"https://nouky.xyz/b3"}/task/show_done`);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal
      isOpen={isDeleteModalOpen}
      onClose={onDeleteModalClose}
      blockScrollOnMount={false}>
      <ModalOverlay />
      <ModalContent alignSelf="center" padding="5px">
        <ModalHeader textAlign="center" color="#BA181B">
          Hapus Task
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">
          Apakah Anda yakin ingin menghapus task?
        </ModalBody>
        <ModalFooter justifyContent="center" pt={10} pb={5}>
          <Button
            bg="transparent"
            size="lg"
            _hover={{ color: "#9e2427" }}
            color="#BA181B"
            _active={{
              bg: "transparent",
              transform: "scale(0.98)",
            }}
            w={175}
            onClick={() => setIsDeleteModalOpen((prevState) => !prevState)}>
            Batalkan
          </Button>
          <Button
            onClick={handleHapus}
            bg="#BA181B"
            size="lg"
            _hover={{ bg: "#9e2427" }}
            color="#fff"
            _active={{
              bg: "#9e2427",
              transform: "scale(0.98)",
            }}
            w={175}>
            Hapus
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
