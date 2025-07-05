import React from 'react'

function ProblemsBlock(props) {

    const {problemsCount} = props;
    const barLength = 300;
    const barHeight = 10;

    return (
        <div className='flex flex-col items-start p-5 gap-y-3 rounded w-max'>
            {problemsCount.map((problemsSet)=>(
                <div className='flex flex-col' key={problemsSet["problemsTag"]}>
                    <div className="text-lg" style={{color: problemsSet["setColor"]}}>{problemsSet["problemsTag"]}</div>
                    <div className='flex gap-x-2 items-center'>
                        <div className='rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800' style={{height:barHeight, width:barLength}}>
                            <div className='h-full' style={{width: (Math.floor(problemsSet["solvedProblems"]/Math.max(1, problemsSet["totalProblems"])*barLength)), backgroundColor: problemsSet["setColor"]}}></div>
                        </div>
                        <p className='text-black dark:text-white font-semibold'>{problemsSet["solvedProblems"]} / {problemsSet["totalProblems"]}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProblemsBlock
