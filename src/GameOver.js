import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FacebookShareButton, FacebookIcon } from "react-share";

export default function GameOver() {

    return (
        <div className="container backgroundWinner">
            <div className="row">
                <div className="col">
                    <div className="gameoverText">
                        <h1>Tími búinn!</h1>
                        <h2>Þú náðir (insert rétt) / (insert total) orðskýringum réttum</h2>
                        <h3><FontAwesomeIcon icon={faTrophy} size={"4x"} /></h3>
                    </div>
                    <div className="btnPlayAgain">
                        <a href="/game" class="btn btn-info btn-lg">Spila aftur?</a>
                    </div>
                    <div className="shareGame">
                        <FacebookShareButton
                            url="someurl"
                            //quote={props.joke.setup + props.joke.punchline}
                            hashtag="#programing joke">
                            <FacebookIcon round={true} logoFillColor="white" />
                        </FacebookShareButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
