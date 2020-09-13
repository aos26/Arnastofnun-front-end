import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Helpers/items'
import { CardContext } from '../../Game'

function Board(props) {
    
    /*const { checkIfRight } = useContext(CardContext);
    let boardId
    if(props.ord){
        boardId = props.ord.ord.id;
    }
    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor)=> checkIfRight(item.id, boardId),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
        <Board
                    key={ord.id}
                    id={ord.flid}
                    ord={{ ord }}
                    className="board oneCard"
                    addScore={addScore}
                    addWrongScore={addWrongScore}
                  >
                    <p className="bulletNumber text-white">{i + 1}</p>
                    {ord.isRight ?
                      <Card
                        id={ord.id}
                        className="card"
                        draggable="false"
                        key={ord.id}
                      >
                        <p>{capitalize(ord.texti)}</p>
                      </Card>
                      : null

                    }
                  </Board>
    })*/

    return (
        <div 
            //ref={drop}
            id={props.id}
            className={props.className}
            //style={isOver ? {backgroundColor: 'gray'} : {}}
        >
            { props.children }    
        </div>
    )
}

export default Board
