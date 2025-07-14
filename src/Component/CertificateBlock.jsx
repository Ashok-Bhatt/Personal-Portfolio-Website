import React from 'react'

function CertificateBlock(props) {

  const {certificate} = props;

  return (
    <div className='relative h-[250px] w-[400px] rounded-lg border border-gray-500 overflow-hidden group transition-all duration-300' onClick={()=>window.location.href=certificate.link}>
        <img src={certificate.preview} className='h-[200px] w-full'/>
        <div className='flex flex-col absolute bottom-0 w-full'>
            <div className='flex w-full h-[50px] bg-yellow-300 text-black text-lg font-bold justify-center items-center'>{certificate.name}</div>
            <div className='hidden group-hover:block p-5 bg-black dark:bg-white text-white dark:text-black'>
                <div>
                    {certificate.description}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CertificateBlock
