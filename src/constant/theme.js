"use client";

import { fontSizes, fonts, lightColors, media } from "./style";

const { createTheme } = require("@mui/material");

export const theme = createTheme({
  typography: fonts,
  colors: lightColors,
  fontsize: fontSizes,
  media: media,
});
