import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../store/useStore'
import Head from 'next/head'
import { Grid } from '@chakra-ui/react'
import LayoutAuth from '../../components/auth/layout'
import ForgetFrom from '../../components/auth/Forget'

const Forget = () => {
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
				<title>Lupa Password</title>
			</Head>

			<Grid bg='#F8F8FB' templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
				<LayoutAuth />
				<ForgetFrom />
			</Grid>
		</>
	)
}

export default Forget
