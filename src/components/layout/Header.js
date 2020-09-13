import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor: "#3CA5C5" }}>
            <a className="navbar-brand" href="/" style={{ color: "white" }}>
                <img src="https://www.arnastofnun.is/themes/custom/xi_arnastofnun/public/images/logo-white.png" width="40" height="30" className="d-inline-block align-top mr-1" alt="" />
                Leikur Árnastofnun
            </a>
        </nav>
    )
}