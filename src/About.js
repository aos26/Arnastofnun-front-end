import React, { Component } from 'react'

export default function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col" style={{ margin: 100 }}>
                    <div>
                        <h1>Markmið leiksins</h1>
                        <p>Svaraðu eins mörgum orðskýringum og þú getur þangað til tíminn rennur út með því að draga
                        orðskýringu í dálk sem samsvarar réttu orði.
                        </p>
                    </div>
                    <div style={{ marginTop: 70 }}>
                        <h1>Hvernig á að spila</h1>
                        <p>Vinstra megin á síðunni birtist dálkur með orðum og hægra megin birtist dálkur með orðskýringum.
                        Á milli þeirra birtist tómur dálkur. Dragðu orðskýringu yfir í miðju dálkinn í reitinn með sömu tölu
                        og orðið sem skýringin á við til þess að vinna inn stig. Ef dregið er að vitlausu orði er ekki hægt
                        að giska á skýringu að því orði aftur. Fimm orð og orðskýringar birtast í senn. Haldið er utan um rétt og röng svör og má sjá fjölda þeirra
                        fyrir ofan dálkana. Þegar búið er að giska á öll fimm orðin birtast fimm ný orð þangað til tíminn rennur út.
                        </p>
                    </div>
                    <div className="homeButton" style={{ marginTop: 70 }}>
                        <a href="/" class="btn btn-info btn-lg">Aftur á forsíðu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
