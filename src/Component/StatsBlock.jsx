import React from 'react'
import classNames from 'classnames';
import {v4 as uuid} from "uuid"

function StatsBlock(props) {

    const {data, containerClasses="", blockClasses="", titleClasses="", statsClasses=""} = props;

  return (
    <div className={classNames(containerClasses, classNames("flex justify-center items-center rounded gap-1 p-1"))}>
        {
            data.map((dataStat)=>(
                <div className={classNames(blockClasses, "flex flex-col min-h-[150px] justify-center items-center border border-gray-500 rounded p-2 h-full flex-grow")} key={uuid()}>
                    <div className={classNames(titleClasses, "text-center text-lg")}>{dataStat.title}</div>
                    <div className={classNames(statsClasses, "text-center text-3xl")}>{dataStat.stats}</div>
                </div>
            ))
        }
    </div>
  )
}

export default StatsBlock
