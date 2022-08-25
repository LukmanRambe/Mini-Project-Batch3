import { useState } from 'react'

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
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Image
} from '@chakra-ui/react'

import { ILogoutModal } from '../../../ts/interface'
import Link from 'next/link'

const LogoutModal = ({
	isLogoutModalOpen,
	setIsLogoutModalOpen,
	onLogoutModalClose
}: ILogoutModal) => {
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
					<Link href='/'>
						<Button
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
					</Link>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default LogoutModal
