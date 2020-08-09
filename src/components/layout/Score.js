import React from 'react'

export default class Score extends React.Component {
    constructor() {
        super();
        

        this.state = {
            rightAnswer: 0,
            wrongAnswer: 0,
            time: "TBD"
        };
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                    Rétt svör: {this.state.rightAnswer}
                    </div>
                    <div className="col">
                    Röng svör: {this.state.wrongAnswer}
                    </div>
                    <div className="col">
                    Tími: {this.state.time}
                    </div>
                </div>
            </div>
        )
    }
    
}