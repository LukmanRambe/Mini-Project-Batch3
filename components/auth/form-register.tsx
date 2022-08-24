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
    Flex,
    InputRightElement,
    InputGroup,
    Link,
    Container,
    Center
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const FormRegister = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ulangiPassword, setUlangiPassword] = useState('')
    
    const [show, setShow] = useState<boolean>(false);
    const [showUlangi, setShowUlangi] = useState<boolean>(false);

    const handleShow = () => {
        setShow(!show);
    };
    const handleShowUlangi = () => {
        setShowUlangi(!showUlangi);
    };
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const handleUlangiPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUlangiPassword(event.target.value)
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
                <Container >
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
                        py="13px"
                        px="20px"
                        borderRadius="12px"
                        bg="white"
                        value={name}
                        onChange={(e) => handleNameChange(e)}
                        placeholder='Masukkan Nama'
                        required
                    />
                    <Flex gap={1} mb={2}>
                        <Text fontSize='xs'>Email </Text>
                        <Text fontSize='xs' color='red'> *</Text>
                    </Flex>
                    <Input
                        type='text'
                        py="13px"
                        px="20px"
                        borderRadius="12px"
                        bg="white"
                        placeholder='Masukkan Email'
                        value={email}
                        onChange={(e) => handleEmailChange(e)}
                        required
                    />
                    <Flex gap={1} mb={2}>
                        <Text fontSize='xs'>Password </Text>
                        <Text fontSize='xs' color='red'> *</Text>
                    </Flex>
                    <InputGroup size="md">
                        <Input
                        type={show ? "text" : "password"}
                        py="13px"
                        px="20px"
                        borderRadius="12px"
                        bg="white"
                        value={password}
                        onChange={(e) => handlePasswordChange(e)}
                        placeholder='Password'
                        required
                        />
                        <InputRightElement>
                            <Button
                                h="full"
                                bg="transparent"
                                size="md"
                                borderRightRadius="12px"
                                borderLeftRadius="0"
                                onClick={handleShow}>
                                {show ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Flex gap={1} mb={2}>
                        <Text fontSize='xs'>Ulangi Password</Text>
                        <Text fontSize='xs' color='red'> *</Text>
                    </Flex>
                    <InputGroup size="md">
                        <Input
                        type={showUlangi ? "text" : "password"}
                        name='ulangiPassword'
                        py="13px"
                        px="20px"
                        borderRadius="12px"
                        bg="white"
                        value={ulangiPassword}
                        onChange={(e) => handleUlangiPasswordChange(e)}
                        placeholder='Ulangi Password'
                        required
                        />
                        <InputRightElement>
                            <Button
                                h="full"
                                bg="transparent"
                                size="md"
                                borderRightRadius="12px"
                                borderLeftRadius="0"
                                onClick={handleShowUlangi}>
                                {showUlangi ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
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
                    <Center>
                        <Flex mt="20px">
                            <Text color="#737373" fontSize="sm">
                                Sudah Punya Akun?
                                <Link color="primary" fontWeight="bold" ml="1">
                                    Masuk
                                </Link>
                            </Text>
                        </Flex>
                    </Center>
                </Container>
            </VStack>
        </GridItem>
    )
}

export default FormRegister;