import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
    Button,
    Grid,
    GridItem,
    VStack,
    Box,
    Heading,
    Text,
    Input,
    Flex
} from '@chakra-ui/react';
import Logo from '../../assets/logo.png';
import Book from '../../assets/book.png';

export default function ForgotPassword() {
    const [email, setEmail] = useState('')

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    return (
        <>
            <Head>
                <title>Lupa Password</title>
            </Head>

            <Grid
                bg='#F8F8FB'
                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
            >
                <GridItem
                    display={{ sm: 'none', md: 'block' }}
                >
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
                        py={10}
                    >
                        <Box>
                            <Box textAlign='center'>
                                <Image src={Logo} width={147} height={59} objectFit='cover' alt='logo vocasia' />
                            </Box>
                            <Box textAlign='center'>
                                <Image src={Book} width={580} height={450} alt='vocasia' />
                            </Box>
                            <Heading as='h1' size='md' mt={2}>
                                Atur Jadwalmu Jadi Produktif 👋
                            </Heading>
                            <Text fontSize='md' color='#737373' mt={2}>Bantu kamu mengatur jadwal kegiatanmu sehari-hari dengan mudah. Jadikah harimu lebih produktif dengan menulis setiap kegiatanmu yang perlu diselesaikan</Text>
                        </Box>
                    </VStack>
                </GridItem>
                <GridItem>
                    <VStack
                        w='full'
                        minH='100vh'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        px={{ base: 14, lg: 114 }}
                    >
                        <Box>
                            <Box textAlign='center' mb={7}>
                                <Heading as='h1' size='md' mt={2}>
                                    Lupa Password
                                </Heading>
                                <Text fontSize='xs' color='#737373' mt={3}>Masukan email yang telah terdaftar,</Text>
                                <Text fontSize='xs' color='#737373'>kami akan mengirim link untuk mengembalikan akunmu</Text>
                            </Box>
                            <Flex gap={1} mb={2}>
                                <Text fontSize='xs'>Email </Text>
                                <Text fontSize='xs' color='red'> *</Text>
                            </Flex>
                            <Input
                                type='text'
                                name='email'
                                value={email}
                                onChange={(e) => handleEmailChange(e)}
                                bg='#fff'
                                placeholder='Email'
                                size='sm'
                                borderRadius={12}
                            />
                            <Button
                                size='sm'
                                bg='#BA181B'
                                _hover={{ bg: '#9e2427' }}
                                color='#fff'
                                mt={7}
                                w='full'
                                _active={{
                                    bg: '#9e2427',
                                    transform: 'scale(0.98)'
                                }}
                            >Lanjut</Button>
                        </Box>
                    </VStack>
                </GridItem>
            </Grid>

        </>
    )
}

