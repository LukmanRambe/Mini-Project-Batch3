import Head from 'next/head'
import Sidebar from './Sidebar'
import Header from './Header'
import Calendar from './Calendar'

// Styles
import { Box } from '@chakra-ui/react'
import { ILayout } from '../../../ts/interface'

const Layout = ({ children, title }: ILayout) => {
	return (
		<Box bg='white' color='black' display='flex' maxW='100%' minH='1024px'>
			<Head>
				<title>{title}</title>
			</Head>
			<Sidebar />
			<Box w='100%'>
				<Header />
				{children}
			</Box>
		</Box>
	)
}

export default Layout
