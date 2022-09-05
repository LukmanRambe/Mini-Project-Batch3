import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../../../store/useStore'
import Head from 'next/head'
import { Grid } from '@chakra-ui/layout'
import LayoutAuth from '../../../../components/auth/layout'
import ResetPassword from '../../../../components/auth/reset_password/index'

const Index = () => {
	const router = useRouter()
	const tokenSlug = router.query.slug
	const { isAuth } = useStore()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const xtoken = localStorage.getItem('xtoken')

		if (isAuth) {
			if (xtoken) {
				router.push('/home')
			}
		} else {
			setLoading(false)
		}
	}, [isAuth])

	return loading ? (
		<div></div>
	) : (
		<>
			<Head>
				<title>Reset Password</title>
			</Head>

			<Grid bg='#F8F8FB' templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
				<LayoutAuth />
				<ResetPassword slug={tokenSlug} />
			</Grid>
		</>
	)
}

export default Index
