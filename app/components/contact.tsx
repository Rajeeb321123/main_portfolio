"use client"

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { senderEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import Globe from "./globe/globe";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (



        <motion.section
            ref={ref}
            id="contact"
            // VV imp: css trick: w-[min(100%,38rem)] , here we pick the w minimum between them, good for fixed width untill there isno space and resize itself
            className="   p-5 text-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] dark:shadow-[rgba(138,_147,_164,0.19)_10px_9px_20px] dark dark:bg-black/10 w-[min(100%,38rem)]"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>
                Contact me
            </SectionHeading>
            <p
                className=""
            >
                Please contact me directly at {" "}
                <a className="underline" href="mailto:starsgazer321@gmail.com">
                    starsgazer321@gmail.com
                </a>{" "}
                or through this form
            </p>

            <form
                className=" mt-10 flex flex-col dark:text-black"

                // this shortcut method cannot handle error and output error in client
                // action={senderEmail}

                // VVV imp: server action for getting content of form
                // this is running in client but  in sendEmal.ts of actions folder is running in server
                action={async (formData) => {
                    const { data, error } = await senderEmail(formData);

                    if (error) {
                        toast.error(error)
                        return;
                    };

                    toast.success("Email sent successfully!");
                }}
            >
                <input
                    placeholder="Your email"
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:dark:text-gray-700"
                    type="email"
                    required
                    maxLength={500}
                    name="senderEmail"
                />
                <textarea
                    placeholder="Your message"
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:dark:text-gray-700"
                    required
                    maxLength={500}
                    name="message"
                />
                <SubmitBtn />
            </form>


        </motion.section>



    )
}
