import { useState, useEffect } from 'react'
import { useStore } from '../../../store/useStore'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Sidebar from './Sidebar'
import Header from './Header'
import { ILayout } from '../../../ts/interface'

// Styles
import { Box } from '@chakra-ui/react'

const Layout = ({ children, title }: ILayout): any => {
	const router = useRouter()
	const { isAuth } = useStore()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (isAuth === false) {
			router.push('/')
		} else {
			setLoading(false)
		}
	}, [isAuth])

	return loading ? (
		<div></div>
	) : (
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
