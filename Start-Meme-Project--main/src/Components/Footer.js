import { useState } from "react";
import { SiMinutemailer } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { MdSubject } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

const Footer = () => {

    const location = useLocation();

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const isValidEmail = (email) => {
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !fullName ||
            !email ||
            !subject ||
            !message

        ) {
            toast.error("Please fill in all required fields.");
            return;
        }
        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }


        try {
            const messageBody = `
            Get in touch with us!:
             
                 Name: ${fullName} 
                 Email: ${email}
                 Subject: ${subject}
                 Message: ${message}
                
             `;
            const templateParams = {
                to_name: `${fullName}`,
                from_name: "Code Zone",
                to_email: email,
                subject: "Get in touch with us!",
                message: messageBody,
            };
            const response = await emailjs.send(
                "service_m774pph",
                "template_qsec7n7",
                templateParams,
                "rc1ba_PvLbgEIUjbt"
            );
            console.log("Email sent successfully:", response);
            if (response) {
                toast.success("Email Sent Successfully");

                setEmail("");

                setFullName("");
                setMessage("");
                setSubject("");


                document.getElementById("cat").checked = false;
                document.getElementById("dog").checked = false;
                document.getElementById("other").checked = false;
            }
        } catch (error) {
            console.error("Error sending email:", error);
/*             toast.error("Something Went wrong please try again");
 */        }
    };

    if (location.pathname == '/auth/facebook') {
        return null; // Render nothing on the /auth/facebook route
    }

    return (
        <div className="bg-gray-900 pt-6 w-full flex flex-col items-center">
            <div
                id="contactUs"
                className="py-6 w-full max-w-5xl flex flex-col items-center lg:flex-row lg:justify-end  gap-y-10"
            >
                <div className="lg:mr-auto pr-4 flex flex-col items-start gap-6">
                    <h2 className="text-3xl font-semibold -tracking-[2px] opacity-25 text-white ">
                        Get Ecosystem updates in your inbox
                    </h2>
                    <h3 className="text-3xl font-semibold -tracking-[2px] text-white  opacity-100">
                        Quick Support
                    </h3>
                    <h4 className="text-white text-xl font-light opacity-80 text-start">
                        We're here for you, waiting to answer your queries, our team is happy to help you.
                    </h4>
                    <div className="flex gap-2">
                        <a
                            href="mailto:example@gmail.com"
                            className="hover:text-green-400 cursor-pointer flex transition duration-200 ease-in text-white "
                        >
                            <SiMinutemailer className="w-6 h-6 mr-2  text-green-400" />
                            info@flytt-stad-atervinn.com
                        </a>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex bg-gr flex-col hover:scale-105 transition duration-300 rounded-xl w-11/12 lg:w-1/2 gap-6 py-3 px-4"
                >
                    <h2 className=" text-gray-300 text-xl font-bold text-start ">
                        Get in touch with us!
                    </h2>
                    <div className="flex flex-col gap-y-5">
                        <div className="flex relative items-center ">
                            <BiUser className="absolute left-1 w-9 h-9 p-1 text-gray-500 hover:shake" />
                            <input
                                className="pl-12 rounded bg-gray-200 shadow-lg w-full  p-2 placeholder:text-gr1 "
                                type="text"
                                placeholder="Full name"
                                name="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                id="fullName"
                            />
                        </div>
                        <div className="flex relative items-center ">
                            <FiMail className=" absolute left-1 w-7 h-7 mr-2 text-gray-500 hover:shake" />
                            <input
                                className="pl-12 w-full rounded bg-gray-200 shadow-lg   p-2 placeholder:text-gr1 "
                                placeholder="Email Address"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="flex relative items-center">
                            <MdSubject className="absolute left-1 w-7 h-7  mr-2 text-gray-500 hover:shake" />
                            <input
                                className="pl-12 w-full rounded bg-gray-200 shadow-lg  p-2 placeholder:text-gr1 "
                                type="text"
                                placeholder="Enter Your Subject"
                                name="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                id="subject"
                            />
                        </div>
                        <div className="flex relative items-center">
                            <AiOutlineMessage className="absolute left-1 top-2 w-7 h-7 mr-2 text-gray-500 hover:shake" />
                            <textarea
                                className="pl-12 w-full p-2 rounded bg-gray-200  shadow-lg   placeholder:text-gr1 "
                                placeholder="Message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                id="message"
                            ></textarea>
                        </div>
                        <button
                            type="submit" // Change type to "submit" to trigger form submission
                            className="text-white px-4 py-2 rounded-lg bg-red-900 hover:bg-sk1 transition duration-200"
                        >
                            Send Message
                        </button>
                    </div>

                </form>
            </div>
            <div className="flex flex-col items-center w-full  pt-8  pb-3 bg-[#141617] gap-y-4 ">
                <div className="flex items-center gap-4">
                    <a to="https://www.facebook.com/">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition-all duration-700">
                            <img src="/img/fa.png" alt="home" className="w-5 h-5" />
                        </div>
                    </a>
                    <a to="https://www.instagram.com">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
                            <img src="/img/in.png" alt="home" className="w-5 h-5" />
                        </div>
                    </a>
                    <a to="https://www.aedin.com">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
                            <img src="/img/li.png" alt="home" className="w-5 h-5" />
                        </div>
                    </a>
                    <a to="https://x.com/">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
                            <img src="/img/twitter.png" alt="home" className="w-5 h-5" />
                        </div>
                    </a>
                    <a to="https://youtube.com/">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
                            <img src="/img/yo.png" alt="home" className="w-5 h-5" />
                        </div>
                    </a>
                </div>
                <div className="relative w-full">
                    <p className="text-white text-center">
                        @copyright2024 MEME&Coin

                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer