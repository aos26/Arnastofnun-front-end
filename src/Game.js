import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Score from './components/layout/Score';

export default function Word() {

    const [words, setWords] = useState([]);
    //const words = [];

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/words/5')
            .then(res => {
            const newWords = res.data.map(obj => obj);
            setWords(newWords);
            })
            .catch(err => console.log(err));
        
    }, []);

    const fetchWord = () => {
        axios.get('http://127.0.0.1:5000/words/5')
            .then(res => {
            const newWords = res.data.map(obj => obj);
            setWords(newWords);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <Score />
            <div className="mt-4">
                <div className="card">
                    <h5 className="card-header">Word</h5>
                    <div className="card-body">
                        {words.map(ord => (
                            <li key={ord.id}>{ord.ord}</li>
                        ))}
                        <a className="btn btn-primary text-white" onClick={fetchWord}>Get another word</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
