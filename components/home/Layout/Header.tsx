// Styles
import {
	Container,
	Flex,
	Stack,
	Box,
	Heading,
	Text,
	useToast
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useCountDoneTodo } from '../../../hooks/remote/useCountDoneTodo'
import { useCountOverdueTodo } from '../../../hooks/remote/useCountOverdueTodo'
import { useCountTodo } from '../../../hooks/remote/useCountTodo'

const Header = () => {
	const toast = useToast()
	const { countTodo, errorCountTodo } = useCountTodo()
	const { countDoneTodo, errorCountDoneTodo } = useCountDoneTodo()
	const { countOverdueTodo, errorCountOverdueTodo } = useCountOverdueTodo()
	const [name, setName] = useState<string | null>('')

	if (errorCountTodo) {
		toast({
			title: errorCountTodo.message,
			status: 'error',
			duration: 9000,
			isClosable: true
		})
	}

	if (errorCountDoneTodo) {
		toast({
			title: errorCountDoneTodo.message,
			status: 'error',
			duration: 9000,
			isClosable: true
		})
	}

	if (errorCountOverdueTodo) {
		toast({
			title: errorCountOverdueTodo.message,
			status: 'error',
			duration: 9000,
			isClosable: true
		})
	}

	useEffect(() => {
		const username = localStorage.getItem('name')

		setName(username)
	}, [])

	return (
		<Box borderBottom='1px' borderBottomColor='#EFEFEF' p='40px' pb='60px'>
			<Flex
				justify={{
					base: 'center',
					md: 'center',
					lg: 'space-between'
				}}
				flexWrap='wrap'
				gap={4}>
				<Flex gap='15px' align='center'>
					{/* START: Profile Picture */}
					<Box
						color='#ffffff'
						bg='#718096'
						borderRadius='100%'
						w='82px'
						h='82px'
						display='flex'
						alignItems='center'
						justifyContent='center'>
						<Heading fontSize='48px' fontWeight='700'>
							{name && name[0]}
						</Heading>
					</Box>
					{/* END: Profile Picture */}

					{/* START: Username & Typography */}
					<Box>
						<Heading fontSize='24px' fontWeight='700'>
							{name && name}
						</Heading>
						<Text fontSize='18px' color='#737373'>
							Ayo lebih produktif 💪
						</Text>
					</Box>
					{/* END: Username & Typography */}
				</Flex>

				{/* START: Todos Counter */}
				<Stack
					w={{
						base: '100%',
						lg: 'inherit',
						sm: '100%'
					}}
					direction={['column', 'row', 'row']}
					gap={{
						base: 5,
						lg: 10
					}}
					mt={{
						base: 10,
						md: 10,
						lg: 0
					}}>
					{/* START: Todo Counter */}
					<Container
						display='flex'
						alignItems='center'
						justifyContent='center'
						color='#ffffff'
						bgImage='https://mini-project-vocasia.vercel.app/dashboard/todo-stats-bg/todo-counter-bg.svg'
						borderRadius={{
							base: '12px',
							lg: '6px'
						}}
						w={{
							base: '100%',
							lg: '140px',
							sm: '100%'
						}}
						h={{
							base: '100%',
							lg: '77px',
							sm: '90px'
						}}
						bgSize='cover'
						bgRepeat='no-repeat'>
						<Heading fontSize='47px' fontWeight='400' mr='8px'>
							{countTodo?.jumlah_data}
						</Heading>
						<Text fontSize='12px'>
							To Do <br /> Task Today
						</Text>
					</Container>
					{/* START: Todo Counter */}

					{/* START: Done Todo Counter */}
					<Container
						display='flex'
						alignItems='center'
						justifyContent='center'
						color='#ffffff'
						bgImage='https://mini-project-vocasia.vercel.app/dashboard/todo-stats-bg/done-counter-bg.svg'
						borderRadius={{
							base: '12px',
							lg: '6px'
						}}
						w={{
							base: '100%',
							lg: '140px',
							sm: '100%'
						}}
						h={{
							base: '100%',
							lg: '77px',
							sm: '90px'
						}}
						bgSize='cover'
						bgRepeat='no-repeat'>
						<Heading fontSize='47px' fontWeight='400' mr='8px'>
							{countDoneTodo?.jumlah_data}
						</Heading>
						<Text fontSize='12px'>Done Task</Text>
					</Container>
					{/* END: Done Todo Counter */}

					{/* START: Overdue Todo Counter */}
					<Container
						display='flex'
						alignItems='center'
						justifyContent='center'
						color='#ffffff'
						bgImage='https://mini-project-vocasia.vercel.app/dashboard/todo-stats-bg/overdue-counter-bg.svg'
						borderRadius={{
							base: '12px',
							lg: '6px'
						}}
						w={{
							base: '100%',
							lg: '140px',
							sm: '100%'
						}}
						h={{
							base: '100%',
							lg: '77px',
							sm: '90px'
						}}
						bgSize='cover'
						bgRepeat='no-repeat'>
						<Heading fontSize='47px' fontWeight='400' mr='8px'>
							{countOverdueTodo?.jumlah_data}
						</Heading>
						<Text fontSize='12px'>
							Overdue <br /> Task
						</Text>
					</Container>
					{/* END: Overdue Todo Counter */}
				</Stack>
				{/* END: Todos Counter */}
			</Flex>
		</Box>
	)
}

export default Header
