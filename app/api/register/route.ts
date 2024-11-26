import { createClient } from "@/libs/supabase/client";
import { sendWelcomeEmails } from "@/mailer";
// const formData = require('form-data');

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

        try {
            await sendWelcomeEmails(name, email, { name, email, role, company, address, mobile });
        } catch (emailError) {
            console.error("Error sending emails:", emailError);
            return new Response(JSON.stringify({ message: "Registration successful. Email not sent." }), {
                status: 500,
            });
        }


        // Return success response
        return new Response(JSON.stringify({ message: "Registration successful!" }), {
            status: 200,
        });

    } catch (error) {
        console.log('General Error:', error);
        return new Response(JSON.stringify({ message: "An unexpected error occurred." }), {
            status: 500,
        });
    }
}
