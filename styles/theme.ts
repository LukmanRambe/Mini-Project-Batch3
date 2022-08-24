import { extendTheme } from '@chakra-ui/react'
// import { ButtonStyles as Button } from "./components/buttonStyles";

const myNewTheme = extendTheme({
	colors: {
		primary: '#C53030'
	},
	fonts: {
		heading: `'Nunito', sans-serif`,
		body: `'Open Sans', sans-serif`
	},
	components: {
		Button: {
			variants: {
				primary: {
					bg: 'primary',
					color: 'white',
					_hover: {
						bg: '#9B2C2C'
					},
					borderRadius: '12px'
				}
			}
		}
	}
})

export default myNewTheme
