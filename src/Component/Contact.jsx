import { MdOutlineMail, MdOutlineLocalPhone, MdOutlineLocationOn, MdCopyAll } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { useNavigation } from '../Context/navigationContext.jsx';
import { showSuccessToast, showErrorToast } from "../Utils/toastUtils.js"

function Contact() {
    const { navigationRefs } = useNavigation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const copyToClipboard = (clipboardContent, toastMessage) => {
      navigator.clipboard.writeText(clipboardContent);
      showSuccessToast(toastMessage);
    }

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("message", data.message);
        formData.append("access_key", import.meta.env.VITE_EMAIL_ACCESS_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
          showSuccessToast("Mail Sent Successfully!");
        } else {
          showErrorToast("Something went wrong! Sent mail again!")
        }
    };

    return (
        <div className='flex w-full min-h-screen bg-white dark:bg-black p-15 box-border' id="contact" ref={el => (navigationRefs.current["contact"] = el)}>
            <div className="flex flex-col min-h-full w-1/2 gap-y-5 pr-5 ">
                <div className='flex flex-col gap-y-2'>
                    <div className='text-5xl font-bold text-black dark:text-white'>Contact Me</div>
                    <div className='h-1 w-30 bg-cyan-200'></div>
                </div>
                <div className='text-black dark:text-white'>Open to new opportunities, collaborations, and meaningful conversations. Feel free to reach out — let’s build something impactful.</div>

                {/* Email */}
                <div className="flex gap-x-5 my-2 items-center">
                    <MdOutlineMail className="text-green-500 text-3xl" />
                    <div className="flex flex-col flex-grow gap-y-2">
                        <p className="text-black dark:text-white text-xl font-semibold">Email</p>
                        <p className="text-black dark:text-white text-md">ashokbhatt2048@gmail.com</p>
                    </div>
                    <MdCopyAll className="text-3xl text-black dark:text-white" onClick={()=>copyToClipboard("ashokbhatt2048@gmail.com", "Email copied to clipboard")}/>
                </div>

                {/* Phone */}
                <div className="flex gap-x-5 my-2 items-center">
                    <MdOutlineLocalPhone className="text-green-500 text-3xl" />
                    <div className="flex flex-col flex-grow gap-y-2">
                        <p className="text-black dark:text-white text-xl font-semibold">Phone</p>
                        <p className="text-black dark:text-white text-md">+91 8153889431</p>
                    </div>
                    <MdCopyAll className="text-3xl text-black dark:text-white" onClick={()=>copyToClipboard("+91 8153889431", "Contact copied to clipboard")}/>
                </div>

                {/* Location */}
                <div className="flex gap-x-2 my-2">
                    <MdOutlineLocationOn className="text-green-500 text-3xl" />
                    <div className="flex flex-col gap-y-2">
                        <p className="text-black dark:text-white text-xl font-semibold">Location</p>
                        <p className="text-black dark:text-white text-md">Vadodara, India</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 min-h-full">
                <form className="h-full flex flex-col border border-gray-500 rounded bg-gray-100 dark:bg-gray-900 p-5 gap-y-5 overflow-y-auto" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Your Name" className="p-4 text-black dark:text-white border-gray-500 bg-gray-200 dark:bg-gray-800 rounded-lg" {...register("name", { required: "Name is required!" })} />
                    {errors.name && (<p className="text-sm text-red-500">{errors.name.message}</p>)}
                    <input type="text" placeholder="Your Email" className="p-4 text-black dark:text-white border-gray-500 bg-gray-200 dark:bg-gray-800 rounded-lg" {...register("email", { required: "Email is required!" })} />
                    {errors.email && <p className="text-sm text-red-500 ">{errors.email.message}</p>}
                    <input type="text" placeholder="Your Phone" className="p-4 text-black dark:text-white border-gray-500 bg-gray-200 dark:bg-gray-800 rounded-lg" {...register("phone", { required: "Phone is required!" })} />
                    {errors.phone && <p className="text-sm text-red-500 ">{errors.phone.message}</p>}
                    <textarea placeholder="Your Message" rows="5" className="p-4 text-black dark:text-white border-gray-500 bg-gray-200 dark:bg-gray-800 rounded-lg" {...register("message", { required: "Message is required!" })}></textarea>
                    {errors.message && <p className="text-sm text-red-500 ">{errors.message.message}</p>}
                    <button type="submit" className="flex justify-center items-center gap-x-2 p-2 hover:cursor-pointer text-black bg-green-300 rounded">{<FaPaperPlane />} Send Message</button>
                </form>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Zoom}
            />
        </div>
    );
}

export default Contact;
