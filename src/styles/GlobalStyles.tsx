import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
    //@font-face {
    //    font-family: 'Arodora';
    //    src: url('../assets/fonts/ArodoraPro-Light.eot?') format('eot'),
    //    url('../assets/fonts/ArodoraPro-Light.woff2') format('woff2'),
    //    url('../assets/fonts/ArodoraPro-Light.ttf') format('truetype');
    //    font-weight: normal;
    //    font-style: normal;
    //}
    //
    //@font-face {
    //    font-family: 'Next-art';
    //    src: url('../assets/fonts/NEXTART.eot?') format('eot'),
    //    url('../assets/fonts/NEXTART.woff2') format('woff2'),
    //    url('../assets/fonts/NEXTART.ttf') format('truetype');
    //    font-weight: normal;
    //    font-style: normal;
    //}
    //
    //@font-face {
    //    font-family: 'Next-art';
    //    src: url('../assets/fonts/NEXTART-Bold.eot?') format('eot'),
    //    url('../assets/fonts/NEXTART-Bold.woff2') format('woff2'),
    //    url('../assets/fonts/NEXTART-Bold.ttf') format('truetype');
    //    font-weight: bold;
    //    font-style: normal;
    //}
    //
    //@font-face {
    //    font-family: 'Next-art';
    //    src: url('../assets/fonts/NEXTART-SemiBold.eot?') format('eot'),
    //    url('../assets/fonts/NEXTART-SemiBold.woff2') format('woff2'),
    //    url('../assets/fonts/NEXTART-SemiBold.ttf') format('truetype');
    //    font-weight: 600;
    //    font-style: normal;
    //}
    //
    //@font-face {
    //    font-family: 'Nico-moji';
    //    src: url('../assets/fonts/NicoMoji-Regular.eot?') format('eot'),
    //    url('../assets/fonts/NicoMoji-Regular.woff2') format('woff2'),
    //    url('../assets/fonts/NicoMoji-Regular.ttf') format('truetype');
    //    font-weight: normal;
    //    font-style: normal;
    //}
    //
    
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Arodora', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.primaryTextColor}
        line-height: 1.2;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }
    
    section:nth-of-type(odd) {
        background-image: ${theme.colors.primaryBg};
    }
    section:nth-of-type(even) {
        background-image: ${theme.colors.secondaryBg};
    }
    
`