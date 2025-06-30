import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, name, message, time, frequency } = await request.json()

    // Validate required fields
    if (!email || !name || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Create email content
    const emailSubject = "Daily Exercise Reminder - Allwin Physiotherapy Clinic"
    const emailBody = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 20px 0; }
            .exercise-tips { background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 14px; }
            .btn { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
            .exercise-list { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .exercise-item { padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
            .exercise-item:last-child { border-bottom: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏥 Allwin Physiotherapy Clinic</h1>
              <h2>Daily Exercise Reminder</h2>
              <p>Your path to recovery continues today!</p>
            </div>
            
            <div class="content">
              <h3>Hello ${name}! 👋</h3>
              
              <div class="message-box">
                <h4>💪 Today's Motivation</h4>
                <p>${message}</p>
              </div>

              <div class="exercise-tips">
                <h4>🎯 Quick Exercise Tips</h4>
                <ul>
                  <li><strong>Start Slowly:</strong> Begin with gentle movements and gradually increase intensity</li>
                  <li><strong>Listen to Your Body:</strong> Stop if you experience pain or discomfort</li>
                  <li><strong>Stay Consistent:</strong> Regular practice leads to better results</li>
                  <li><strong>Breathe Properly:</strong> Don't hold your breath during exercises</li>
                </ul>
              </div>

              <div class="exercise-list">
                <h4>📋 Recommended Daily Exercises</h4>
                <div class="exercise-item">
                  <strong>🐱 Cat-Cow Stretch</strong> - 5-10 minutes<br>
                  <small>Great for spinal mobility and back pain relief</small>
                </div>
                <div class="exercise-item">
                  <strong>🔄 Neck Rolls</strong> - 3-5 minutes<br>
                  <small>Reduces neck stiffness and improves range of motion</small>
                </div>
                <div class="exercise-item">
                  <strong>💪 Wall Push-Ups</strong> - 5-8 minutes<br>
                  <small>Strengthens shoulders and improves posture</small>
                </div>
                <div class="exercise-item">
                  <strong>🤲 Knee to Chest Stretch</strong> - 5-10 minutes<br>
                  <small>Relieves lower back tension and hip tightness</small>
                </div>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://allwinphysiotherapy.com/exercises" class="btn">
                  🎥 Watch Exercise Videos
                </a>
              </div>

              <div class="exercise-tips">
                <h4>⚠️ Important Safety Reminders</h4>
                <ul>
                  <li>These exercises are for educational purposes only</li>
                  <li>Consult with our physiotherapists before starting any new exercise</li>
                  <li>Stop immediately if you experience increased pain</li>
                  <li>Contact us if you have any questions or concerns</li>
                </ul>
              </div>

              <div style="background: white; padding: 20px; border-radius: 8px; text-align: center;">
                <h4>📞 Need Help?</h4>
                <p><strong>Call us:</strong> +91 93637 27207</p>
                <p><strong>Email:</strong> allwin.physiotherpy@gmail.com</p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/919363727207">Click to chat</a></p>
                <p><strong>Address:</strong> 17, 7th St, Perumalpuram, Palayamkottai, Tirunelveli - 627007</p>
              </div>
            </div>

            <div class="footer">
              <p>This reminder is scheduled for <strong>${time}</strong> - <strong>${frequency}</strong></p>
              <p>© 2024 Allwin Physiotherapy Clinic. All rights reserved.</p>
              <p>Licensed Healthcare Facility | Professional Physiotherapy Services</p>
              <p style="font-size: 12px; color: #999;">
                You're receiving this because you enabled exercise reminders. 
                You can disable these in your exercise settings.
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // In a real application, you would integrate with an email service like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Resend
    // - Mailgun

    // For demonstration, we'll simulate sending the email
    console.log("Email would be sent to:", email)
    console.log("Subject:", emailSubject)
    console.log("Content length:", emailBody.length)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In production, replace this with actual email sending logic:
    /*
    const emailResult = await sendEmail({
      to: email,
      subject: emailSubject,
      html: emailBody,
      from: 'noreply@allwinphysiotherapy.com'
    })
    */

    return NextResponse.json({
      success: true,
      message: "Exercise reminder email sent successfully",
      emailSent: true,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error sending exercise reminder email:", error)
    return NextResponse.json({ error: "Failed to send exercise reminder email" }, { status: 500 })
  }
}
