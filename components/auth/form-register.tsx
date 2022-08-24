import React, { useState } from 'react';
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

const FormRegister = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    return(
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
                            Daftar
                        </Heading>
                    </Box>
                    <Flex gap={1} mb={2}>
                        <Text fontSize='xs'>Nama </Text>
                        <Text fontSize='xs' color='red'> *</Text>
                    </Flex>
                    <Input
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => handleNameChange(e)}
                        bg='#fff'
                        placeholder='Masukkan Nama'
                        size='sm'
                        borderRadius={12}
                    />
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
                        placeholder='Masukkan Email'
                        size='sm'
                        borderRadius={12}
                    />
                    <Flex gap={1} mb={2}>
                        <Text fontSize='xs'>Password </Text>
                        <Text fontSize='xs' color='red'> *</Text>
                    </Flex>
                    <Input
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => handlePasswordChange(e)}
                        bg='#fff'
                        placeholder='Password'
                        size='sm'
                        borderRadius={12}
                    />
                    <Flex gap={1} mb={2}>
                        <Text fontSize='xs'>Ulangi Password</Text>
                        <Text fontSize='xs' color='red'> *</Text>
                    </Flex>
                    <Input
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => handlePasswordChange(e)}
                        bg='#fff'
                        placeholder='Ulangi Password'
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
                    >Daftar</Button>
                </Box>
            </VStack>
        </GridItem>
    )
}

export default FormRegister;