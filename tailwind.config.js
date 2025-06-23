// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

module.exports = {
	plugins: [
		require('@tailwindcss/typography'),
		// require('@tailwindcss/forms'),
		iconsPlugin({
			collections: getIconCollections(['ph']),
		}),
	],
	darkMode: 'class',
	prefix: 'tw-', // add this as a prefix to all tailwind classes
	content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 200s linear infinite',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: '#151313',
				gray: colors.gray,
				white: colors.white,
				beige: '#fffefa',
				indigo: colors.indigo,
				purple: {
					DEFAULT: '#425804',
					50: '#BDF51F',
					100: '#B7F40B',
					200: '#9ACD09',
					300: '#7DA608',
					400: '#5F7F06',
					500: '#425804',
					600: '#1A2202',
					700: '#000000',
					800: '#000000',
					900: '#000000',
					950: '#000000'
				},
				amber: {
					DEFAULT: '#ECB204',
					50: '#FEE9AA',
					100: '#FDE396',
					200: '#FDD96E',
					300: '#FCCE46',
					400: '#FBC41E',
					500: '#ECB204',
					600: '#B58803',
					700: '#7E5F02',
					800: '#473501',
					900: '#0F0C00',
					950: '#000000'
				},
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				'3xl': '1920px',
				'4xl': '2560px',
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},

		container: {
			center: true,
			padding: {
				DEFAULT: '1.8rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		fontSize: {
			xxs: '.625rem',
			xs: '.75rem',
			sm: '.875rem',
			base: '1rem',
			l: '1.25rem',
			xl: '1.5rem',
			'2xl': ['1.875rem', {}],
			'3xl': ['2.25rem', {}],
			'4xl': ['2.875rem', {}],
			'5xl': [
				'3.25rem',
				{
					lineHeight: '3.25rem',
				},
			],
			'6xl': [
				'4.5rem',
				{
					lineHeight: '4.75rem',
				},
			],
			'7xl': [
				'6rem',
				{
					lineHeight: '1',
				},
			],
			'8xl': [
				'8rem',
				{
					lineHeight: '1',
				},
			],
			'9xl': [
				'9.875rem',
				{
					lineHeight: '1',
				},
			],
			'10xl': [
				'10.75rem',
				{
					lineHeight: '1',
				},
			],
		},
		fontFamily: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			display: ['Bungee Shade', ...defaultTheme.fontFamily.sans],
		},
	},
}
