import { createStitches } from "@stitches/react";


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
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
    },
    fontSizes: {
      12: '12px',
      13: '13px',
      15: '15px'
    }
  },
});