import { Resend } from 'resend';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return {
        success: false,
        error: 'Missing required fields'
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return {
        success: false,
        error: 'Invalid email format'
      }
    }

    // For now, we'll just log the contact request
    // In production, you would integrate with Resend.com or another email service
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      company: body.company || 'Not provided',
      message: body.message,
      timestamp: new Date().toISOString()
    })

    // Check if API key is set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set')
      return {
        success: false,
        error: 'Email service not configured'
      }
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    
    try {
      await resend.emails.send({
        from: 'contact@justindasilva.com', // Use your verified email or domain
        to: 'justindasilva@gmail.com',
        subject: `New Contact from ${body.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${body.message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: body.email // This allows you to reply directly to the sender
      })
      
      console.log('Email sent successfully via Resend')
    } catch (emailError) {
      console.error('Resend email error:', emailError)
      return {
        success: false,
        error: 'Failed to send email: ' + emailError.message
      }
    }

    return {
      success: true,
      message: 'Contact form submitted successfully'
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      error: 'Internal server error'
    }
  }
}) 