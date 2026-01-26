import React from 'react'
import classNames from 'classnames';

function CertificateBlock(props) {

  const { certificate, className = "", eventListeners } = props;

  return (
    <div className={`relative w-full aspect-[4/3] rounded-2xl border border-gray-300 dark:border-gray-700 overflow-hidden group transition-all duration-500 shadow-lg hover:shadow-2xl ${className}`} onClick={() => { if (eventListeners) window.open(certificate.link, "_blank") }}>
      <img src={certificate.preview} className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-500' alt={certificate.name} />
      <div className='flex flex-col absolute bottom-0 w-full'>
        <div className='flex w-full min-h-12 bg-yellow-300 text-black text-sm md:text-base font-bold justify-center items-center px-4 text-center shadow-inner'>
          {certificate.name}
        </div>
        {
          eventListeners && (
            <div className='opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 p-6 bg-black/90 dark:bg-white/95 text-white dark:text-black'>
              <p className="text-sm leading-relaxed">
                {certificate.description}
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CertificateBlock
