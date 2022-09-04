import React from 'react'
import Head from 'next/head'
import { Grid } from '@chakra-ui/react'

import LayoutAuth from '../../components/auth/layout'
import FormRegister from '../../components/auth/Register'
// import authPage from "../middleware/authorizationPage";
import { useState, useEffect } from 'react'
import Router from 'next/router'

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

const Register = () => {
	const [isHaveToken, setIsHaveToken] = useState(false)

	useEffect(() => {
		setIsHaveToken(localStorage.getItem('xtoken') !== null)

		if (isHaveToken) {
			Router.push('/home')
		}
	}, [isHaveToken])

	return (
		isHaveToken === false && (
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
	)
}

export default Register
