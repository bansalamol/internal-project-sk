import nodemailer from 'nodemailer';

export async function sendWelcomeEmails(memberName, memberEmail, memberDetails) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    // HTML email template for the new member
    const memberMessage = {
        from: '"IPO EXPERT Team" <info@ipoexpert.io>',
        to: memberEmail,
        subject: 'Welcome to the IPO EXPERT!',
        html: `
            <html>
                <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                    <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #4CAF50;">Dear, ${memberName}!</h2>
                        <p>Welcome to IPO EXPERT! We're thrilled to have you join us as you take steps toward planning your company's IPO journey.</p>
                        <br>
                        <p>Here are your registration details for your reference:</p>
                        <ul>
                            <li><strong>Email:</strong> ${memberEmail}</li>
                            <li><strong>Role:</strong> ${memberDetails.role}</li>
                            <li><strong>Company:</strong> ${memberDetails.company}</li>
                            <li><strong>Address:</strong> ${memberDetails.address}</li>
                        </ul>
                        <p>One of our team members will reach out to you shortly to assist with any questions or provide further guidance. We're here to ensure your experience with IPO EXPERT is seamless and productive.</p>
                        <br>
                        <p>If you need any immediate assistance, feel free to contact us at any time.</p>
                        <br>
                        <p>Best regards,<br>IPO EXPERT Team</p>
                    </div>
                </body>
            </html>
        `,
    };

    // HTML email template for the admin team
    const currentDate = new Date().toISOString().split('T')[0];
    const teamMessage = {
        from: '"IPO EXPERT Team" <info@ipoexpert.io>',
        to: 'info@ipoexpert.io',
        cc: 'sachin@ipoexpert.io',
        subject: `Lead - ${currentDate} - New Member Registration - ${memberDetails.name}`,
        html: `
            <html>
                <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                    <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #4CAF50;">New Member Registration</h2>
                        <p>Dear Team,</p>
                        <br>
                        <p>We have a new incoming lead! Here are the details of the recently registered member:</p>
                        <ul>
                            <li><strong>Member Name:</strong> ${memberDetails.name}</li>
                            <li><strong>Email Address:</strong> ${memberDetails.email}</li>
                            <li><strong>Mobile No:</strong> ${memberDetails.mobile}</li>
                            <li><strong>Registration Date:</strong> ${new Date().toLocaleDateString()}</li>
                            <li><strong>Role:</strong> ${memberDetails.role}</li>
                            <li><strong>Company:</strong> ${memberDetails.company}</li>
                            <li><strong>Address:</strong> ${memberDetails.address}</li>
                        </ul>
                        <p>Please ensure we promptly follow up with the member to understand their requirements and offer the necessary support. One of our team members should contact them soon to welcome them and provide assistance.</p>
                        <br>
                        <p>Best regards,<br>IPO EXPERT Team</p>
                    </div>
                </body>
            </html>
        `,
    };

    try {
        // Send emails concurrently
        await Promise.all([
            transporter.sendMail(memberMessage),
            transporter.sendMail(teamMessage),
        ]);
        console.log('Emails sent successfully');
    } catch (error) {
        console.error('Error sending emails:', error);
        throw error;
    }
}
