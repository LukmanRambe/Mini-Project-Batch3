import Image from 'next/image'
import { GridItem, VStack, Box, Heading, Text } from '@chakra-ui/react'
import Logo from '../../assets/logo.png'
import Book from '../../assets/book.png'

const LayoutAuth = () => {
	return (
		<GridItem display={{ base: 'none', md: 'block' }}>
			<VStack
				bg='#fff'
				w='full'
				minH='100vh'
				display='flex'
				justifyContent='center'
				px={{ base: 20, lg: 114 }}
				alignItems='center'
				borderTopRightRadius={40}
				borderBottomRightRadius={40}
				py={10}>
				<Box>
					<Box textAlign='center'>
						<Image
							src={Logo}
							width={147}
							height={59}
							objectFit='cover'
							alt='logo vocasia'
						/>
					</Box>
					<Box textAlign='center'>
						<Image src={Book} width={580} height={450} alt='vocasia' />
					</Box>
					<Heading as='h1' size='md' mt={2}>
						Atur Jadwalmu Jadi Produktif 👋
					</Heading>
					<Text fontSize='md' color='#737373' mt={2}>
						Bantu kamu mengatur jadwal kegiatanmu sehari-hari dengan mudah.
						Jadikah harimu lebih produktif dengan menulis setiap kegiatanmu yang
						perlu diselesaikan
					</Text>
				</Box>
			</VStack>
		</GridItem>
	)
}

export default LayoutAuth
