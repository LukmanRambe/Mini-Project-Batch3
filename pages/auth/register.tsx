import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../store/useStore'
import Head from 'next/head'
import { Grid } from '@chakra-ui/react'
import LayoutAuth from '../../components/auth/layout'
import FormRegister from '../../components/auth/Register'

const Register = () => {
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
				<title>Daftar</title>
			</Head>

			<Grid bg='#F8F8FB' templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
				<LayoutAuth />
				<FormRegister />
			</Grid>
		</>
	)
}

export default Register
