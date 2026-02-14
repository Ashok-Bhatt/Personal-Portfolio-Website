import React, { useState } from 'react'
import classNames from 'classnames';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"

function Slider(props) {

  const { cards, cardClasses = "", containerClasses = "", scrollTrigger = "button", defaultPointer = 0, setParentPointer = null, title = "", showSideCardsOnMobile = false } = props;
  const [pointer, setPointer] = useState(defaultPointer);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  const scrollLeft = (triggerEvent) => {
    if (scrollTrigger == triggerEvent || triggerEvent === "swipe") {
      const newPointer = Math.max(0, pointer - 1);
      setPointer(newPointer);
      if (setParentPointer) {
        setParentPointer(newPointer);
      }
    }
  }

  const scrollRight = (triggerEvent) => {
    if (scrollTrigger == triggerEvent || triggerEvent === "swipe") {
      const newPointer = Math.min(cards.length - 1, pointer + 1);
      setPointer(newPointer);
      if (setParentPointer) {
        setParentPointer(newPointer);
      }
    }
  }

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      scrollRight("swipe");
    }
    if (isRightSwipe) {
      scrollLeft("swipe");
    }
  }

  return (
    <div className={classNames(containerClasses, 'flex flex-col gap-4 p-4 w-full overflow-hidden')}>
      {title && <div className="w-full text-2xl md:text-3xl font-bold text-center text-blue-500 mb-4">{title}</div>}
      <div
        className='flex relative justify-center items-center w-full'
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >

        {/* Side Card */}
        <div className={classNames(cardClasses, showSideCardsOnMobile ? "flex" : "hidden lg:flex", "flex-col items-center justify-center opacity-30 sm:opacity-40 grayscale scale-75 sm:scale-90 cursor-pointer hover:opacity-60 transition-all")} onClick={() => scrollLeft("card")}>
          {(cards.length > 0 && pointer >= 1) ? cards[pointer - 1] : <div className="invisible">{cards[0]}</div>}
        </div>

        {/* Active Card */}
        <div className={classNames(cardClasses, "flex flex-col items-center justify-center z-10 scale-100 sm:scale-105 md:scale-110 transition-transform duration-500")}>
          {(cards.length > 0) ? cards[pointer] : <></>}
        </div>

        {/* Side Card */}
        <div className={classNames(cardClasses, showSideCardsOnMobile ? "flex" : "hidden lg:flex", "flex-col items-center justify-center opacity-30 sm:opacity-40 grayscale scale-75 sm:scale-90 cursor-pointer hover:opacity-60 transition-all")} onClick={() => scrollRight("card")}>
          {(cards.length > 0 && pointer + 1 < cards.length) ? cards[pointer + 1] : <div className="invisible">{cards[0]}</div>}
        </div>

        {/* Slider Left Button */}
        {scrollTrigger == "button" && (
          <FaChevronCircleLeft
            className='absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 text-white bg-black/80 px-2 py-2 text-4xl rounded-full hover:cursor-pointer hover:bg-blue-500 transition-colors shadow-lg z-20'
            style={{ visibility: (pointer <= 0) ? "hidden" : "visible" }}
            onClick={() => scrollLeft("button")}
          />
        )}

        {/* Slider Right Button */}
        {scrollTrigger == "button" && (
          <FaChevronCircleRight
            className='absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 text-white bg-black/80 px-2 py-2 text-4xl rounded-full hover:cursor-pointer hover:bg-blue-500 transition-colors shadow-lg z-20'
            style={{ visibility: (pointer + 1 >= cards.length) ? "hidden" : "visible" }}
            onClick={() => scrollRight("button")}
          />
        )}
      </div>
    </div>
  )
}

export default Slider
