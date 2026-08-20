const fs = require('fs');
const path = require('path');

// SVG Logo for Light Backgrounds (Header, Hero light card)
const logoDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 120" width="100%" height="100%">
  <g transform="translate(10, 15)">
    <!-- LAKE (Deep Navy #0B1422) -->
    <!-- L -->
    <path d="M 15 25 L 15 65 L 45 65" fill="none" stroke="#0B1422" stroke-width="7" stroke-linecap="square" stroke-linejoin="miter"/>
    <!-- A (Geometric without crossbar) -->
    <path d="M 60 65 L 82 25 L 104 65" fill="none" stroke="#0B1422" stroke-width="7" stroke-linecap="square" stroke-linejoin="miter"/>
    <!-- K -->
    <path d="M 120 25 L 120 65 M 145 25 L 122 47 L 148 65" fill="none" stroke="#0B1422" stroke-width="7" stroke-linecap="square" stroke-linejoin="miter"/>
    <!-- E -->
    <path d="M 165 25 L 165 65 L 195 65 M 165 25 L 195 25 M 165 45 L 188 45" fill="none" stroke="#0B1422" stroke-width="7" stroke-linecap="square" stroke-linejoin="miter"/>

    <!-- CITY (Muted Gold #B9913F) -->
    <!-- C -->
    <path d="M 248 30 C 240 23, 222 23, 215 35 C 208 47, 215 60, 225 65 C 235 70, 248 60, 248 58" fill="none" stroke="#B9913F" stroke-width="7" stroke-linecap="square" stroke-linejoin="round"/>
    <!-- I -->
    <path d="M 270 25 L 270 65" fill="none" stroke="#B9913F" stroke-width="7" stroke-linecap="square"/>
    <!-- T -->
    <path d="M 285 25 L 325 25 M 305 25 L 305 65" fill="none" stroke="#B9913F" stroke-width="7" stroke-linecap="square"/>
    <!-- Y -->
    <path d="M 335 25 L 352 46 L 370 25 M 352 46 L 352 65" fill="none" stroke="#B9913F" stroke-width="7" stroke-linecap="square"/>

    <!-- Flourish & Underline -->
    <!-- Left gold rule -->
    <line x1="15" y1="85" x2="160" y2="85" stroke="#B9913F" stroke-width="2.5"/>
    <!-- Middle Double Wave Accent -->
    <path d="M 175 83 C 185 77, 195 91, 205 85 C 195 91, 185 77, 175 83" fill="#B9913F"/>
    <path d="M 175 88 C 185 82, 195 96, 205 90 C 195 96, 185 82, 175 88" fill="#D1B16A"/>
    <!-- Right gold rule -->
    <line x1="220" y1="85" x2="370" y2="85" stroke="#B9913F" stroke-width="2.5"/>

    <!-- Subtitle text -->
    <text x="390" y="58" font-family="'Montserrat', 'Inter', sans-serif" font-size="14" font-weight="700" letter-spacing="4" fill="#6B6B6B">KUWAIT</text>
  </g>
</svg>`;

// SVG Logo for Dark Backgrounds (Footer, Navy background)
const logoLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 120" width="100%" height="100%">
  <g transform="translate(10, 15)">
    <!-- LAKE (Pure White #FFFFFF) -->
    <path d="M 15 25 L 15 65 L 45 65" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="square" stroke-linejoin="miter"/>
    <path d="M 60 65 L 82 25 L 104 65" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="square" stroke-linejoin="miter"/>
    <path d="M 120 25 L 120 65 M 145 25 L 122 47 L 148 65" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="square" stroke-linejoin="miter"/>
    <path d="M 165 25 L 165 65 L 195 65 M 165 25 L 195 25 M 165 45 L 188 45" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="square" stroke-linejoin="miter"/>

    <!-- CITY (Secondary Gold #D1B16A) -->
    <path d="M 248 30 C 240 23, 222 23, 215 35 C 208 47, 215 60, 225 65 C 235 70, 248 60, 248 58" fill="none" stroke="#D1B16A" stroke-width="7" stroke-linecap="square" stroke-linejoin="round"/>
    <path d="M 270 25 L 270 65" fill="none" stroke="#D1B16A" stroke-width="7" stroke-linecap="square"/>
    <path d="M 285 25 L 325 25 M 305 25 L 305 65" fill="none" stroke="#D1B16A" stroke-width="7" stroke-linecap="square"/>
    <path d="M 335 25 L 352 46 L 370 25 M 352 46 L 352 65" fill="none" stroke="#D1B16A" stroke-width="7" stroke-linecap="square"/>

    <!-- Flourish & Underline -->
    <line x1="15" y1="85" x2="160" y2="85" stroke="#D1B16A" stroke-width="2.5"/>
    <path d="M 175 83 C 185 77, 195 91, 205 85 C 195 91, 185 77, 175 83" fill="#D1B16A"/>
    <path d="M 175 88 C 185 82, 195 96, 205 90 C 195 96, 185 82, 175 88" fill="#B9913F"/>
    <line x1="220" y1="85" x2="370" y2="85" stroke="#D1B16A" stroke-width="2.5"/>

    <!-- Subtitle text -->
    <text x="390" y="58" font-family="'Montserrat', 'Inter', sans-serif" font-size="14" font-weight="700" letter-spacing="4" fill="#A0AAB8">KUWAIT</text>
  </g>
</svg>`;

const logoDir = path.join(__dirname, 'assets', 'logo');
fs.writeFileSync(path.join(logoDir, 'lakecity_logo_dark.svg'), logoDarkSvg);
fs.writeFileSync(path.join(logoDir, 'lakecity_logo_light.svg'), logoLightSvg);
console.log('SVG logos generated successfully.');
