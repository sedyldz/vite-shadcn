/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["media", "class"],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			'write-ink': 'hsl(var(--Write-Ink))',
  			'write-watered': 'hsl(var(--Write-Watered))',
  			'write-washed-out': 'hsl(var(--Write-Washed-out))',
  			'write-subtle': 'hsl(var(--Write-Subtle))',
  			'brand-accent': 'hsl(var(--Brand-Accent))',
  			'surfaces-board': 'hsl(var(--Surfaces-Board))',
  			'communicate-tranquil': 'hsl(var(--Communicate-Tranquil))',
  			'communicate-positive': 'hsl(var(--Communicate-Positive))',
  			'communicate-positive-faded': 'hsl(var(--Communicate-Positive-Faded))',
  			'communicate-urgent': 'hsl(var(--Communicate-Urgent))',
  			'highlight-copper': 'hsl(var(--Highlight-Copper))',
  			'highlight-gum': 'hsl(var(--Highlight-Gum))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: ["MonaSans", "sans-serif"],
  			mono: ["MonaspaceKrypton", "monospace"]
  		},
  		animation: {
  			pulse: 'pulse 1s ease-in-out infinite',
  			'slide-down': 'slide-down 0.5s ease-out',
  			'slide-right': 'slide-right 0.5s ease-out'
  		},
  		keyframes: {
  			pulse: {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0.5'
  				}
  			},
  			'slide-down': {
  				'0%': {
  					transform: 'translateY(-100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			'slide-right': {
  				'0%': {
  					transform: 'translateX(-100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  safelist: ["dark"],
};
