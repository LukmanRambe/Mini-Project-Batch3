import { Grid, GridItem } from '@chakra-ui/react'
import Layout from '../../components/home/Layout'
import Todos from '../../components/home/Todos'
import CalendarClock from '../../components/home/Layout/Calendar'
const Home = () => {
	return (
		<Layout title='Mini Project Vocasia - Dashboard'>
			<Grid templateColumns='repeat(12, 1fr)' gap={4}>
				<GridItem colSpan={9}>
					<Todos />
				</GridItem>
				<GridItem colSpan={3}>
					<CalendarClock />
				</GridItem>
			</Grid>
		</Layout>
	)
}

export default Home
