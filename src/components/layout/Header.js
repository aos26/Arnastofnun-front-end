import React from 'react'

export default function Header(props) {


    /* Close/hide the sidenav */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div>
            {
                props.isMobile ?
                    <div id="mySidenav" className="sidenav">
                        <a className="closebtn" onClick={closeNav}>&times;</a>
                        <a href="/">Forsíða</a>
                        <a href="/about">Um leikinn</a>
                    </div>
                    :
                    <nav className="navbar navbar-light bg-secondary">
                        <a className="navbar-brand" href="/">
                            <img src="https://www.arnastofnun.is/themes/custom/xi_arnastofnun/public/images/logo-white.png" width="40" height="30" className="d-inline-block align-top mr-1" alt="" />
                            Leikur Árnastofnun
                        </a>
                    </nav>
            }
        </div>
    )
}