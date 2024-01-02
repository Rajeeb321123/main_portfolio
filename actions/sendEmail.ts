"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";



const resend = new Resend(process.env.RESEND_API_KEY);
// Very imp server action of nextjs 14 for geting form 
// VVV imp: server action for getting content of form
// this is running in server
 export const senderEmail = async (formData: FormData) => {
    console.log('Running in server');
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid Sender email"
        };
    };
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid Sender message"
        };
    };

    let data;
    try {

        data = await resend.emails.send({
            from: 'Contact from <onboarding@resend.dev>',
            to: "starsgazer321@gmail.com",
            subject: "Professional Portfolio:Message from contact form",
            reply_to: senderEmail as string,
            // text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            })
        })
    }
    catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data,
    };

}  