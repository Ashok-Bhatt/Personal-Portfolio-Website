import { MdOutlineMail, MdOutlineLocalPhone, MdOutlineLocationOn, MdCopyAll } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigation } from '../context/navigationContext.jsx';
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
        toast.success(toastMessage);
    }

    const onSubmit = async (data) => {
        contactMutation.mutate(data, {
            onSuccess: (res) => {
                if (res.success) {
                    toast.success("Mail Sent Successfully!");
                    reset();
                } else {
                    toast.error("Something went wrong! Sent mail again!")
                }
            },
            onError: (error) => {
                toast.error("Something went wrong! Sent mail again!")
            }
        });
    };

    return (
        <div className='flex flex-col lg:flex-row w-full min-h-screen bg-black py-8 px-4 md:py-20 md:px-20 box-border gap-8 lg:gap-20' id="contact" ref={el => (navigationRefs.current["contact"] = el)}>
            <div className="flex flex-col w-full lg:w-1/2 gap-y-5">
                <div className='flex flex-col gap-y-2 items-center lg:items-start'>
                    <div className='text-2xl md:text-5xl lg:text-[clamp(1.5rem,4vw,3rem)] font-bold text-white'>Contact Me</div>
                    <div className='h-1 w-16 md:w-24 lg:w-30 bg-cyan-200'></div>
                </div>
                <div className='text-white text-center lg:text-left text-sm md:text-lg'>
                    Open to new opportunities, collaborations, and meaningful conversations. Feel free to reach out — let’s build something impactful.
                </div>

                <div className="flex flex-col gap-y-3 md:gap-y-4 max-w-lg mx-auto lg:mx-0 w-full">
                    {/* Email */}
                    <div className="flex gap-x-3 md:gap-x-4 p-2.5 md:p-4 items-center bg-gray-900 rounded-xl border border-gray-800">
                        <MdOutlineMail className="text-green-500 text-xl md:text-3xl shrink-0" />
                        <div className="flex flex-col flex-grow gap-y-0.5 md:gap-y-1 overflow-hidden">
                            <p className="text-white text-base md:text-xl font-bold">Email</p>
                            <p className="text-white/70 text-xs md:text-base break-all">ashokbhatt2048@gmail.com</p>
                        </div>
                        <MdCopyAll className="text-lg md:text-2xl text-white hover:text-blue-500 cursor-pointer transition-colors shrink-0" onClick={() => copyToClipboard("ashokbhatt2048@gmail.com", "Email copied to clipboard")} />
                    </div>

                    {/* Phone */}
                    <div className="flex gap-x-3 md:gap-x-4 p-2.5 md:p-4 items-center bg-gray-900 rounded-xl border border-gray-800">
                        <MdOutlineLocalPhone className="text-green-500 text-xl md:text-3xl shrink-0" />
                        <div className="flex flex-col flex-grow gap-y-0.5 md:gap-y-1 overflow-hidden">
                            <p className="text-white text-base md:text-xl font-bold">Phone</p>
                            <p className="text-white/70 text-xs md:text-base">+91 8153889431</p>
                        </div>
                        <MdCopyAll className="text-lg md:text-2xl text-white hover:text-blue-500 cursor-pointer transition-colors shrink-0" onClick={() => copyToClipboard("+91 8153889431", "Contact copied to clipboard")} />
                    </div>

                    {/* Location */}
                    <div className="flex gap-x-3 md:gap-x-4 p-2.5 md:p-4 items-center bg-gray-900 rounded-xl border border-gray-800">
                        <MdOutlineLocationOn className="text-green-500 text-xl md:text-3xl shrink-0" />
                        <div className="flex flex-col gap-y-0.5 md:gap-y-1">
                            <p className="text-white text-base md:text-xl font-bold">Location</p>
                            <p className="text-white/70 text-xs md:text-base">Vadodara, India</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <form className="flex flex-col border border-gray-800 rounded-2xl bg-gray-900/50 p-4 md:p-8 gap-y-3 md:gap-y-5 shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-y-2">
                        <input type="text" placeholder="Your Name" className="p-2.5 md:p-4 text-sm md:text-base text-white border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all w-full" {...register("name", { required: "Name is required!" })} />
                        {errors.name && (<p className="text-xs md:text-sm text-red-500 px-2">{errors.name.message}</p>)}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <input type="email" placeholder="Your Email" className="p-2.5 md:p-4 text-sm md:text-base text-white border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all w-full" {...register("email", { required: "Email is required!" })} />
                        {errors.email && <p className="text-xs md:text-sm text-red-500 px-2">{errors.email.message}</p>}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <input type="text" placeholder="Your Phone" className="p-2.5 md:p-4 text-sm md:text-base text-white border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all w-full" {...register("phone", { required: "Phone is required!" })} />
                        {errors.phone && <p className="text-xs md:text-sm text-red-500 px-2">{errors.phone.message}</p>}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <textarea placeholder="Your Message" rows="5" className="p-2.5 md:p-4 text-sm md:text-base text-white border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none w-full" {...register("message", { required: "Message is required!" })}></textarea>
                        {errors.message && <p className="text-xs md:text-sm text-red-500 px-2">{errors.message.message}</p>}
                    </div>
                    <button type="submit" disabled={contactMutation.isPending} className="flex justify-center items-center gap-x-3 p-2.5 md:p-4 hover:cursor-pointer text-white bg-green-500 hover:bg-green-600 disabled:bg-green-300 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/30 w-full">
                        <FaPaperPlane className="text-base md:text-lg" />
                        <span className="text-sm md:text-base">{contactMutation.isPending ? "Sending..." : "Send Message"}</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
