import React from "react"

const Logo = ({className}) => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 24" className={className} width="70px" height="32px">
    <defs>
        <linearGradient id="linear-gradient" x1="-339.35" y1="1307.39" x2="-321.35" y2="1288.39"
            gradientTransform="translate(342 -1285.76)" gradientUnits="userSpaceOnUse">
            <stop offset="0.06" stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0.24" />
        </linearGradient>
    </defs>
    <path
        d="M35.69,1.15,52.8,19.25a2.77,2.77,0,0,1,.71,1.43,2.66,2.66,0,0,1-.22,1.57,2.86,2.86,0,0,1-1.06,1.2,3,3,0,0,1-1.57.44H16.6a3,3,0,0,1-1.6-.45,2.81,2.81,0,0,1-1-1.21,2.65,2.65,0,0,1-.21-1.57,2.84,2.84,0,0,1,.72-1.42L31.57,1.14a2.87,2.87,0,0,1,4-.16Z"
        style={{fill:"#fff", "fillRule":"evenodd"}} />
    <path
        d="M.93,18.4l16.39-17A3.23,3.23,0,0,1,18.4.5,3.37,3.37,0,0,1,19.75.12,3.65,3.65,0,0,1,21.14.3a3.54,3.54,0,0,1,1.2.7,3.42,3.42,0,0,1,.81,1.11,3.19,3.19,0,0,1,0,2.67,3.42,3.42,0,0,1-.81,1.11L6,22.93a3.51,3.51,0,0,1-4.68,0A3.25,3.25,0,0,1,.93,18.4Z"
        style={{"fillRule":"evenodd",fill: "url(#linear-gradient)"}} />
    <path
        d="M17.48,1.17A3.5,3.5,0,0,1,21.19.32a3.37,3.37,0,0,1,1.59,1.17,3.24,3.24,0,0,1,.14,3.7,3.34,3.34,0,0,1-1.5,1.28,3.52,3.52,0,0,1-3.77-.59,3.42,3.42,0,0,1-.79-1.06,3.25,3.25,0,0,1-.31-1.26,3.29,3.29,0,0,1,.22-1.28A3.34,3.34,0,0,1,17.48,1.17Z"
        style={{fill:"#fff", "fillRule":"evenodd"}} />
</svg>
)

export default Logo