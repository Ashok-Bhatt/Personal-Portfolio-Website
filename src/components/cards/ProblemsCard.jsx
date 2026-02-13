import classNames from 'classnames';
import React from 'react'

function ProblemsBlock(props) {

    const { problemsCount, className = "", progressBodyClassName = "", progressBarClassName = "", title = "" } = props;
    const barHeight = 10;
    const totalProblems = problemsCount.reduce((problemsCount, problems) => problemsCount + problems.totalProblems, 0);
    const solvedProblems = problemsCount.reduce((problemsCount, problems) => problemsCount + problems.solvedProblems, 0);

    let progressClass = "";
    let currentAngle = 0;
    let gradientStops = [];

    for (let i = 0; i < problemsCount.length; i++) {

        const problemSet = problemsCount[i];
        const solvedForThisType = problemSet.solvedProblems;
        const typeStartAngle = currentAngle;
        const solvedEndAngle = typeStartAngle + (solvedForThisType / solvedProblems) * 360;
        const color = problemSet.setColor;

        if (solvedForThisType > 0) {
            gradientStops.push(`${color} ${typeStartAngle}deg ${solvedEndAngle}deg`);
        }

        currentAngle = solvedEndAngle;
    }

    // Add remaining space as transparent if needed
    if (currentAngle < 360) {
        gradientStops.push(`transparent ${currentAngle}deg 360deg`);
    }

    progressClass = `conic-gradient(${gradientStops.join(', ')})`;

    return (
        <div className={classNames(className, 'flex flex-col gap-4 px-5 py-4 h-full')}>
            {title && <div className="w-full text-xl md:text-2xl font-bold text-center text-blue-500">{title}</div>}
            <div className='flex flex-col sm:flex-row h-full gap-5 rounded items-center'>
                <div className='flex justify-center items-center p-2'>
                    <div
                        className={classNames(progressBarClassName, "flex justify-center items-center h-28 w-28 md:h-32 md:w-32 p-2 rounded-full border border-gray-500 aspect-square shrink-0")}
                        style={{ background: progressClass }}
                    >
                        <div className={classNames(progressBodyClassName, "flex flex-col justify-center items-center h-full w-full rounded-full border border-gray-500 bg-black text-[10px] md:text-xs text-center font-bold")}>
                            <span>{solvedProblems}</span>
                            {totalProblems !== 0 && <span className="border-t border-gray-500 w-1/2 mt-1 pt-1">{totalProblems}</span>}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 h-full flex-grow justify-center items-center'>
                    {problemsCount.map((problemsSet) => (
                        <div className='flex flex-col w-full' key={problemsSet["problemsTag"]}>
                            <div className="flex justify-between text-lg">
                                <p>{problemsSet["problemsTag"]}</p>
                                {problemsCount["totalProblems"] ? (<p className='text-white font-semibold'>{problemsSet["solvedProblems"]} / {problemsSet["totalProblems"]}</p>) : (<p className='text-white font-semibold'>{problemsSet["solvedProblems"]}</p>)}
                            </div>
                            <div className='flex gap-x-2 items-center w-full'>
                                <div className='rounded-full overflow-hidden bg-gray-800' style={{ height: barHeight, width: '100%' }}>
                                    <div className='h-full' style={{ width: `${(Math.floor(problemsSet["solvedProblems"] / Math.max(1, problemsSet["totalProblems"]) * 100))}%`, backgroundColor: problemsSet["setColor"] }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProblemsBlock
