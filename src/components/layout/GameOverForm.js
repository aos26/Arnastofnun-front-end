import React, { useState, useEffect } from 'react'

function GameOverForm(props) {
    const [name, setName] = useState('');
    const [bekkur, setBekkur] = useState('');
    const [school, setSchool] = useState('');
    const [savedScore, setSavedScore] = useState(false);


    useEffect(() => {
        var forms = document.getElementsByClassName('needs-validation');
        
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })

    function handleSubmit(event) {
        var forms = document.getElementsByClassName('needs-validation');
        
        const form = {
            name: name,
            school: school,
            className: bekkur,
            score: props.score
        };
        const jsonBody = JSON.stringify(form);
        console.log(form)
        Array.prototype.filter.call(forms, function (form) {
            form.classList.add('was-validated');

        });
        if(!!name || !!bekkur || !!school ){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: jsonBody
            };
            fetch(`https://vast-inlet-60629.herokuapp.com/HighScore/`, requestOptions)
                .then(res => {
                    console.log(res)
                    if(res.ok){
                        setSavedScore(true);
                    }
                });
        }
        
        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <div>
            {savedScore ? 
            <div className="gameoverContainer">
                <h2>Stig vistuð!</h2>
            </div>
                :
            <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nameInput">Nafn</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="" onChange={event => setName(event.target.value)} required></input>
                    <div className="invalid-feedback">
                        Vinsamlegast sláðu inn nafn.
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="classInput">Bekkur</label>
                    <input type="text" className="form-control" id="classInput" placeholder="" onChange={event => setBekkur(event.target.value)} required></input>
                    <div className="invalid-feedback">
                        Vinsamlegast sláðu inn bekk.
                    </div>
                </div>
                <div className="form-group">
                    <label className="my-1 mr-2" htmlFor="schoolInput">Veldu skóla</label>
                    <input type="text" className="form-control" id="schoolInput" placeholder="" onChange={event => setSchool(event.target.value)} required></input>
                    
                    {/*<select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" required>
                        <option value=""> - </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>*/}
                    <div className="invalid-feedback">
                        Vinsamlegast sláðu inn skóla.
                 </div>
                </div>
                <button className="btn btn-success btn-lg mt-1" type="submit">Vista stig</button>
            </form>
            }
        </div>
    )
}

export default GameOverForm
