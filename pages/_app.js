import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import myNewTheme from '../styles/theme.ts'
import { extendTheme } from '@chakra-ui/react'

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={myNewTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
