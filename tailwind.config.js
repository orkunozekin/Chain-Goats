/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // chain-goats colors
        black: '#000000',
        white: '#FFFFFF',
        primary: "#379cf6",
        heading: this.white,
        "btn-primary-bg": "#379cf6",
        "btn-secondary-bg": "#090238",
        "team-card-bg": "#1b2352",
        "link-color": this.white,
        "link-active": "#379cf6",
        "link-active": "#379cf6",
        "link-active": "#379cf6",
        "body-bg": "#060b1a",
        "testimonial-bg": "#1a0f4f",
        "icon-bg": "#151e4f",
        'small-text-color': '#ffffffc5',
        'light-theme-btn': '#9dbdcfdb',
        // helpers
        'card-border': '#E1E8EA',
        'table-border': '#C4D1D4',
        'panel-bg': '#EDF7F6',
      },
      gradientColorStops: {
        "card-bg": "linear-gradient(45deg, rgba(15, 18, 61, 1) 33%, rgba(15, 18, 61, 1) 52%, rgba(11, 41, 69, 1) 84%)",
        "counter-color": "linear-gradient(90deg, #327cd2 30%, rgb(32, 63, 78) 55%, rgb(10, 50, 105) 75%)",
      },
      spacing: {
        28: '7rem',
      },
      borderRadius: {
        four: '4px',
      },
      fontSize: {
        p: '.9rem',
        'page-title-fs': '28px',
        ten: '10px',
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
        h2: '3rem'
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        panel: '0px 0px 20px rgba(0, 0, 0, 0.05)',
      },
      lineHeight: {
        tight: 1.2,
        normal: '22px',
        smaller: '17px',
        larger: '27px',
        h2: '65px'
      },
      letterSpacing: {
        tighter: '-.04em',
        extraTight: '-0.011em',
        extraWide: '0.3em',
      },
      gridTemplateColumns: {
        'cards-page-grid': 'repeat(auto-fit, minmax(260px, 1fr))',
        'cards-p-g-sm': 'repeat(auto-fit, minmax(240px, 1fr))',
        'cards-p-g-xs': 'repeat(auto-fit, minmax(220px, 1fr))',
      },
      padding: {
        button: '0.8rem 1.5rem',
        'cg-page': '52px 40px',
        'cg-page-tight': '30px 40px 40px 40px',
        'link-p': '5px 0 5px 10px',
        ten: '10px',
      },
      margin: {
        xs: '2px',
        sm: '5px',
        m: '10px',
      },
      gap: {
        ten: '10px',
      },
      width: {
        svg: '17px',
      },
    },
    screens: {
      'xs': '600px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: ['eslint-config-prettier', 'prettier-plugin-tailwindcss'],
}
