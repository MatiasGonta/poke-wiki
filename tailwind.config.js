/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // Path to Tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'wrapper': '1200px',
      },
      zIndex: {
        'toast': '9999',
        'modal': '9998',
      },
      colors: {
        poke: {
          primary: '#202020',
          secondary: '#303030',
          tertiary: '#505050',
          muted: '#ffffff7a',
          border: '#ddd',
          modal: '#202020a1'
        },

        tremor: {
          brand: {
            DEFAULT: colors.green[900],
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
      },
      boxShadow: {
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      fontSize: {
        "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'shimmer': {
          '0%': {
            backgroundPosition: '100% 0',
          },
          '100%': {
            backgroundPosition: '-100% 0',
          }
        },
        'slide-left': {
          from: {
            transform: "translateX(-100%)"
          },
          to: {
            transform: "translateX(0)"
          },
        },
        'wobble': {
          '0%': {
            transform: 'translateX(-90%)',
          },
          '50%': {
            transform: 'translateX(90%)',
          },
          '100%': {
            transform: 'translateX(-90%)',
          },
        },
        'shake': {
          '30%': {
            transform: 'rotate(0deg)',
          },
          '70%': {
            transform: 'rotate(0deg)',
          },
          '49.99%': {
            transform: 'rotate(0.2deg)',
          },
          '50%': {
            transform: 'rotate(-0.2deg)',
          },
        }
      },
      animation: {
        'shimmer': 'shimmer 1.5s linear infinite',
        "slide-left": "slide-left 0.2s ease-out",
        "wobble": "wobble 1.5s ease-in-out infinite",
        "shake": "shake 1s infinite cubic-bezier(0.5,120,0.5,-120)",
      }
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    ...["[#c4c499]", "[#f0a773]", "[#be6f6a]", "[#a9bceb]", "[#cabef0]", "[#aad794]", "[#ccaccc]", "[#f5e39e]", "[#e8ce85]", "[#f993b1]", "[#cfbd73]", "[#b3cdcd]", "[#bac656]", "[#9a76f4]", "[#9180ad]", "[#8a786b]", "[#c6c6db]", "[#eec5c9]"].flatMap((customColor) => [
      `bg-${customColor}`,
      `border-${customColor}`,
      `hover:bg-${customColor}`,
      `hover:border-${customColor}`,
      `hover:text-${customColor}`,
      `fill-${customColor}`,
      `ring-${customColor}`,
      `stroke-${customColor}`,
      `text-${customColor}`,
      `ui-selected:bg-${customColor}`,
      `ui-selected:border-${customColor}`,
      `ui-selected:text-${customColor}`,
    ]),
  ],
  plugins: [require("@headlessui/tailwindcss")],
}