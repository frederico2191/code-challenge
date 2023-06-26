import { createStitches, globalCss } from "@stitches/react";


export const { styled, theme, utils } = createStitches({
  theme: {
    colors: {
      whiteBackground:"rgb(250,250,250)",
      blueNavyNavbar: "rgb(46,58,83)",
      whiteCard: "rgb(255,255,255)",
      shadowCard: "rgb(236,236,236)",
      blueNavyBody: "rgb(28,66,162)",
      blueTextBody: "rgb(4,12,36)",
      greyLineBody: "rgb(231,231,231)",
      greyTextBody: "rgb(171,171,171)",
      blueSkyBody: "rgb(47,128,237)",
      blueLightBody:"rgb(44,156,218)",
      blueLightestBody:"rgb(87,204,242)",

      gray400: "gainsboro",
      gray500: "lightgray",
      purple400: "blueviolet",
      purple500: "darkviolet",
      red400: "tomato",
      red500: "#cc0000",

      primary: "$purple400",
      primaryDark: "$purple500"
    },
    space: {
      1: "5px",
      2: "10px",
      3: "20px",
      8: "80px",
      18: "180px"
    },
    fontSizes: {}
  },
  utils: {
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value
    })
  },
  conditions: {
    bp1: "@media (min-width: 400px)"
  },
  // variants: {
  //   color: {
  //     blueNavyNavbar: {
  //       25: "rgba(46,58,83)",
  //     }
  //   }
  // }
});

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Inter-ExtraBold',
      src: 'local("Inter-ExtraBold"), url("Inter-ExtraBold.tff)',
    },
    {
      fontFamily: 'Inter-ExtraLight',
      src: 'local("Inter-ExtraLight"), url("Inter-ExtraLight.tff)")',
    },
  ],
});



// export const globalStyles = globalCss({
//   '@import': [
//     "url('https://fonts.googleapis.com/css2?family=Play&display=swap')",
//   ],
//   '@font-face': [
//     {
//       fontFamily: 'Inter', 'sans-serif',
//       src: "url('https://fonts.googleapis.com/css2?family=Play&display=swap')",
//     },
//   ],
// })


// export const { styled, getCssText, css } = createStitches({
//   theme: {
//     fonts: {
//       system: "Inter, apple-system, sans-serif",
//     },
//     colors: {
//       grey100: "#e6e4e2",
//       grey200: "#9f9995",
//       grey300: "#666361",
//       grey400: "#474645",
//       grey900: "#242424",
//       backgroundGrey: "#f6f4f2",
//       backgroundDarkGrey: "#d6d2cc",
//       bluePrimary: "#4a7ddd",
//       blueDarker: "#496495",
//       blueDarkest: "#2a4067",
//       orangeDark: "#CA6940",
//       blackColor: "#242424",
//       blackLightColor: "#343433",
//       mildWhite: "#f6f4f2",
//       whiteColor: "#ffffff",
//     },
//     fontSizes: {
//       1: "48px",
//       2: "36px",
//       3: "30px",
//       4: "20px",
//       5: "18px",
//       6: "16px",
//       7: "12px",
//     },
//     fontWeights: {
//       light: "300",
//       normal: "500",
//       bold: "600",
//       bolder: "700",
//     },
//     lineHeights: {},
//     letterSpacings: {},
//     sizes: {},
//     borderWidths: {},
//     borderStyles: {},
//     radii: {},
//     shadows: {},
//     zIndices: {},
//     transitions: {},
//   },
//   media: {
//     xs: "(max-width: 640px)",
//     sm: "(max-width: 768px)",
//     md: "(max-width: 1024px)",
//     lg: "(max-width: 1280px)",
//   },

//   space: {
//     1: "10px",
//     2: "20px"
//   },
//   utils: {
//     px: (config) => (value) => ({
//       paddingLeft: value,
//       paddingRight: value
//     })
//   },
//   // space: {
//   //   1: '100px',
//   //   2: '0.5rem',
//   //   3: '0.75rem',
//   //   4: '1rem',
//   //   5: '1.25rem',
//   //   6: '1.5rem',
//   //   7: '1.75rem',
//   //   8: '2rem',
//   //   9: '2.25rem',
//   //   10: '2.5rem',
//   //   11: '2.75rem',
//   //   12: '3rem',
//   // }
// });

// export const globalStyles = globalCss({
//   "*, *::before, *::after": { boxSizing: "border-box" },
//   "body, h1, h2, h3, h4, p, figure, blockquote, dl, dd": {
//     margin: 0,
//   },
//   "ul[role='list'], ol[role='list']": { listStyle: "none" },
//   "ul": {margin: "0px", padding: "0px"},
//   "html:focus-within": { scrollBehavior: "smooth" },
//   body: {
//     backgroundColor: "#ffffff",
//     fontFamily: "Inter",
//     minHeight: "100vh",
//     textRendering: "optimizeSpeed",
//     lineHeight: 1.5,
//   },
//   "a:not([class])": { textDecorationSkipInk: "auto" },
//   "img,picture": { maxWidth: "100%", display: "block" },
//   "input,button,textarea,select": { font: "inherit" },
//   "@media (prefers-reduced-motion: reduce)": {
//     "html:focus-within": { scrollBehavior: "auto" },
//     "*, *::before, *::after": {
//       animationDuration: "0.01ms !important",
//       animationIterationCount: "1 !important",
//       transitionDuration: "0.01ms !important",
//       scrollBehavior: "auto !important",
//     },
//   },
// });