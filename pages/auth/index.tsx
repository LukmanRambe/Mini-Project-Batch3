import Head from 'next/head'
import { Grid } from '@chakra-ui/react'

import LayoutAuth from '../../components/auth/layout'
import Login from '../../components/auth/Login'
// import authPage from "../middleware/authorizationPage";
import { useState, useEffect } from 'react'
import Router from 'next/router'
import { useStore } from '../../store/useStore'

// export async function getServerSideProps(ctx: any) {
//   const token = ctx.req?.cookies?.ci_session;
//   if (token) {
//     return ctx.res
//       .writeHead(302, {
//         location: "/home",
//       })
//       .end();
//   }
//   return {
//     props: {},
//   };
// }

const Index = (): any => {
	const { isAuth } = useStore()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (isAuth) {
			Router.push('/home')
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
