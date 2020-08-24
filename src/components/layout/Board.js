import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Helpers/items'

function Board(props) {
    
    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return (
        <div 
            ref={drop}
            id={props.id}
            className={props.className}
        >
            { props.children }    
        </div>
    )
}

export default Board
