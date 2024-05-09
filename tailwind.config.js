module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/public/assets/img/background.jpg')",
        hero: "url('/public/assets/img/hero-background.png')",
      },
      colors: {
        "input-color": "#5B5B5B",
        "tag-color": "rgba(34, 150, 215, 0.19)",
        "dark-green-button": "rgba(11, 91, 73, 1)",
        "light-green-button": "rgba(202, 227, 210, 1)",
        "dark-green-tag": "rgba(11, 91, 73, 1)",
        "light-green-tag": "rgba(11, 91, 73, 0.2)",
        button: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
