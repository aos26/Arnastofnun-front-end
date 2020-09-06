import React, {useState, useRef} from 'react'
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../Helpers/items';

function Card(props) {

    /*const [{isDragging}, drag] = useDrag({
        item: {
            type: ItemTypes.CARD,
            id: props.id,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        }),
    });*/
    const [dragging, setDraggin] = useState(false);

    const dragItem = useRef();


    const handleDragStart = (e, params) => {
        //console.log(params)
        console.log(params.props.id);
        dragItem.current = params.props.id
        setDraggin(true);
    }

    const getStyles = () => {
        return 'current card';
    }

    

    return (
        <div
            draggable
            onDragStart={(e) => {handleDragStart(e, {props})}}
            //ref={drag}
            id={props.id}
            className={dragging? getStyles({props}) : props.className}
        >
            {props.children}
        </div>
    )
}

export default Card
