import React from 'react'
import classNames from 'classnames';

function CertificateBlock(props) {

  const {certificate, className="", eventListeners} = props;

  return (
    <div className={`relative rounded-lg border border-gray-500 overflow-hidden group transition duration-300 ${className}`} onClick={()=>{if (eventListeners) window.location.href=certificate.link}}>
        <img src={certificate.preview} className='h-[200px] w-full'/>
        <div className='flex flex-col absolute bottom-0 w-full'>
            <div className='flex w-full h-[50px] bg-yellow-300 text-black text-sm font-bold justify-center items-center'>
              {certificate.name}
            </div>
            {
              eventListeners && (<div className='hidden group-hover:block p-5 bg-black dark:bg-white text-white dark:text-black'>
                  <div>
                      {certificate.description}
                  </div>
              </div>)
            }
        </div>
    </div>
  )
}

export default CertificateBlock
