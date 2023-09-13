'use client'

import { fontSizes, fonts, lightColors, media } from "./style";

const { createTheme} = require("@mui/material");

 export const theme= createTheme({
    typography:fonts,
    colors:lightColors,
    fontsize:fontSizes,
    media:media

})
/*
    margin: 0;
    font-family: var(--font-family-base),"Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: var(--font-size-base);
    line-height: 1.428571429;
    letter-spacing: var(--letter-spacing-base);
    color: var(--text-dark);
    background-color: var(--body-bg);


*/ 