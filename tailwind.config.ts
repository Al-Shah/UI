import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
        girassol: ['var(--font-girassol)'],
        kufam: ['var(--font-kufam)'],
        poppins: ['var(--font-poppins)'],
      },
      colors:{
        white:"#fff",
        black:"#000",
        sky:"#7ED0DE",
        brown:"#FABF75"
      }
    },
  },
  plugins: [],
}
export default config
