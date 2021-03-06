import React, {useState, useEffect} from 'react'



function Pixel () {
  const [style, setStyle] = useState({width: '20px', backgroundColor: 'white'})
  const mouseDrag = (event) => {setStyle({width: '20px', backgroundColor: 'black'})}
  // const resetCanvas = (event) => {useState({width: '20px', backgroundColor: 'white'})}
  
  return (
      <div 
        style={style} onDragEnter={() => mouseDrag()} draggable={true}>
      </div>
  )
}

export default Pixel
