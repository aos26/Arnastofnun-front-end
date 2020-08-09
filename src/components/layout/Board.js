import React from 'react'

function Board(props) {
    
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        if(e.currentTarget.style.backgroundColor == 'red') { //Athuga hvort það sé búið að svara vitlaust á Board
            const card = document.getElementById(card_id);
            card.style.display = 'block';
            document.getElementById('board-0').appendChild(card);
        } else if(e.currentTarget.childNodes.length == 2){ //Athuga hvort það sé komið rétt svar í Board
            const card = document.getElementById(card_id);
            card.style.display = 'block';
            document.getElementById('board-0').appendChild(card);
        } 
        else if(props.ord.ord.id == card_id){ // Athuga hvort orðið sé rétt
            const card = document.getElementById(card_id);
            card.style.display = 'block';
            card.style.backgroundColor = 'green';
            const wordCard = document.getElementById('ord' + props.ord.ord.id);
            wordCard.style.backgroundColor = 'green';
            e.target.appendChild(card);
        } else { // Ef það er ekki rétt þá merkjum við Board rauðan
            const card = document.getElementById(card_id);
            card.style.display = 'block';
            
            e.currentTarget.style.backgroundColor = 'red';

            const wordCard = document.getElementById('ord' + props.ord.ord.id);
            wordCard.style.backgroundColor = 'red';
            document.getElementById('board-0').appendChild(card);
        }
        
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div 
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            { props.children }    
        </div>
    )
}

export default Board
