
import { LiaCertificateSolid } from "react-icons/lia";
import { useState } from 'react';
import { certificates } from "../Constants/index.js";
import CertificateBlock from "./CertificateBlock.jsx";
import Slider from "./Slider.jsx";
import { useNavigation } from '../Context/navigationContext.jsx';

function Certificates() {
    const { navigationRefs } = useNavigation();
    const [certificatePointer, setCertificatePointer] = useState(0);

    return (
        <div className='flex flex-col w-full hover:cursor-pointer gap-y-10 bg-white dark:bg-black py-20 px-6 z-5 box-border' id="certificates" ref={el => (navigationRefs.current["certificates"] = el)}>
            <div className='flex gap-x-3 w-full justify-center items-center'>
                <LiaCertificateSolid className='text-black dark:text-white text-xl md:text-4xl font-bold' />
                <span className='text-black dark:text-white text-xl md:text-4xl font-bold text-center'>Certificates <span className="text-yellow-300">Obtained</span></span>
            </div>
            <div className="flex relative w-full justify-center overflow-x-hidden">
                <Slider
                    cards={
                        certificates.map((_, index) => (
                            <CertificateBlock certificate={certificates[index]} key={`cert-${index}`} eventListeners={index == certificatePointer} />
                        ))
                    }
                    cardClasses="w-full max-w-[280px] md:max-w-sm p-1 sm:p-2 md:p-4"
                    scrollTrigger="card"
                    defaultPointer={certificatePointer}
                    setParentPointer={setCertificatePointer}
                />
            </div>
        </div>
    );
}

export default Certificates;
