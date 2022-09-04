module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}","./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('https://images.unsplash.com/photo-1584592487914-a29c64f25887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')",
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}
