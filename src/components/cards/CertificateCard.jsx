function CertificateCard(props) {

  const { certificate, className = "", eventListeners } = props;

  return (
    <div className={`relative w-full max-w-[90vw] md:max-w-[400px] aspect-[7/4] rounded-2xl border border-gray-700 overflow-hidden group transition-all duration-500 shadow-lg hover:shadow-2xl mx-auto ${className}`} onClick={() => { if (eventListeners) window.open(certificate.link, "_blank") }}>
      <img src={certificate.preview} className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-500' alt={certificate.name} />
      <div className='absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500'>
        <div className='flex absolute bottom-full w-full min-h-10 md:min-h-12 bg-yellow-300 text-black text-xs md:text-base font-bold justify-center items-center px-4 text-center shadow-inner z-10'>
          {certificate.name}
        </div>
        {
          eventListeners && (
            <div className='p-4 md:p-6 bg-white/95 text-black'>
              <p className="text-xs md:text-sm leading-relaxed">
                {certificate.description}
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CertificateCard
