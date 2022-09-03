import React, {useState} from 'react'



function Pixel () {
  const [style, setStyle] = useState({width: '20px', backgroundColor: 'white'})
  const mouseDrag = () => {setStyle({width: '20px', backgroundColor: 'black'})}
  const onDoubleClick = () => {setStyle({width: '20px', backgroundColor: 'white'})}
  const onContextMenu = () => {setStyle({width: '20px', backgroundColor: 'pink'})}
  return (
      <div 
        style={style} onDragEnter={() => mouseDrag()} draggable={true}
        onDoubleClick={onDoubleClick} onContextMenu={onContextMenu}>
      </div>
  )
}

export default Pixel
