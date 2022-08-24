import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import myNewTheme from '../styles/theme.ts'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={myNewTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
