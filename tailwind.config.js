/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        estedad: ["estedad", "sans-serif"],
      },
      fontSize: {
        "3.5xl": {
          "font-size": "2rem",
          "line-height": "2.8rem",
        },
        "4.25xl": {
          "font-size": "2.5rem",
          "line-height": "3.5rem",
        },
        "4.5xl": {
          "font-size": "2.75rem",
          "line-height": "3.81rem",
        },
        "5.5xl": {
          "font-size": "3.5rem",
          "line-height": "4.1rem",
        },
        "6.5xl": {
          "font-size": "4rem",
          "line-height": "5.5rem",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "4rem",
      },
      boxShadow: {
        2: "0px 2px 2px 0px #00000040",
        4: "0px 4px 4px 0px #00000040",
        6: "0px 6px 6px 0px #00000040",
        8: "0px 8px 8px 0px #00000040",
        12: "0px 12px 12px 0px #00000040",
        16: "0px 16px 16px 0px #00000040",
        card: `0px 0px 0px 0px #0000001A,
            0px 1px 2px 0px #0000001A,
            0px 4px 4px 0px #00000017,
            0px 9px 5px 0px #0000000D, 
            0px 16px 6px 0px #00000003, 
            0px 25px 7px 0px #00000000`,
      },
      colors: {
        primary: {
          DEFAULT: "#417F56",
          100: "#E5F2E9",
          200: "#CAE4D3",
          300: "#B0D7BD",
          400: "#96C9A7",
          500: "#7CBC91",
          600: "#61AE7B",
          700: "#4E9968",
          800: "#396F4B",
          900: "#315F41",
          1000: "#294F36",
          1100: "#21402B",
          1200: "#183020",
          1300: "#102016",
          1400: "#08100B",
        },
        neutral: {
          50: "#fff2f2",
          100: "#F9F9F9",
          200: "#e1e1e1",
          300: "#EDEDED",
          400: "#CBCBCB",
          500: "#ADADAD",
          600: "#757575",
          700: "#717171",
          800: "#353535",
          900: "#0C0C0C",
        },
        error: {
          DEFAULT: "#C30000",
          light: "#ED2E2E",
          extralight: "#FFF2F2",
        },
        success: {
          DEFAULT: "#00966D",
          light: "#00BA88",
          extralight: "#F3FDFA",
        },
        warning: {
          DEFAULT: "#A9791C",
          light: "#F4B740",
          extralight: "#FFF8E1",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      screens: {
        xs: "380px",
      },
      backgroundImage: {
        "footer-layer": "url('/src/assets/images/footer_layer.png')",
        slider: "url('/src/assets/images/slider.jpg')",
        slider2: "url('/src/assets/images/slider2.jpg')",
        slider3: "url('/src/assets/images/slider3.jpg')",
        ekbatan: "url('/src/assets/images/ekbatan.jpg')",
        chalos: "url('/src/assets/images/chalos.jpg')",
        aghdasieh: "url('/src/assets/images/aghdasieh.jpg')",
        vanak: "url('/src/assets/images/vanak.jpg')",
      },
    },
  },
  plugins: [],
};
