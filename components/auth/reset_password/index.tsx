import { useState } from 'react'
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
	Container,
	FormControl,
	InputRightElement,
	InputGroup,
	useToast,
	Spinner
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

interface Props {
	slug: any
}

const ResetPassword: React.FC<Props> = ({ slug }: Props) => {
	const toast = useToast()
	const router = useRouter()
	// stateInput
	const [password, setPassword] = useState('')
	const [password_confirmation, setPasswordConfirmation] = useState('')

	// error
	const [errorPassword, setErrorPassword] = useState('')
	const [errorPasswordConfirm, setErrorPasswordConfirm] = useState('')

	// alert
	const [loading, setLoading] = useState(false)

	const handleSubmitResetPassword = async (
		event: React.SyntheticEvent<HTMLFormElement>
	) => {
		event.preventDefault()

		const userPassword = { password, password_confirmation }

		var validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

		if (validate.test(password)) {
			setErrorPassword('')
			if (password === password_confirmation) {
				try {
					setLoading(true)
					const response = await axios.post(
						`https://nouky.xyz/b3/reset_password/${slug}`,
						userPassword
					)
					if (response.status === 200) {
						toast({
							position: 'top',
							title: 'Berhasil',
							description: response.data.message,
							status: 'success',
							duration: 3000,
							isClosable: true
						})

						setTimeout(() => {
							router.push('/')
						}, 2500)
					}
				} catch (err) {
					setLoading(true)
					setTimeout(() => {
						setLoading(false)
						toast({
							position: 'top',
							title: 'Gagal',
							description: 'Terjadi masalah pada server',
							status: 'error',
							duration: 3000,
							isClosable: true
						})
					}, 500)
				}

				setErrorPasswordConfirm('')
				setErrorPassword('')
			} else {
				setErrorPasswordConfirm('Password tidak sama. Pastikan Password benar.')
			}
		} else {
			setErrorPasswordConfirm('')
			setErrorPassword(
				'Password tidak valid. (minimal 8 karakter, menggunakan minimal satu huruf besar dan angka)'
			)
		}
	}

	// showPassword
	const [show, setShow] = useState<boolean>(false)
	const [showUlangi, setShowUlangi] = useState<boolean>(false)

	const handleShow = () => {
		setShow(!show)
	}
	const handleShowUlangi = () => {
		setShowUlangi(!showUlangi)
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
					<Box textAlign='center' mb={7}>
						<Heading as='h1' size='md' mt={2}>
							Reset Password
						</Heading>
					</Box>

					<form
						method='POST'
						onSubmit={event => handleSubmitResetPassword(event)}>
						<FormControl isRequired>
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
									value={password}
									onChange={e => setPassword(e.target.value)}
									placeholder='Password'
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
							<Text color='tomato' fontSize='sm'>
								{errorPassword}
							</Text>
							<Flex gap={1} marginTop={4} marginBottom={2}>
								<Text fontSize='md'>Ulangi Password</Text>
								<Text fontSize='md' color='red'>
									{' '}
									*
								</Text>
							</Flex>
							<InputGroup size='md'>
								<Input
									type={showUlangi ? 'text' : 'password'}
									name='ulangiPassword'
									py='13px'
									px='20px'
									borderRadius='12px'
									bg='white'
									value={password_confirmation}
									onChange={e => setPasswordConfirmation(e.target.value)}
									placeholder='Ulangi Password'
									required
								/>
								<InputRightElement>
									<Button
										h='full'
										bg='transparent'
										size='md'
										borderRightRadius='12px'
										borderLeftRadius='0'
										onClick={handleShowUlangi}>
										{showUlangi ? <ViewIcon /> : <ViewOffIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>
							<Text color='tomato' fontSize='sm'>
								{errorPasswordConfirm}
							</Text>
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
								{!loading && <p>Reset Password</p>}
								{loading && <Spinner> </Spinner>}
							</Button>
						</FormControl>
					</form>
				</Container>
			</VStack>
		</GridItem>
	)
}

export default ResetPassword
