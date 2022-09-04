import React from 'react'
import { Flex } from '@chakra-ui/react'

import Layout from '../../components/home/Layout'
import Todos from '../../components/home/Todos'
import CalendarClock from '../../components/home/Layout/CalendarClock'
// import { unAuthPage } from "../middleware/authorizationPage";

// export async function getServerSideProps(ctx: any) {
//   const token = ctx.req?.cookies?.ci_session;
//   if (!token) {
//     return ctx.res
//       .writeHead(302, {
//         location: "/",
//       })
//       .end();
//   }
//   return {
//     props: {},
//   };
// }

const Done = () => {
	return (
		<Layout title='Mini Project Vocasia - Done'>
			<Flex
				direction={{ base: 'column', xl: 'row' }}
				p={{ base: '20px', xl: '0px' }}>
				<Todos Header='Done' todo_status='done' overdue={false} />
				<CalendarClock />
			</Flex>
		</Layout>
	)
}

export default Done
