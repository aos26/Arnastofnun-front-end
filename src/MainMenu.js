import React, { useEffect } from 'react'
import { isMobile } from 'react-device-detect';

export default function MainMenu() {

    useEffect(() => {
        sessionStorage.setItem("gameLoaded", "false");
    })

    return (
        <div className="container">
            <div className="row">
                <div className="menu col">
                    {isMobile ? <div className="menuItem">
                        <h3>Árnastofnun Leikur</h3></div> : null}
                    <div className="menuItem">
                        <a href="/game" class="btn btn-info btn-lg">Spila</a>
                    </div>
                    <div className="menuItem">
                        <a href="/about" class="btn btn-info btn-lg">Um leikinn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
