import React, { useState } from 'react'
import classNames from 'classnames';
import {FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa"

function Slider(props) {

  const {cards, cardClasses="", containerClasses="", scrollTrigger="button", defaultPointer=0, setParentPointer=null} = props;
  const [pointer, setPointer] = useState(defaultPointer);

  const scrollLeft = (triggerEvent) => {
    if (scrollTrigger==triggerEvent){
      const newPointer = Math.max(0, pointer-1);
      setPointer(newPointer);
      if (setParentPointer){
        setParentPointer(newPointer);
      }
    }
  }

  const scrollRight = (triggerEvent) => {
    if (scrollTrigger==triggerEvent){
      const newPointer = Math.min(cards.length-1, pointer+1);
      setPointer(newPointer);
      if (setParentPointer){
        setParentPointer(newPointer);
      }
    }
  }

  return (
    <div className={classNames(containerClasses, 'flex relative gap-x-2 justify-between items-center h-full p-2')}>
      <div className={classNames(cardClasses, "flex flex-col items-center justify-center")} onClick={()=>scrollLeft("card")}>
          {(cards.length>0 && pointer>=1) ? cards[pointer-1] : <></>}
      </div>
      <div className={classNames(cardClasses, "flex flex-col items-center justify-center")}>
          {(cards.length>0) ? cards[pointer] : <></>}
      </div>
      <div className={classNames(cardClasses, "flex flex-col items-center justify-center")} onClick={()=>scrollRight("card")}>
          {(cards.length>0 && pointer+1 < cards.length) ? cards[pointer+1] : <></>}
      </div>

      {/* Slider Left and Right Buttons */}
      {scrollTrigger=="button" && (<FaChevronCircleLeft className='absolute -left-10 top-1/2 -translate-y-1/2 text-black dark:text-white bg-white dark:bg-black text-3xl rounded-full hover:cursor-pointer' style={{visibility: (pointer<=0) ? "hidden": "visible"}} onClick={()=>scrollLeft("button")}/>)}
      {scrollTrigger=="button" && (<FaChevronCircleRight className='absolute -right-10 top-1/2 -translate-y-1/2 text-black dark:text-white bg-white dark:bg-black text-3xl rounded-full hover:cursor-pointer'  style={{visibility: (pointer+1 >= cards.length) ? "hidden": "visible"}} onClick={()=>scrollRight("button")}/>)}
    </div>
  )
}

export default Slider
