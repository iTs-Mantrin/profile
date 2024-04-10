1. install react using command: npm install
2. install react icons : npm install react-icons --save
3. install tailwindCSS: npm install -D tailwindcss
4. initialize tailwindCSS: npx tailwindcss init
5. configuration of tailwind.config.js file using replace code: 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

6. start the react application: npm start