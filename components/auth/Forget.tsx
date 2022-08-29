import React, { useState } from 'react'
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
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	CloseButton
} from '@chakra-ui/react'
import NextLink from 'next/link'

const ForgetFrom = () => {
	const router = useRouter()

	const [email, setEmail] = useState<string>('')
	const [message, setMessage] = useState<string | null>(null)
	const [responseCode, setResponseCode] = useState<number | null>(null)

	const handleEmailChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setEmail(event.target.value)
	}

	const handleClose = (): void => {
		setMessage('')
		setResponseCode(null)
	}

	const handleEmailSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (email.trim() === '') {
			setMessage('Email Harus Diisi!')
		} else {
			fetchAPI('https://nouky.xyz/b3/forgot_password')
		}
	}

	const fetchAPI = async (url: string) => {
		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify({ email })
			})

			const responseData = await response.json()

			if (responseData.code === 200) {
				setResponseCode(responseData.code)
				setMessage(responseData.message)

				setTimeout(() => {
					router.push('/')
					setResponseCode(null)
					setMessage('')
				}, 3000)
			} else {
				setResponseCode(responseData.status)
				setMessage(responseData.messages.error)
			}
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<GridItem>
			{message && (
				<Alert
					status={responseCode === 200 ? 'success' : 'error'}
					position='absolute'
					w='auto'
					top='2'
					left='50%'
					transform='translateX(-50%)'
					borderRadius='md'
					color='white'
					bg={responseCode === 200 ? 'green.400' : 'red.400'}>
					<AlertIcon color='white' />
					<Box pr={10} pl={2}>
						<AlertTitle>
							{responseCode === 200 ? 'Berhasil' : 'Gagal'}
						</AlertTitle>
						<AlertDescription>{message}</AlertDescription>
					</Box>
					<CloseButton
						alignSelf='flex-start'
						position='absolute'
						right={2}
						top={2}
						onClick={handleClose}
					/>
				</Alert>
			)}

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
						<FormControl>
							<Box textAlign='center' mb={7}>
								<Text fontSize='sm' color='#737373' mt={3}>
									Masukan email yang telah terdaftar,
								</Text>
								<Text fontSize='sm' color='#737373'>
									kami akan mengirim link untuk mengembalikan akunmu
								</Text>
							</Box>
							<Flex gap={1} marginTop={4} marginBottom={2}>
								<Text fontSize='md'>Email </Text>
								<Text fontSize='md' color='red'>
									{' '}
									*
								</Text>
							</Flex>
							<Input
								type='text'
								py='13px'
								px='20px'
								borderRadius='12px'
								bg='white'
								placeholder='Masukkan Email'
								value={email}
								onChange={e => handleEmailChange(e)}
								autoFocus={true}
							/>

							<Button
								type='submit'
								size='md'
								bg='#BA181B'
								_hover={{ bg: '#9e2427' }}
								color='#fff'
								mt={7}
								w='full'
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
