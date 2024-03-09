import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          '50': '#ecf5ff',
          '100': '#ddecff',
          '200': '#c1dbff',
          '300': '#9cc2ff',
          '400': '#759eff',
          '500': '#547aff',
          '600': '#3651f5',
          '700': '#293fd9',
          '800': '#2234a4',
          '900': '#263789',
          '950': '#161e50',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
