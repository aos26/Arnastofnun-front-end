import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FacebookShareButton, FacebookIcon } from "react-share";

export default function GameOver(props) {

    useEffect(() => {
        const test = document.getElementsByClassName("App");
        test[0].classList.add("backgroundWinner");
    })
    return (
        <div className="container centerGameOver">
            <div className="row">
                <div className="col">
                    <div className="gameoverContainer">
                        <h1>Tími búinn!</h1>
                        <h2>Þú náðir {props.right} af {props.wrong + props.right} orðskýringum réttum</h2>
                        
                        <h3 style={{color: "#d4af37"}} ><FontAwesomeIcon icon={faTrophy}  size={"4x"} /></h3>
                    </div>
                    <div className="gameoverContainer">
                        <a href="/game" className="btn btn-info btn-lg">Spila aftur?</a>
                    </div>
                    <div className="gameoverContainer shareContainer">
                        <FacebookShareButton
                            url="https://arnastofnun-leikur.herokuapp.com/"
                            quote={"Ég náði " + props.right + " af " + (props.wrong + props.right) + " orðskýringum réttum!" }
                            hashtag="#árnastofnun"
                            >
                            <FacebookIcon round={false} size={"48px"}/>
                        </FacebookShareButton>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
