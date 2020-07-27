import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Word() {

    const [word, setWord] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/words/549')
        .then(res => {
            console.log(res)
            setWord(res.data)
        })
        .catch(err => console.log(err));
    }, []);

    const fetchWord = () => {
        const id = Math.floor(Math.random() * 60000);
        axios.get('http://127.0.0.1:5000/words/' + id)
        .then(res => {
            console.log(res)
            setWord(res.data)
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="mt-4">
            <div className="card">
                <h5 className="card-header">Word</h5>
                <div className="card-body">
                    <p className="card-text">{word.texti}</p>
                    <a className="btn btn-primary text-white" onClick={fetchWord}>Get another word</a>
                </div>
            </div>
        </div>
    )
}
