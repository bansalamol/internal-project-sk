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
                        <h2 style="color: #4CAF50;">Welcome to IPO EXPERT, ${memberName}!</h2>
                        <p>We’re excited to have you with us. Below are your registration details:</p>
                        <ul>
                            <li><strong>Email:</strong> ${memberEmail}</li>
                            <li><strong>Role:</strong> ${memberDetails.role}</li>
                            <li><strong>Company:</strong> ${memberDetails.company}</li>
                            <li><strong>Address:</strong> ${memberDetails.address}</li>
                        </ul>
                        <p>Best regards,<br>IPO EXPERT Team</p>
                    </div>
                </body>
            </html>
        `,
    };

    // HTML email template for the admin team
    const teamMessage = {
        from: '"IPO EXPERT Team" <info@ipoexpert.io>',
        to: 'info@ipoexpert.io',
        cc: 'sachin@ipoexpert.io',
        subject: 'New IPO EXPERT Member Registration',
        html: `
            <html>
                <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                    <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #4CAF50;">New Member Registration</h2>
                        <p>A new member has registered with the following details:</p>
                        <ul>
                            <li><strong>Member Name:</strong> ${memberDetails.name}</li>
                            <li><strong>Email Address:</strong> ${memberDetails.email}</li>
                            <li><strong>Registration Date:</strong> ${new Date().toLocaleDateString()}</li>
                            <li><strong>Role:</strong> ${memberDetails.role}</li>
                            <li><strong>Company:</strong> ${memberDetails.company}</li>
                            <li><strong>Address:</strong> ${memberDetails.address}</li>
                        </ul>
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
