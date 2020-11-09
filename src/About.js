import React, { useEffect } from 'react'
import { isMobile } from 'react-device-detect';
import MenuIcon from './components/layout/MenuIcon';

export default function About() {


    return (
        <div className="container">
            {/*{isMobile ? <MenuIcon /> :
                null} */}
            <div className="flexbox">
                <div className="row">
                    <div className="col" style={{ marginTop: isMobile ? 30 : 100, marginLeft: isMobile ? 0 : 100, marginRight: isMobile ? 0 : 100}}>
                        <div>
                            <h2>Markmið leiksins</h2>
                            <p>Svaraðu eins mörgum orðskýringum og þú getur þangað til tíminn rennur út með því að draga
                            orðskýringu í dálk sem samsvarar réttu orði.
                        </p>
                        </div>
                        <div >
                            <h2>Hvernig á að spila</h2>
                            <p>Vinstra megin á síðunni birtist dálkur með orðum og hægra megin birtist dálkur með orðskýringum.
                            Á milli þeirra birtist tómur dálkur. Dragðu orðskýringu yfir í miðju dálkinn í reitinn með sömu tölu
                            og orðið sem skýringin á við til þess að vinna inn stig. Ef dregið er að vitlausu orði er ekki hægt
                            að giska á skýringu að því orði aftur. Fimm orð og orðskýringar birtast í senn. Haldið er utan um rétt og röng svör og má sjá fjölda þeirra
                            fyrir ofan dálkana. Þegar búið er að giska á öll fimm orðin birtast fimm ný orð þangað til tíminn rennur út.
                        </p>
                        </div>
                        <div className="homeButton">
                            <a href="/" class="btn buttonGreen btn-lg">Aftur á forsíðu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
