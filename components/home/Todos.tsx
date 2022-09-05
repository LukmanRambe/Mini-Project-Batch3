import { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Heading, Text, Button, useToast } from '@chakra-ui/react'
import styles from '../../styles/Home.module.css'
import TodoList from '../../components/home/TodoList'
import AddModal from './Modal/AddModal'
import { useTodo } from '../../hooks/remote/useTodo'

const Todos = ({ Header }: any) => {
	const router = useRouter()
	const toast = useToast()
	const pathName = router.asPath
	const { todos, errorTodos } = useTodo(
		pathName === '/home'
			? 'show_all'
			: pathName === '/done'
			? 'show_done'
			: pathName === '/overdue'
			? 'show_overdue'
			: ''
	)
	const [visibleAddModal, setVisibleAddModal] = useState(false)

	if (errorTodos) {
		toast({
			title: errorTodos.message,
			status: 'error',
			duration: 9000,
			isClosable: true
		})
	}

	return (
		<Box
			flex='3'
			m={{ base: '0px', xl: '20px' }}
			border='1px'
			w='full'
			borderColor='gray.200'>
			<Flex
				px='28px'
				align='center'
				h='5rem'
				w='100%'
				justify='space-between'
				borderBottom='1px'
				borderColor='gray.200'>
				<Heading as='h2' size='md'>
					{Header}
				</Heading>
				{pathName === '/home' ? (
					<Button onClick={() => setVisibleAddModal(true)}>Tambah</Button>
				) : (
					''
				)}
			</Flex>
			<Flex
				direction='column'
				overflowY='auto'
				py='5px'
				px='28px'
				h={{ base: '500px', xl: '780px' }}
				className={styles.todo}>
				{/* Todos Done */}
				{todos?.data?.length != 0 ? (
					<TodoList todos={todos?.data} />
				) : (
					<Text textAlign='center' my='25px'>
						Belum ada Tugas untuk dilakukan
					</Text>
				)}
			</Flex>
			{/* add Todos */}
			<AddModal
				isOpen={visibleAddModal}
				onClose={() => setVisibleAddModal(prev => !prev)}
			/>
		</Box>
	)
}

export default Todos
