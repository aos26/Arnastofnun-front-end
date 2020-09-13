import React, { Component } from 'react'
import { isMobile } from 'react-device-detect';

export default function MainMenu() {
    return (
        <div className="container">
            <div className="row">
                <div className="menu col">
                    {isMobile ? <div className="menuItem"><h3>Árnastofnun Leikur</h3></div> : null}
                    <div className="menuItem">
                        <a href="/game">Spila</a>
                    </div>
                    <div className="menuItem">
                        <a href="/">Stillingar (TBD)</a>
                    </div>
                    <div className="menuItem">
                        <a href="/">Um leikinn (TBD)</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
