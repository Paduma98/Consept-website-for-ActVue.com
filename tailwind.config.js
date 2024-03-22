export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    container:  {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        lg: '4rem',
        xl: '8rem',
      },
    },
    extend: {
      colors: {
        primary: '#0F131D',
        secondary: '#17416F',
      },
    },
    animation: {
      "infinite-scroll": "infinite-scroll 25s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
  },
  
  variants: {
  },

  plugins: [
    require('flowbite/plugin')
],
}

