// styled-components
import { createGlobalStyle } from "styled-components";

// Manrope font
import manropeRegular from "../fonts/Manrope-Regular.ttf";
import manropeMedium from "../fonts/Manrope-Medium.ttf";
import manropeSemiBold from "../fonts/Manrope-SemiBold.ttf";

// Montserrat font
import montserratRegular from "../fonts/Montserrat-Regular.ttf";
import montserratSemiBold from "../fonts/Montserrat-SemiBold.ttf";

// Inter font
import interMedium from "../fonts/Inter-Medium.ttf";

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Manrope';
    src:  url(${manropeRegular}) format('truetype');
}

@font-face {
    font-family: 'Manrope';
    font-weight: 500;
    src: url(${manropeMedium}) format('truetype');
}

@font-face {
    font-family: 'Manrope';
    font-weight: 600;
    src: url(${manropeSemiBold}) format('truetype');
}

@font-face {
    font-family: 'Montserrat';
    font-weight: 400;
    src: url(${montserratRegular}) format('truetype');
}

@font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    src: url(${montserratSemiBold}) format('truetype');
}

@font-face {
    font-family: 'Inter';
    font-weight: 500;
    src: url(${interMedium}) format('truetype');
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #101828;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: 'Manrope', sans-serif;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  border: 0;
  font-size: 100%;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul,
li {
  list-style: none;
  padding: 0;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  cursor: pointer;
  padding: 0;
  border: none;
}
.link {
  text-decoration: none;
}
.is-hidden {
  display: none;
  visibility: hidden;
}
img,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
