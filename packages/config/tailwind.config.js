module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: {
        10: "#101828",
        9: "#1D2939",
        8: "#344054",
        7: "#475467",
        6: "#667085",
        5: "#98A2B3",
        4: "#D0D5DD",
        3: "#E4E7EC",
        2: "#F2F4F7",
        1: "#F9FAFB",
      },
      emerald: {
        10: "#00533D",
        9: "#006F59",
        8: "#007F68",
        7: "#009078",
        6: "#009D85",
        5: "#00AD97",
        4: "#33BCAA",
        3: "#76D0C2",
        2: "#AEE2DA",
        1: "#DEF3F1",
      },
      green: {
        5: "#039855",
        4: "#11C872",
        3: "#6CE9A6",
        2: "#D1FADF",
        1: "#F6FEF9",
      },
      blue: {
        5: "#0086C9",
        4: "#10ADF5",
        3: "#7CD4FD",
        2: "#DBF1FF",
        1: "#F5FBFF",
      },
      yellow: {
        5: "#E98D05",
        4: "#F6A60B",
        3: "#FFD540",
        2: "#FFF1BD",
        1: "#FFFCF5",
      },
      red: {
        5: "#D92D20",
        4: "#F25247",
        3: "#FDA29B",
        2: "#FEE4E2",
        1: "#FFFBFA",
      },
      promotion: "#FF3B2D",
    },
    fontSize: {
      header1: ["128px", "179px"],
      header2: ["96px", "134px"],
      header3: ["64px", "90px"],
      header4: ["48px", "67px"],
      header5: ["40px", "56px"],
      header6: ["36px", "50px"],
      body1: ["24px", "34px"],
      body2: ["20px", "28px"],
      body3: ["18px", "25px"],
      body4: ["16px", "22px"],
      body5: ["14px", "20px"],
      body6: ["13px", "18px"],
      body7: ["12px", "17px"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
