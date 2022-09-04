import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Grid } from '@chakra-ui/layout'
import Router, { useRouter } from 'next/router'

import LayoutAuth from '../../../../components/auth/layout'
import ResetPassword from '../../../../components/auth/reset_password/index'
// import authPage from "../../../middleware/authorizationPage";

// export async function getServerSideProps(ctx) {
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

const Index = () => {
	const router = useRouter()
	const tokenSlug = router.query.slug
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
					<title>Reset Password</title>
				</Head>

				<Grid bg='#F8F8FB' templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
					<LayoutAuth />
					<ResetPassword slug={tokenSlug} />
				</Grid>
			</>
		)
	)
}

export default Index
