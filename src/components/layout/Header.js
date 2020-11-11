import React from 'react'

import gameLogo from '../../game-logo.png';
import samLogo from '../../sam-logo.png';

export default function Header(props) {
	return <div className="header">
		<div className="w-100 text-center" style={{marginLeft: "10px"}}>
			<a href="/spagetti"><img className="game-logo" src={gameLogo} /></a>
		</div>
	</div>;
}

function _Header(props) {


    /* Close/hide the sidenav */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        if (document.getElementById("scoreBoardId") !== null) {
            document.getElementById("scoreBoardId").style.display = "block";
        }
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
                    <nav className="navbar navbar-light" style={{ backgroundColor: "#3CA5C5" }}>
                        <a className="navbar-brand" href="/" style={{ color: "white" }}>
                            <img src="https://www.arnastofnun.is/themes/custom/xi_arnastofnun/public/images/logo-white.png" width="40" height="30" className="d-inline-block align-top mr-1" alt="" />
                            Leikur Árnastofnun
                        </a>
                    </nav>
            }
        </div>
    )
}
