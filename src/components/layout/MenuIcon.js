import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MenuIcon() {

    function openNav() {
        if (document.getElementById("mySidenav") !== null) {
            document.getElementById("mySidenav").style.width = "102%";
            if(document.getElementById("scoreBoardId") !== null){
                document.getElementById("scoreBoardId").style.display = "none";
            }
        }
    }

    return (
        <span class="navbar-toggler-icon" onClick={openNav} style={{ marginLeft: 10,top: 5, left: 0, position:"absolute"}}>
            <FontAwesomeIcon icon={faBars} size={"2x"}/>
        </span>
    )
}

