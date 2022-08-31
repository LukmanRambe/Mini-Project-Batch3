// Styles
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button
} from '@chakra-ui/react'

import { IDeleteModal } from '../../../ts/interface'
import Link from 'next/link'

const DeleteModal = ({
	isDeleteModalOpen,
	setIsDeleteModalOpen,
	onDeleteModalClose
}: IDeleteModal) => {
	return (
		<Modal
			isOpen={isDeleteModalOpen}
			onClose={onDeleteModalClose}
			blockScrollOnMount={false}>
			<ModalOverlay />
			<ModalContent alignSelf='center' padding='5px'>
				<ModalHeader textAlign='center' color='#BA181B'>
					Hapus Task
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody textAlign='center'>
					Apakah Anda yakin ingin menghapus task?
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
						onClick={() => setIsDeleteModalOpen(prevState => !prevState)}>
						Batal
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
							Hapus
						</Button>
					</Link>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default DeleteModal
