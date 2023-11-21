module.exports = {
  // mode: "jit", //
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    text: {
      set: "font-size: .75rem, line-height: 1rem",
    },
    colors: {
      blue: "#0056FF",
      gold: "#C19F63",
      green: "#5CC566",
      red: "#FF4B3E",
      orange: "#FE7849",
      yellow: "#FFC428",
      white: "#FFFFFF",
      ancient: "#A88B6D",
      brown: "#3D3325",
      brown020: "#DCC999",
      black: "#000",
      black020: "#1C1F26",
      black030: "#15181d",
      option: "#2B313A",
      gray: "#C9CDD2",
      gray2: "#C2C2CC",
      gray3: "#535960",
      gray4: "#454B50",
      transparent: "transparent",
    },
    boxShadow: {
      shadow10: "rgb(0 0 0 / 10%) 2px 2px 8px 0px",
    },
  },
  variants: {
    extend: {}, // 지정된 속성에만 사용 가능함! 사용할 속성: ['클래스명']
  },
  plugins: [],
};
