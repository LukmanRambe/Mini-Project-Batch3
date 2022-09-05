import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../store/useStore'
import Head from 'next/head'
import { Grid } from '@chakra-ui/react'
import LayoutAuth from '../../components/auth/layout'
import Login from '../../components/auth/Login'

const Index = (): any => {
	const router = useRouter()
	const { isAuth } = useStore()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (isAuth) {
			router.push('/home')
		} else {
			setLoading(false)
		}
	}, [isAuth])

	return loading ? (
		<div></div>
	) : (
		<>
			<Head>
				<title>Masuk</title>
			</Head>

			<Grid bg='#F8F8FB' templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
				<LayoutAuth />
				<Login />
			</Grid>
		</>
	)
}

export default Index
