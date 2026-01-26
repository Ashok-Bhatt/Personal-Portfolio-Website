import React from 'react'
import classNames from 'classnames';

function CertificateBlock(props) {

  const { certificate, className = "", eventListeners } = props;

  return (
    <div className={`relative w-full max-w-[90vw] md:max-w-[400px] aspect-[16/9] rounded-2xl border border-gray-300 dark:border-gray-700 overflow-hidden group transition-all duration-500 shadow-lg hover:shadow-2xl mx-auto ${className}`} onClick={() => { if (eventListeners) window.open(certificate.link, "_blank") }}>
      <img
        src={certificate.logo || "/Images/badge.png"}
        alt="Certificate Badge"
        className="absolute top-4 right-4 w-10 h-10 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300 z-20"
      />
      <img src={certificate.preview} className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-500' alt={certificate.name} />
      <div className='absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500'>
        <div className='flex absolute bottom-full w-full min-h-12 bg-yellow-300 text-black text-sm md:text-base font-bold justify-center items-center px-4 text-center shadow-inner z-10'>
          {certificate.name}
        </div>
        {
          eventListeners && (
            <div className='p-6 bg-black/90 dark:bg-white/95 text-white dark:text-black'>
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
