import React from 'react'
import classNames from 'classnames';
import {v4 as uuid} from "uuid"

function StatsBlock(props) {

    const {data, containerClasses="", blockClasses="", titleClasses="", statsClasses=""} = props;

  return (
    <div className={classNames(containerClasses, classNames("flex flex-col justify-center items-center rounded gap-y-2 p-2"))}>
        {
            data.map((dataStat)=>(
                <div className={classNames(blockClasses, "flex flex-col justify-center items-center border border-gray-500 rounded p-2 w-full")} key={uuid()}>
                    <div className={classNames(titleClasses, "text-center text-2xl")}>{dataStat.title}</div>
                    <div className={classNames(statsClasses, "text-center text-lg")}>{dataStat.stats}</div>
                </div>
            ))
        }
    </div>
  )
}

export default StatsBlock
