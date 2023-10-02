import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      width: {
        'custom-sm': '1.5rem',
        'custom-md': '2rem',
        'custom-lg': '2.5rem',
      },
      height: {
        'custom-sm': '1.5rem',
        'custom-md': '2rem',
        'custom-lg': '2.5rem',
      },
      textColor: {
        'transparent': 'transparent',
        'primary': '#1CBFAE',
        'error': '#E51749',
        'gray-3': '#A3B8CC',
        'gray-6': '#294766',
        'gray-7': '#17324D',
        'gray-8': '#0A1F33',
      },
      borderColor: {
        'transparent': 'transparent',
        'primary': '#1CBFAE',
        'error': '#E51749',
        'gray-3': '#A3B8CC',
        'gray-6': '#294766',
        'gray-7': '#17324D',
        'gray-8': '#0A1F33',
      },
      borderRadius: {
        'r-30': '100'
      },
      fill: {
        'transparent': 'transparent',
        'primary': '#1CBFAE',
        'error': '#E51749',
        'gray-3': '#A3B8CC',
        'gray-6': '#294766',
        'gray-7': '#17324D',
        'gray-8': '#0A1F33',
      },
      backgroundColor: {
        'transparent': 'transparent',
        'primary': '#1CBFAE',
        'error': '#E51749',
        'gray-3': '#A3B8CC',
        'gray-6': '#294766',
        'gray-7': '#17324D',
        'gray-8': '#0A1F33',
      }
    },
  },
  plugins: [],
}
export default config
