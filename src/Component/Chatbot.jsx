import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import {v4 as uuid} from 'uuid';
import ReactMarkdown from "react-markdown";

function Chatbot() {

    const [showChatbot, setShowChatbot] = useState(false);
    const [chat, setChat] = useState([]);
    const [responseLoading, setResponseLoading] = useState(false);
    const chatContainerRef = useRef(null);
    const [loadingDotsCount, setLoadingDotsCount] = useState(0);
    
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chat, responseLoading]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingDotsCount((prevCount) => (prevCount + 1) % 4);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const askChatbot = async (e) => {
        e.preventDefault()

        const question = e.target[0].value;
        e.target.reset();
        if (question.trim() === "") return;

        setChat((prevChat) => [...prevChat, { text : question, role: "user" }]);
        setResponseLoading(true);

        axios
        .post(
            "https://queryforge-8cgm.onrender.com/api/v1/bot/ask"
            , {
                qnaCode: import.meta.env.VITE_QUERY_FORGE_API,
                question: question,
            }
        )
        .then((res) => {
            const response = res.data;
            if (response.success) {
                setChat((prevChat) => [...prevChat, { text: response.data, role: "bot" }]);
            } else {
                setChat((prevChat) => [...prevChat, { text :"Something went wrong! Ask again!", role: "bot" }]);
            }
        })
        .catch((error) => {
            setChat((prevChat) => [...prevChat, { text :"Something went wrong! Ask again!", role: "bot" }]);
        })
        .finally(()=>{
            setResponseLoading(false);
        })
    }

  return (
    <div className='flex flex-col items-end gap-5 fixed bottom-10 right-10 z-50'>
        {showChatbot && (
            <div className='flex flex-col bg-gray-300 dark:bg-gray-700 text-white dark:text-black border-2 border-gray-500 p-5 rounded-lg shadow-lg w-150 h-100 gap-2'>
                <div ref={chatContainerRef} className='flex flex-col w-full flex-grow overflow-y-auto no-scrollbar gap-2'>

                    <div className="flex flex-start w-full gap-2">
                        <img className='h-10 w-10 border rounded-full' src="/Images/chatbot_logo_3.jpg"/>
                        <div className='max-w-3/4 w-max text-left h-max rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-2 px-5'>Hi I'm Charlotte, You can ask me anything regarding Ashok Bhatt and his coding journey</div>
                    </div>

                    {chat.map((chatItem) => (
                        <div className="flex flex-start w-full gap-2" style={{flexDirection: chatItem.role=="user" ? "row-reverse" : "row"}} key={uuid()}>
                            <img className='h-10 w-10 border rounded-full' src={chatItem.role == "bot" ? "/Images/chatbot_logo_3.jpg" : "/Images/coder_logo.png"} alt="Role Image" />
                            <div className='max-w-3/4 h-max rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-2 px-5'>
                                <ReactMarkdown>{chatItem.text}</ReactMarkdown>
                            </div>
                        </div>
                    ))}

                    {responseLoading && (
                        <div className="flex flex-start w-full gap-2">
                            <img className='h-10 w-10 border rounded-full' src="/Images/chatbot_logo_3.jpg"/>
                            <div className='max-w-3/4 w-max text-left h-max rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-2 px-5'>
                                Loading{".".repeat(loadingDotsCount)}
                                {Array.from({ length: 3 - loadingDotsCount }, () => "\u00A0").join("")}
                            </div>
                        </div>
                    )}
                </div>
                <form className='h-max flex gap-2' onSubmit={askChatbot}>
                    <input className='flex-grow text-black dark:text-white p-2 border rounded-lg border-gray-500' type="text" placeholder='Enter your question'/>
                    <button className='text-white dark:text-black font-semibold py-1 px-2 w-20 rounded-lg bg-green-500 hover:bg-green-300 hover:cursor-pointer' type='submit'>Ask</button>
                </form>
            </div>
        )}
      <div className="rounded-full h-20 w-20 bg-white overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 border-5 border-blue-500 hover:bg-green-500" onClick={() => setShowChatbot((prev)=>!prev)}>
        <img className='h-full w-full' src="/Images/chatbot_logo.gif" alt="Logo for chatbot" />
      </div>
    </div>
  )
}

export default Chatbot
