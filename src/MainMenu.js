import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

export default function MainMenu() {

    return (
		<div className="d-flex h-100 justify-content-center align-items-center">
			<div>
	            <div className="menuItem">
	                <Link to="/game" class="btn btn-info btn-lg">Spila</Link>
	            </div>
	            <div className="menuItem">
	                <Link to="/about" class="btn btn-info btn-lg">Um leikinn</Link>
	            </div>
			</div>
        </div>
    )
}
