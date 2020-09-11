import React, { Component } from 'react'

export default function MainMenu() {
    return (
        <div className="container">
            <div className="row">
                <div className="menu col">
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
