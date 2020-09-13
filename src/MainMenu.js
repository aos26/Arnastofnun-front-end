import React, { Component } from 'react'

export default function MainMenu() {
    return (
        <div className="container">
            <div className="row">
                <div className="menu col">
                    <div className="menuItem">
                        <a href="/game" class="btn btn-info btn-lg">Spila</a>
                    </div>
                    <div className="menuItem">
                        <a href="/about" class="btn btn-info btn-lg">Um leikinn (TBD)</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
