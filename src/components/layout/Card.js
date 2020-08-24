import React from 'react'
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../Helpers/items';

function Card(props) {

    const [{isDragging}, drag] = useDrag({
        item: {
            type: ItemTypes.CARD,
            
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <div
            ref={drag}
            id={props.id}
            className={props.className}
        >
            {props.children}
        </div>
    )
}

export default Card
