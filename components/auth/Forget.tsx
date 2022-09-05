import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import {
	Button,
	GridItem,
	VStack,
	Box,
	Heading,
	Text,
	Input,
	Flex,
	Link,
	Container,
	Center,
	FormControl,
	FormErrorMessage,
	FormLabel,
	useToast
} from '@chakra-ui/react'
import NextLink from 'next/link'

const ForgetFrom = () => {
	const router = useRouter()
	const toast = useToast()

	const [email, setEmail] = useState<string>('')
	const [isError, setIsError] = useState(false)
	const handleEmailChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setEmail(event.target.value)
	}

	const handleEmailSubmit = async (
		event: React.SyntheticEvent<HTMLFormElement>
	) => {
		event.preventDefault()

		const data = JSON.stringify({ email })

		if (email.trim() === '') {
			setIsError(true)
		} else {
			if (email) {
				await axios
					.post('https://nouky.xyz/b3/forgot_password', data, {
						headers: {
							'Content-Type': 'application/json; charset=utf-8'
						}
					})
					.then(result => {
						if (result.data.code === 200) {
							toast({
								position: 'top',
								title: 'Berhasil',
								description: result.data.message,
								status: 'success',
								duration: 3000,
								isClosable: true
							})

							setTimeout(() => {
								router.push('/')
							}, 2500)
						}
					})
					.catch(err => {
						if (err.code === 'ECONNABORTED') {
							toast({
								position: 'top',
								title: 'Gagal',
								description:
									'Tidak dapat menjangkau Server, periksa koneksi Anda dan ulangi beberapa saat lagi.',
								status: 'error',
								duration: 3000,
								isClosable: true
							})
						} else if (err.response) {
							toast({
								position: 'top',
								title: 'Gagal',
								description: err.response.data.messages.error,
								status: 'error',
								duration: 3000,
								isClosable: true
							})
						}
					})
			}
		}
	}

	useEffect(() => {
		if (email !== '') {
			setIsError(false)
		}
	}, [email])

	return (
		<GridItem>
			<VStack
				w='full'
				minH='100vh'
				display='flex'
				justifyContent='center'
				alignItems='center'>
				<Container>
					<Box textAlign='center' mb={7}>
						<Heading as='h1' size='md' mt={2}>
							Lupa Password
						</Heading>
					</Box>

					<form method='POST' onSubmit={event => handleEmailSubmit(event)}>
						<FormControl isInvalid={isError === true} isRequired>
							<Box textAlign='center' mb={7}>
								<Text fontSize='sm' color='#737373' mt={3}>
									Masukan email yang telah terdaftar,
								</Text>
								<Text fontSize='sm' color='#737373'>
									kami akan mengirim link untuk mengembalikan akunmu
								</Text>
							</Box>
							<FormLabel>Email</FormLabel>
							<Input
								type='email'
								py='13px'
								px='20px'
								borderRadius='12px'
								bg='white'
								placeholder='Masukkan Email'
								value={email}
								onChange={e => handleEmailChange(e)}
								autoFocus={true}
							/>
							{isError && (
								<FormErrorMessage>Email tidak boleh kosong!</FormErrorMessage>
							)}

							<Button
								type='submit'
								mt={7}
								w='full'
								size='md'
								color='#fff'
								bg='#BA181B'
								_hover={{ bg: '#9e2427' }}
								_active={{
									bg: '#9e2427',
									transform: 'scale(0.98)'
								}}>
								Kirim Email
							</Button>
						</FormControl>
					</form>

					<Center>
						<Flex mt='20px'>
							<NextLink href='/' passHref>
								<Link color='primary' fontWeight='bold' ml='1'>
									Kembali
								</Link>
							</NextLink>
						</Flex>
					</Center>
				</Container>
			</VStack>
		</GridItem>
	)
}

export default ForgetFrom
