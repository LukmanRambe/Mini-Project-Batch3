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

import { ILogoutModal } from "../../../ts/interface";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import { useStore } from "../../../store/useStore";

const LogoutModal = ({
  isLogoutModalOpen,
  setIsLogoutModalOpen,
  onLogoutModalClose,
}: ILogoutModal) => {
  const router = useRouter();
  const toast = useToast();
  const { logout } = useStore();
  const cookies = new Cookies();
  const handleLogout = async () => {
    setIsLogoutModalOpen(false);

    try {
      await fetch("https://nouky.xyz/b3/logout", {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("xtoken"),
        },
      });
      toast({
        position: "top",
        title: "Berhasil",
        description: "Logout berhasil.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      cookies.remove("ci_session", {
        path: "/",
        domain:
          process.env.NODE_ENV === "development"
            ? "localhost"
            : "mini-project-batch3.vercel.app",
      });
      localStorage.clear();
      setTimeout(() => {
        logout();
        router.push("/");
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal
      isOpen={isLogoutModalOpen}
      onClose={onLogoutModalClose}
      blockScrollOnMount={false}>
      <ModalOverlay />
      <ModalContent
        alignSelf="center"
        maxWidth={{
          base: "290px",
          md: "448px",
        }}>
        <ModalHeader textAlign="center" color="#BA181B">
          Logout
        </ModalHeader>

        <ModalCloseButton />
        <ModalBody textAlign="center">
          Apakah Anda yakin ingin keluar?
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
            onClick={() => setIsLogoutModalOpen((prevState) => !prevState)}>
            Batalkan
          </Button>
          <Button
            onClick={handleLogout}
            bg="#BA181B"
            size="lg"
            _hover={{ bg: "#9e2427" }}
            color="#fff"
            _active={{
              bg: "#9e2427",
              transform: "scale(0.98)",
            }}
            w={175}>
            Keluar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LogoutModal;
