import { Flex } from '@chakra-ui/react'
import Layout from '../../components/home/Layout'
import Todos from '../../components/home/Todos'
import CalendarClock from '../../components/home/Layout/CalendarClock'

const Home = () => {
	return (
		<Layout title='Mini Project Vocasia - Dashboard'>
			<Flex
				direction={{ base: 'column', xl: 'row' }}
				p={{ base: '20px', xl: '0px' }}>
				<Todos
					Header='To Do Today'
					todo_status='todo'
					overdue={true || false}
				/>
				<CalendarClock />
			</Flex>
		</Layout>
	)
}

export default Home
