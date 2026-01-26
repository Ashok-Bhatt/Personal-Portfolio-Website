import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
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

        setChat((prevChat) => [...prevChat, { text: question, role: "user" }]);
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
                    setChat((prevChat) => [...prevChat, { text: "Something went wrong! Ask again!", role: "bot" }]);
                }
            })
            .catch((error) => {
                setChat((prevChat) => [...prevChat, { text: "Something went wrong! Ask again!", role: "bot" }]);
            })
            .finally(() => {
                setResponseLoading(false);
            })
    }

    return (
        <div className='flex flex-col items-end gap-5 fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50'>
            {showChatbot && (
                <div className='flex flex-col bg-gray-300 dark:bg-gray-700 text-white dark:text-black border-2 border-gray-500 p-4 rounded-xl shadow-2xl w-[calc(100vw-48px)] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[500px] max-h-[70vh] gap-2 transition-all duration-300 transform scale-100 origin-bottom-right'>
                    <div ref={chatContainerRef} className='flex flex-col w-full flex-grow overflow-y-auto no-scrollbar gap-3 p-1'>
                        <div className="flex flex-start w-full gap-2">
                            <img className='h-8 w-8 md:h-10 md:w-10 border rounded-full shrink-0' src="/Images/chatbot_logo_3.jpg" alt="Charlotte" />
                            <div className='max-w-[85%] text-left h-max rounded-2xl bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-2 px-4 text-sm md:text-base shadow-sm'>
                                Hi I'm Charlotte, You can ask me anything regarding Ashok Bhatt and his coding journey
                            </div>
                        </div>

                        {chat.map((chatItem) => (
                            <div className="flex w-full gap-2" style={{ flexDirection: chatItem.role == "user" ? "row-reverse" : "row" }} key={uuid()}>
                                <img className='h-8 w-8 md:h-10 md:w-10 border rounded-full shrink-0' src={chatItem.role == "bot" ? "/Images/chatbot_logo_3.jpg" : "/Images/coder_logo.png"} alt="Role Image" />
                                <div className={`max-w-[85%] h-max rounded-2xl py-2 px-4 text-sm md:text-base shadow-sm ${chatItem.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-800 text-black dark:text-white'}`}>
                                    <ReactMarkdown className="prose prose-sm dark:prose-invert max-w-none">{chatItem.text}</ReactMarkdown>
                                </div>
                            </div>
                        ))}

                        {responseLoading && (
                            <div className="flex flex-start w-full gap-2">
                                <img className='h-8 w-8 md:h-10 md:w-10 border rounded-full shrink-0' src="/Images/chatbot_logo_3.jpg" alt="Charlotte" />
                                <div className='max-w-[85%] text-left h-max rounded-2xl bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-2 px-4 shadow-sm text-sm'>
                                    Loading{".".repeat(loadingDotsCount)}
                                    {Array.from({ length: 3 - loadingDotsCount }, () => "\u00A0").join("")}
                                </div>
                            </div>
                        )}
                    </div>
                    <form className='h-max flex gap-2 mt-2' onSubmit={askChatbot}>
                        <input className='flex-grow text-black dark:text-white p-3 border rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base' type="text" placeholder='Enter your question' />
                        <button className='text-white bg-green-600 hover:bg-green-700 font-bold py-2 px-4 rounded-xl transition-colors shadow-md text-sm md:text-base' type='submit'>Ask</button>
                    </form>
                </div>
            )}
            <div className="rounded-full h-14 w-14 md:h-20 md:w-20 bg-white overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 border-4 md:border-8 border-blue-500 hover:scale-110" onClick={() => setShowChatbot((prev) => !prev)}>
                <img className='h-full w-full' src="/Images/chatbot_logo.gif" alt="Logo for chatbot" />
            </div>
        </div>
    )
}

export default Chatbot
