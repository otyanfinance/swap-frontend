import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        oft_color_1: '#2c2d3e',
        oft_color_2: '#4d4d59',
        oft_brand_color: '#00e28d',
        // supporting colors
        oft_success_color: '#16a34a',
        oft_warning_color: '#ea580c',
        oft_danger_color: '#dc2626',
        oft_info_color: '#0284c7',
        // shades

        oft_muted_text: '#94a3b8',

        oft_brand_color_shade: {
          1: '#e9d5ff',
          2: '#d8b4fe',
          3: '#c084fc',
          4: '#a855f7',
          5: '#9333ea',
          6: '#7e22ce',
          7: '#6b21a8',
          8: '#581c87',
          9: '#3b0764'
        },
        oft_success_color_shade: {
          1: '#bbf7d0',
          2: '#86efac',
          3: '#4ade80',
          4: '#22c55e',
          5: '#16a34a',
          6: '#15803d',
          7: '#166534',
          8: '#14532d',
          9: '#052e16'
        },
        oft_danger_color_shade: {
          1: '#fecaca',
          2: '#fca5a5',
          3: '#f87171',
          4: '#ef4444',
          5: '#dc2626',
          6: '#b91c1c',
          7: '#991b1b',
          8: '#7f1d1d',
          9: '#450a0a'
        },
        oft_warning_color_shade: {
          1: '#fed7aa',
          2: '#fdba74',
          3: '#fb923c',
          4: '#f97316',
          5: '#ea580c',
          6: '#c2410c',
          7: '#9a3412',
          8: '#7c2d12',
          9: '#431407'
        },
        oft_info_color_shade: {
          1: '#bae6fd',
          2: '#7dd3fc',
          3: '#38bdf8',
          4: '#0ea5e9',
          5: '#0284c7',
          6: '#0369a1',
          7: '#075985',
          8: '#0c4a6e',
          9: '#082f49'
        },
        oft_neutral_color_shade: {
          1: '#fafafa',
          2: '#f5f5f5',
          3: '#e5e5e5',
          4: '#d4d4d4',
          5: '#a3a3a3',
          6: '#737373',
          7: '#525252',
          8: '#404040',
          9: '#262626',
          10: '#171717',
          11: '#0a0a0a'
        },

        oft_brand_support_color: '#c026d3',
        oft_brand_support_color_shade: {
          1: '#f5d0fe',
          2: '#f0abfc',
          3: '#e879f9',
          4: '#d946ef',
          5: '#c026d3',
          6: '#a21caf',
          7: '#86198f',
          8: '#701a75',
          9: '#4a044e'
        },
        oft_white_color: '#fff',
        oft_platinum_color: '#E5E4E2',
        oft_CelestialGreen_color: '#2CDEC6',
        oft_black_color: 'black'
      },
      fontSize: {
        mini: ['0.60rem', {lineHeight: '1rem'}],
        sm: '13px',
        normal: '15px',
        md: '18px',
        mini_large: '20px',
        large: '24px',
        extra_large: '30px',
        '2xl': ['1.5rem', {lineHeight: '2rem'}],
        '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
        '4xl': ['2.25rem', {lineHeight: '2.5rem'}],
        '5xl': ['3rem', {lineHeight: '4.25rem'}],
        '6xl': ['3.75rem', {lineHeight: '1'}],
        '7xl': ['4.5rem', {lineHeight: '6.75rem'}],
        '8xl': ['6rem', {lineHeight: '1'}],
        '9xl': ['70px', {lineHeight: '1'}]

        // xs: ["0.75rem", { lineHeight: "1rem" }],
        // sm: ["0.875rem", { lineHeight: "1.25rem" }],
        // base: ["1rem", { lineHeight: "1.5rem" }],
        // lg: ["1.125rem", { lineHeight: "1.75rem" }],
        // xl: ["1.25rem", { lineHeight: "1.75rem" }],

        // "title-xxl": ["44px", "55px"],
        // "title-xl": ["36px", "45px"],
        // "title-xl2": ["33px", "45px"],
        // "title-lg": ["28px", "35px"],
        // "title-md": ["24px", "30px"],
        // "title-md2": ["26px", "30px"],
        // "title-sm": ["20px", "26px"],
        // "title-xsm": ["18px", "24px"],
      },
      zIndex: {
        999999: '999999',
        99999: '99999',
        9999: '9999',
        999: '999',
        99: '99',
        9: '9',
        1: '1'
      }
    }
  },
  plugins: []
}
export default config
