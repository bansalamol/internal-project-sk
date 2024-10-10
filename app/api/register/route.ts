import { createClient } from "@/libs/supabase/client";
// import Mailgun from 'mailgun.js';
const formData = require('form-data');

export async function POST(request: Request) {
    const supabase = createClient();
    const { name, mobile, email, role, company, address } = await request.json();

    try {
        // Check for duplicate mobile number
        const { data: mobileCheckData, error: mobileCheckError } = await supabase
            .from("leads")
            .select("mobile")
            .eq("mobile", mobile);

        // Check for duplicate email
        const { data: emailCheckData, error: emailCheckError } = await supabase
            .from("leads")
            .select("email")
            .eq("email", email);

        // Handle mobile number check error
        if (mobileCheckError) {
            return new Response(JSON.stringify({ message: "Failed to check mobile number." }), {
                status: 500,
            });
        }

        // Handle email check error
        if (emailCheckError) {
            return new Response(JSON.stringify({ message: "Failed to check email." }), {
                status: 500,
            });
        }

        // Explicitly check for mobile number existence
        if (mobileCheckData && mobileCheckData.length > 0) {
            return new Response(JSON.stringify({ message: "Mobile number already registered." }), {
                status: 400,
            });
        }

        // Explicitly check for email existence
        if (emailCheckData && emailCheckData.length > 0) {
            return new Response(JSON.stringify({ message: "Email already registered." }), {
                status: 400,
            });
        }

        // Insert new lead if no duplicates found
        const { error: insertError } = await supabase
            .from("leads")
            .insert([{ name, mobile, email, role, company, address }]);

        // Handle insert error
        if (insertError) {
            console.log('Insert Error:', insertError);
            if (insertError.code === '23505') { // PostgreSQL unique violation error code
                if (insertError.message.includes('email')) {
                    return new Response(JSON.stringify({ message: "Email already registered." }), {
                        status: 400,
                    });
                } else if (insertError.message.includes('mobile')) {
                    return new Response(JSON.stringify({ message: "Mobile number already registered." }), {
                        status: 400,
                    });
                }
            }

            return new Response(JSON.stringify({ message: "Registration failed. Please try again." }), {
                status: 400,
            });
        }

        // Uncomment the line below to send welcome emails after successful insertion
        // await sendWelcomeEmails(name, email, { name, email, role, company, address });

        // Return success response
        return new Response(JSON.stringify({ message: "Registration successful!" }), {
            status: 200,
        });

    } catch (error) {
        console.log('General Error:', error); // Log the general error
        return new Response(JSON.stringify({ message: "Registration successful. Email not sent." }), {
            status: 500,
        });
    }
}

// Uncomment this function when you're ready to send emails
// async function sendWelcomeEmails(memberName: string, memberEmail: string, memberDetails: any) {
//     const mailgun = new Mailgun(formData);
//     const mg = mailgun.client({
//         username: 'api',
//         key: process.env.MAILGUN_API_KEY || '1b5736a5-771eb74d',
//     });

//     // Email to new member
//     const memberMessage = {
//         from: 'IPO EXPERT Team <info@ipoexpert.io>',
//         to: memberEmail,
//         subject: 'Welcome to the IPO EXPERT!',
//         text: `Hi ${memberName},\n\nWelcome to the IPO EXPERT! We’re excited to have you with us.\n\nBest,\nIPO EXPERT Team`,
//     };

//     // Email to IPO EXPERT team
//     const teamMessage = {
//         from: 'IPO EXPERT Team <info@ipoexpert.io>',
//         to: 'info@ipoexpert.io',
//         cc: 'sachin@ipoexpert.io',
//         subject: 'New IPO EXPERT Member Registration',
//         text: `Hi Team,\n\nI hope this message finds you well. Below are the registration details for our new member in the IPO EXPERT:\n\n
//         Member Name: ${memberDetails.name}\n
//         Email Address: ${memberDetails.email}\n
//         Registration Date: ${new Date().toLocaleDateString()}\n
//         Role: ${memberDetails.role}\n
//         Company: ${memberDetails.company}\n
//         Address: ${memberDetails.address}\n
//         \nPlease update our records accordingly and ensure they receive all necessary welcome materials.\n\nBest,\nIPO EXPERT Team`,
//     };

//     // Send both emails
//     await Promise.all([
//         mg.messages.create('ipoexpert.io', memberMessage),
//         mg.messages.create('ipoexpert.io', teamMessage),
//     ]);
// }
