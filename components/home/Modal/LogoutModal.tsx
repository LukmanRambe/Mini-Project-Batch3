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
	useToast
} from '@chakra-ui/react'

import { ILogoutModal } from '../../../ts/interface'
import { useRouter } from 'next/router'

const LogoutModal = ({
	isLogoutModalOpen,
	setIsLogoutModalOpen,
	onLogoutModalClose
}: ILogoutModal) => {
	const router = useRouter()
	const toast = useToast()

	const handleLogout = async () => {
		setIsLogoutModalOpen(false)
		toast({
			position: 'top',
			title: 'Berhasil',
			description: 'Logout berhasil.',
			status: 'success',
			duration: 1000,
			isClosable: true
		})
		localStorage.clear()
		setTimeout(() => {
			router.push('/')
		}, 1000)
	}
	return (
		<Modal
			isOpen={isLogoutModalOpen}
			onClose={onLogoutModalClose}
			blockScrollOnMount={false}>
			<ModalOverlay />

			<ModalContent alignSelf='center' padding='5px'>
				<ModalHeader textAlign='center' color='#BA181B'>
					Logout
				</ModalHeader>

				<ModalCloseButton />
				<ModalBody textAlign='center'>
					Apakah Anda yakin ingin keluar?
				</ModalBody>
				<ModalFooter justifyContent='center' pt={10} pb={5}>
					<Button
						bg='transparent'
						size='lg'
						_hover={{ color: '#9e2427' }}
						color='#BA181B'
						_active={{
							bg: 'transparent',
							transform: 'scale(0.98)'
						}}
						w={175}
						onClick={() => setIsLogoutModalOpen(prevState => !prevState)}>
						Batalkan
					</Button>
					<Button
						onClick={handleLogout}
						bg='#BA181B'
						size='lg'
						_hover={{ bg: '#9e2427' }}
						color='#fff'
						_active={{
							bg: '#9e2427',
							transform: 'scale(0.98)'
						}}
						w={175}>
						Keluar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default LogoutModal
