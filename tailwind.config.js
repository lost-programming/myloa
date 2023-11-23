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
      // 흰색 계열
      white1: "#ffffff",
      // 검정 계열
      black1: "#2b313a",
      black2: "#1c1f26",
      black3: "#15181d",
      black4: "#464c56",
      // 회색 계열
      gray1: "#c2c2cc",
      gray2: "#c9cdd2",
      gray3: "#535960",
      gray4: "#8f8f98",
      // 금색 계열
      gold1: "#997b3b",
      gold2: "#eddab3",
      gold3: "#ff5e00",
      // 파랑 계열
      blue1: "#3cf2e6",
      blue2: "#0054ff",
      // 빨강 계열
      red1: "#ff0000",
      // 주황 계열
      orange1: "#a78300",
      // 초록 계열
      green1: "#09ae09",
      // 핑크 계열
      pink1: "#ff00dd",
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
