import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Components
import LogoutModal from '../Modal/LogoutModal'

// Styles
import { Flex, Text, Box, Image, Button } from '@chakra-ui/react'

const Sidebar = () => {
	const router = useRouter()
	const pathName = router.asPath

	const [activeTab, setActiveTab] = useState(pathName)
	const [tabName, setTabName] = useState(pathName)
	const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

	const handleClickActiveTab = (event: React.MouseEvent<HTMLDivElement>) => {
		if (pathName === event.currentTarget.id) setTabName(event.currentTarget.id)
	}

	useEffect(() => {
		if (pathName === tabName) setActiveTab(tabName)
	}, [pathName, tabName])

	return (
		<Box
			w='238px'
			bg='#F8F8FB'
			borderRight='1px'
			borderRightColor='#CCCCCC'
			py='30px'>
			{/* START: Logo */}
			<Box mb='56px' px='30px'>
				<Image
					src='https://mini-project-vocasia.vercel.app/image/logo.svg'
					width='147px'
					height='59px'
					alt='Logo Vocasia'
				/>
			</Box>
			{/* END: Logo */}

			{/* START: Sidebar Tabs */}
			<Flex direction='column' h='1024px' justify='space-between'>
				<Box display='flex' flexDirection='column' px='9px' gap='35px'>
					{/* START: To Do Tab */}
					<Link href='./home'>
						<Box
							id='/home'
							display='flex'
							alignItems='center'
							px='18px'
							borderLeft={`3px solid ${
								activeTab === '/home' ? '#BA181B' : 'transparent'
							}`}
							_hover={{
								cursor: 'pointer',
								borderLeftColor: '#BA181B'
							}}
							onClick={event => handleClickActiveTab(event)}>
							<Image
								src='https://mini-project-vocasia.vercel.app/icon/todo.svg'
								width='22px'
								height='22px'
								alt='To Do Icon'
							/>
							<Text
								pl='14px'
								fontSize='14px'
								letterSpacing='0.025em'
								fontWeight='500'
								color={activeTab === '/home' ? '#000000' : '#6A686A'}
								_hover={{ color: '#000000' }}>
								To Do
							</Text>
						</Box>
					</Link>
					{/* END: To Do Tab */}

					{/* START: Done Tab */}
					<Link href='./done'>
						<Box
							id='/done'
							display='flex'
							alignItems='center'
							px='18px'
							borderLeft={`3px solid ${
								activeTab === '/done' ? '#BA181B' : 'transparent'
							}`}
							_hover={{
								cursor: 'pointer',
								borderLeftColor: '#BA181B'
							}}
							onClick={event => handleClickActiveTab(event)}>
							<Image
								src='https://mini-project-vocasia.vercel.app/icon/done.svg'
								width='22px'
								height='22px'
								alt='Done Icon'
							/>
							<Text
								pl='14px'
								fontSize='14px'
								letterSpacing='0.025em'
								fontWeight='500'
								color={activeTab === '/done' ? '#000000' : '#6A686A'}
								_hover={{ color: '#000000' }}>
								Done
							</Text>
						</Box>
					</Link>
					{/* END: Done Tab */}

					{/* START: Overdue Tab */}
					<Link href='./overdue'>
						<Box
							id='/overdue'
							display='flex'
							alignItems='center'
							px='18px'
							borderLeft={`3px solid ${
								activeTab === '/overdue' ? '#BA181B' : 'transparent'
							}`}
							_hover={{ cursor: 'pointer', borderLeftColor: '#BA181B' }}
							onClick={event => handleClickActiveTab(event)}>
							<Image
								src='https://mini-project-vocasia.vercel.app/icon/overdue.svg'
								width='22px'
								height='22px'
								alt='Overdue Icon'
							/>
							<Text
								pl='14px'
								fontSize='14px'
								letterSpacing='0.025em'
								fontWeight='500'
								color={activeTab === '/overdue' ? '#000000' : '#6A686A'}
								_hover={{ color: '#000000' }}>
								Overdue
							</Text>
						</Box>
					</Link>
					{/* END: Overdue Tab */}
				</Box>

				{/* START: Logout Tab */}
				{/* <Link href='./logout'></Link> */}

				<Box
					role='group'
					display='flex'
					alignItems='center'
					p='30px'
					_hover={{ cursor: 'pointer' }}>
					<Button
						background='transparent'
						onClick={() => setIsLogoutModalOpen(true)}
						_hover={{ background: 'transparent' }}
						_active={{ background: 'transparent' }}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='#BA181B'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path d='M13 12h9m0 0l-3.333-4M22 12l-3.333 4'></path>
							<path d='M14 7V5.174a2 2 0 0 0-2.166-1.993l-8 .666A2 2 0 0 0 2 5.84v12.32a2 2 0 0 0 1.834 1.993l8 .667A2 2 0 0 0 14 18.826V17'></path>
						</svg>
						<Text
							pl='14px'
							fontSize='18px'
							fontWeight='500'
							letterSpacing='0.025em'
							color='#BA181B'
							_groupHover={{ color: '#9e2427' }}>
							Logout
						</Text>
					</Button>
				</Box>
				{/* END: Logout Tab */}
			</Flex>
			{/* END: Sidebar Tabs */}
			<LogoutModal
				isLogoutModalOpen={isLogoutModalOpen}
				setIsLogoutModalOpen={setIsLogoutModalOpen}
				onLogoutModalClose={() => setIsLogoutModalOpen(prev => !prev)}
			/>
		</Box>
	)
}

export default Sidebar
