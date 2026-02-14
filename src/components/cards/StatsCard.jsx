import classNames from 'classnames';
import { v4 as uuid } from "uuid"

function StatsCard(props) {

    const { data, containerClasses = "", blockClasses = "", titleClasses = "", statsClasses = "" } = props;

    return (
        <div className={classNames(containerClasses, "flex flex-wrap justify-center items-center rounded gap-2 p-1")}>
            {
                data.map((dataStat) => (
                    <div className={classNames(blockClasses, "flex flex-col min-h-[100px] md:min-h-[150px] justify-center items-center border border-gray-500 rounded p-4 h-full flex-grow basis-[calc(50%-8px)] md:basis-0")} key={uuid()}>
                        <div className={classNames(titleClasses, "text-center text-lg")}>{dataStat.title}</div>
                        <div className={classNames(statsClasses, "text-center text-3xl")}>{dataStat.stats}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default StatsCard
