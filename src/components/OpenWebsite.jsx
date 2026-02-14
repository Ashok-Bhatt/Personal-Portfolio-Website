import react from "react"
import { MdOutlineOpenInNew } from "react-icons/md";

function OpenWebsite(props) {

    const { text, link } = props;

    return (
        <button className="flex gap-2 py-1 px-3 md:px-5 border-2 border-green-500 rounded-full text-xs md:text-sm lg:text-base items-center bg-gray-900 text-gray-100 hover:cursor-pointer hover:bg-green-400 transition-all duration-500 shadow-md" onClick={() => window.open(link, "_blank")}>
            <p className="font-semibold text-sm xl:text-lg">{text}</p>
            <MdOutlineOpenInNew className="text-sm xl:text-lg" />
        </button>
    )
}

export default OpenWebsite