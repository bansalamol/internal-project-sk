import { createClient } from "@/libs/supabase/client";

export async function POST(request: Request) {
    const supabase = createClient();
    const { name, mobile, email, role, company, address } = await request.json();

    try {
        // Check for duplicate mobile number
        const { data: mobileCheckData, error: mobileCheckError } = await supabase
            .from("leads")
            .select("mobile")
            .eq("mobile", mobile);

        console.log('Mobile Check Data:', mobileCheckData); // Log the mobile data to check response
        
        // Check for duplicate email
        const { data: emailCheckData, error: emailCheckError } = await supabase
            .from("leads")
            .select("email")
            .eq("email", email);

        console.log('Email Check Data:', emailCheckData); // Log the email data to check response
        
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
            console.log('Insert Error:', insertError); // Log the insert error
            return new Response(JSON.stringify({ message: "Registration failed. Please try again." }), {
                status: 400,
            });
        }

        // Return success response
        return new Response(JSON.stringify({ message: "Registration successful!" }), {
            status: 200,
        });

    } catch (error) {
        console.log('General Error:', error); // Log the general error
        return new Response(JSON.stringify({ message: "Registration failed. Please try again." }), {
            status: 500,
        });
    }
}
