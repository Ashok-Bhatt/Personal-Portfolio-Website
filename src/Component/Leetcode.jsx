import React from 'react'

function Leetcode() {
  return (
    <div className="flex flex-grow rounded-lg bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <div className="flex flex-col w-1/3 h-full bg-green-300 items-center justify-around">
            <div className='w-75 h-75 rounded-full overflow-hidden border'>
                <img src="" alt="Leetcode Profile Image" />
            </div>
        </div>
        <div className="w-2/3 h-full bg-blue-300"></div>
    </div>
  )
}

export default Leetcode
