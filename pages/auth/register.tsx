
import Head from 'next/head';
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

import LayoutAuth from '../../components/auth/layout';
import FormRegister from '../../components/auth/form-register';
const Register = () => {
    
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
    
            <Grid
                bg='#F8F8FB'
                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
            >
                <LayoutAuth />
                <FormRegister />
            </Grid>
    
        </>
    )
}

export default Register;

