import react from "react"
import { MdOutlineOpenInNew } from "react-icons/md";

function OpenWebsite(props){

    const {text, link} = props;

    return (
        <button className="flex gap-2 py-1 px-5 border-2 dark:border-green-500 rounded-full text-lg items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:cursor-pointer hover:bg-green-400 transition-all duration-500" onClick={()=>window.location.href = link}>
            <p>{text}</p>
            <MdOutlineOpenInNew/>
        </button>
    )
}

export default OpenWebsite