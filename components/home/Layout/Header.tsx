// Styles
import { Container, Flex, HStack, Box, Heading, Text } from '@chakra-ui/react'

const Header = () => {
	return (
		<Box borderBottom='1px' borderBottomColor='#EFEFEF' p='40px' pb='60px'>
			<Flex justify='space-between'>
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
							J
						</Heading>
					</Box>
					{/* END: Profile Picture */}

					{/* START: Username & Typography */}
					<Box>
						<Heading fontSize='24px' fontWeight='700'>
							John Doe
						</Heading>
						<Text fontSize='18px' color='#737373'>
							Ayo lebih produktif
						</Text>
					</Box>
					{/* END: Username & Typography */}
				</Flex>

				{/* START: Todos Counter */}
				<HStack direction='row' gap='60px'>
					{/* START: Todo Counter */}
					<Container
						display='flex'
						alignItems='center'
						justifyContent='center'
						color='#ffffff'
						bgImage='https://mini-project-vocasia.vercel.app/dashboard/todo-stats-bg/todo-counter-bg.svg'
						borderRadius='6px'
						w='140px'
						h='87px'>
						<Heading fontSize='47px' fontWeight='400' mr='8px'>
							1
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
						borderRadius='6px'
						w='140px'
						h='87px'>
						<Heading fontSize='47px' fontWeight='400' mr='8px'>
							10
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
						borderRadius='6px'
						w='140px'
						h='87px'>
						<Heading fontSize='47px' fontWeight='400' mr='8px'>
							8
						</Heading>
						<Text fontSize='12px'>
							Overdue <br /> Task
						</Text>
					</Container>
					{/* END: Overdue Todo Counter */}
				</HStack>
				{/* END: Todos Counter */}
			</Flex>
		</Box>
	)
}

export default Header
