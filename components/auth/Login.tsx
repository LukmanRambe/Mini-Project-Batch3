import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import Router from 'next/router'
import useSWR from 'swr'
import {
	Button,
	GridItem,
	VStack,
	Box,
	Heading,
	Text,
	Input,
	Flex,
	InputRightElement,
	InputGroup,
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
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
// import { IGetMeResponse, ICurentUser } from "../../ts/interface";

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [errorPassword, setErrorPassword] = useState('')
	const [errorEmail, setErrorEmail] = useState('')
	// code status Success login
	const [code, setCode] = useState<number>(0)
	const [show, setShow] = useState<boolean>(false)

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	function validatePassword(): boolean {
		var validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
		if (validate.test(password) === false) {
			setErrorPassword(
				'Password minimal 8 Character, Satu Huruf Besar dan Angka'
			)
			return false
		} else {
			setErrorPassword('')
			return true
		}
	}

	function validateEmail(): boolean {
		if (email === '') {
			setErrorEmail('Email Harus Diisi')
			return false
		} else {
			setErrorEmail('')
			return true
		}
	}
	// close Alert
	const onClose = () => {
		setError('')
		setErrorPassword('')
		setErrorEmail('')
		setCode(0)
	}

	const fetcher = async () => {
		fetch('https://nouky.xyz/b3/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
			.then(res => res.json())
			.then(data => {
				let dataToken = JSON.stringify(data.data.token)
				if (data.code === 200) {
					localStorage.setItem('xtoken', JSON.parse(dataToken))
					setCode(data.code)
					setTimeout(() => {
						Router.push('/home')
					}, 5000)
				} else {
					setError(data.messages.error)
				}
			})
	}

	const handleMasuk = (event: React.FormEvent) => {
		event.preventDefault()
		if (validateEmail()) {
			if (validatePassword()) {
				// fetching API and Login
				fetcher()
			}
		}
	}

	// show type password
	const handleShow = () => {
		setShow(!show)
	}

	return (
		<GridItem>
			<VStack
				w='full'
				minH='100vh'
				display='flex'
				justifyContent='center'
				alignItems='center'>
				<Container>
					{/* Alert */}
					{error || errorEmail || errorPassword ? (
						<Alert
							status='error'
							position='absolute'
							w='auto'
							top='2'
							left='50%'
							transform='translateX(-50%)'
							borderRadius='md'
							color='white'
							bg='red.400'>
							<AlertIcon color='white' />
							<Box pr={10} pl={2}>
								<AlertTitle>Error!</AlertTitle>
								<AlertDescription>
									{error || errorEmail || errorPassword}
								</AlertDescription>
							</Box>
							<CloseButton
								alignSelf='flex-start'
								position='absolute'
								right={2}
								top={2}
								onClick={onClose}
							/>
						</Alert>
					) : code === 200 ? (
						<Alert
							status='success'
							position='absolute'
							w='auto'
							top='2'
							left='50%'
							transform='translateX(-50%)'
							borderRadius='md'
							color='white'
							bg='green.400'>
							<AlertIcon color='white' />
							<Box pr={10} pl={2}>
								<AlertTitle>Login Berhasil!</AlertTitle>
								<AlertDescription>
									Kamu Akan Dialihkan Ke Dashboard
								</AlertDescription>
							</Box>
							<CloseButton
								alignSelf='flex-start'
								position='absolute'
								right={2}
								top={2}
								onClick={onClose}
							/>
						</Alert>
					) : (
						''
					)}
					<Box textAlign='center' mb={7}>
						<Heading as='h1' size='md' mt={2}>
							Masuk
						</Heading>
					</Box>
					<form onSubmit={e => handleMasuk(e)}>
						<FormControl isRequired>
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
								onChange={e => handleEmailChange(e)}
								placeholder='Masukkan Email'
								required
							/>
							<Flex gap={1} marginTop={4} marginBottom={2}>
								<Text fontSize='md'>Password </Text>
								<Text fontSize='md' color='red'>
									{' '}
									*
								</Text>
							</Flex>
							<InputGroup size='md'>
								<Input
									type={show ? 'text' : 'password'}
									py='13px'
									px='20px'
									borderRadius='12px'
									bg='white'
									placeholder='Password'
									onChange={e => handlePassword(e)}
									required
								/>
								<InputRightElement>
									<Button
										h='full'
										bg='transparent'
										size='md'
										borderRightRadius='12px'
										borderLeftRadius='0'
										onClick={handleShow}>
										{show ? <ViewIcon /> : <ViewOffIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>
							<Flex justify='flex-end' mt='15px'>
								<NextLink href='/auth/forget' passHref>
									<Link color='primary'>Lupa Password?</Link>
								</NextLink>
							</Flex>
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
								Masuk
							</Button>
						</FormControl>
					</form>
					<Center>
						<Flex mt='20px'>
							<Text color='#737373' fontSize='sm'>
								Belum Punya Akun?
								<NextLink href='/auth/register' passHref>
									<Link color='primary' fontWeight='bold' ml='1'>
										Daftar
									</Link>
								</NextLink>
							</Text>
						</Flex>
					</Center>
				</Container>
			</VStack>
		</GridItem>
	)
}

export default Login
