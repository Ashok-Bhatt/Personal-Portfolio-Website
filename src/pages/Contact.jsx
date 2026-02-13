import { MdOutlineMail, MdOutlineLocalPhone, MdOutlineLocationOn, MdCopyAll } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ToastContainer, Zoom } from 'react-toastify';
import { useNavigation } from '../context/navigationContext.jsx';
import { showSuccessToast, showErrorToast } from "../utils/toastUtils.js"
import { useContactMutation } from "../hooks/useContact.js";

function Contact() {
    const { navigationRefs } = useNavigation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const contactMutation = useContactMutation();

    const copyToClipboard = (clipboardContent, toastMessage) => {
        navigator.clipboard.writeText(clipboardContent);
        showSuccessToast(toastMessage);
    }

    const onSubmit = async (data) => {
        contactMutation.mutate(data, {
            onSuccess: (res) => {
                if (res.success) {
                    showSuccessToast("Mail Sent Successfully!");
                    reset();
                } else {
                    showErrorToast("Something went wrong! Sent mail again!")
                }
            },
            onError: (error) => {
                showErrorToast("Something went wrong! Sent mail again!")
            }
        });
    };

    return (
        <div className='flex flex-col lg:flex-row w-full min-h-screen bg-white dark:bg-black py-20 px-6 md:px-20 box-border gap-10' id="contact" ref={el => (navigationRefs.current["contact"] = el)}>
            <div className="flex flex-col w-full lg:w-1/2 gap-y-5">
                <div className='flex flex-col gap-y-2 items-center lg:items-start'>
                    <div className='text-[clamp(1.5rem,4vw,3rem)] font-bold text-black dark:text-white'>Contact Me</div>
                    <div className='h-1 w-24 md:w-30 bg-cyan-200'></div>
                </div>
                <div className='text-black dark:text-white text-center lg:text-left text-lg'>
                    Open to new opportunities, collaborations, and meaningful conversations. Feel free to reach out — let’s build something impactful.
                </div>

                <div className="flex flex-col gap-y-4 max-w-lg mx-auto lg:mx-0 w-full">
                    {/* Email */}
                    <div className="flex gap-x-5 p-4 items-center bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                        <MdOutlineMail className="text-green-500 text-3xl shrink-0" />
                        <div className="flex flex-col flex-grow gap-y-1">
                            <p className="text-black dark:text-white text-xl font-bold">Email</p>
                            <p className="text-black/70 dark:text-white/70 text-base break-all">ashokbhatt2048@gmail.com</p>
                        </div>
                        <MdCopyAll className="text-2xl text-black dark:text-white hover:text-blue-500 cursor-pointer transition-colors" onClick={() => copyToClipboard("ashokbhatt2048@gmail.com", "Email copied to clipboard")} />
                    </div>

                    {/* Phone */}
                    <div className="flex gap-x-5 p-4 items-center bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                        <MdOutlineLocalPhone className="text-green-500 text-3xl shrink-0" />
                        <div className="flex flex-col flex-grow gap-y-1">
                            <p className="text-black dark:text-white text-xl font-bold">Phone</p>
                            <p className="text-black/70 dark:text-white/70 text-base">+91 8153889431</p>
                        </div>
                        <MdCopyAll className="text-2xl text-black dark:text-white hover:text-blue-500 cursor-pointer transition-colors" onClick={() => copyToClipboard("+91 8153889431", "Contact copied to clipboard")} />
                    </div>

                    {/* Location */}
                    <div className="flex gap-x-5 p-4 items-center bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                        <MdOutlineLocationOn className="text-green-500 text-3xl shrink-0" />
                        <div className="flex flex-col gap-y-1">
                            <p className="text-black dark:text-white text-xl font-bold">Location</p>
                            <p className="text-black/70 dark:text-white/70 text-base">Vadodara, India</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <form className="flex flex-col border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-gray-900/50 p-6 md:p-8 gap-y-5 shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-y-2">
                        <input type="text" placeholder="Your Name" className="p-4 text-black dark:text-white border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" {...register("name", { required: "Name is required!" })} />
                        {errors.name && (<p className="text-sm text-red-500 px-2">{errors.name.message}</p>)}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <input type="email" placeholder="Your Email" className="p-4 text-black dark:text-white border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" {...register("email", { required: "Email is required!" })} />
                        {errors.email && <p className="text-sm text-red-500 px-2">{errors.email.message}</p>}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <input type="text" placeholder="Your Phone" className="p-4 text-black dark:text-white border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" {...register("phone", { required: "Phone is required!" })} />
                        {errors.phone && <p className="text-sm text-red-500 px-2">{errors.phone.message}</p>}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <textarea placeholder="Your Message" rows="5" className="p-4 text-black dark:text-white border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" {...register("message", { required: "Message is required!" })}></textarea>
                        {errors.message && <p className="text-sm text-red-500 px-2">{errors.message.message}</p>}
                    </div>
                    <button type="submit" disabled={contactMutation.isPending} className="flex justify-center items-center gap-x-3 p-4 hover:cursor-pointer text-white bg-green-500 hover:bg-green-600 disabled:bg-green-300 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/30">
                        <FaPaperPlane className="text-lg" />
                        <span>{contactMutation.isPending ? "Sending..." : "Send Message"}</span>
                    </button>
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
