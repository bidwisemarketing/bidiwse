import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data: any = {};

    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    }

    const { name, email, website, phone, service, message, botField } = data;

    // 1. Honeypot check
    if (botField) {
      // Silently accept bot submission without processing
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return new Response(JSON.stringify({ success: false, error: 'Please provide a valid full name.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return new Response(JSON.stringify({ success: false, error: 'Please provide a valid work email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!website || typeof website !== 'string' || website.trim().length < 4) {
      return new Response(JSON.stringify({ success: false, error: 'Please provide a valid website or company URL.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return new Response(JSON.stringify({ success: false, error: 'Please provide brief details about your project.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 3. Process submission
    // Clean, sanitize values
    const sanitizedSubmission = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 150),
      website: website.trim().slice(0, 200),
      phone: phone ? String(phone).trim().slice(0, 50) : 'Not provided',
      service: service ? String(service).slice(0, 100) : 'General',
      message: message.trim().slice(0, 3000),
      timestamp: new Date().toISOString(),
      source: 'BidWise Marketing Contact Form',
    };

    console.log('[BidWise Marketing] New Verified Project Inquiry:', JSON.stringify(sanitizedSubmission, null, 2));

    // 1. Direct Form Forwarder to mohammadbilal671@gmail.com via FormSubmit.co
    try {
      await fetch('https://formsubmit.co/ajax/mohammadbilal671@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://bidwise.marketing',
          'Referer': 'https://bidwise.marketing/contact/',
        },
        body: JSON.stringify({
          _subject: `[BidWise Marketing] New Project Inquiry: ${sanitizedSubmission.name} (${sanitizedSubmission.service})`,
          _replyto: sanitizedSubmission.email,
          _autoresponse: 'Thank you for contacting BidWise Marketing! Our certified Google Partner team has received your project inquiry and will follow up within 24 business hours.',
          _template: 'table',
          _captcha: 'false',
          'Client Name': sanitizedSubmission.name,
          'Work Email': sanitizedSubmission.email,
          'Company Website': sanitizedSubmission.website,
          'Phone Number': sanitizedSubmission.phone,
          'Requested Service': sanitizedSubmission.service,
          'Project Details': sanitizedSubmission.message,
          'Submitted At': sanitizedSubmission.timestamp,
          'Source Form': sanitizedSubmission.source,
        }),
      });
    } catch (fsErr) {
      console.warn('[BidWise Marketing] FormSubmit forwarder error:', fsErr);
    }

    // 2. If RESEND_API_KEY is present in production env, send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'BidWise Inquiries <notifications@bidwise.marketing>',
            to: ['mohammadbilal671@gmail.com', 'info@bidwise.marketing'],
            reply_to: sanitizedSubmission.email,
            subject: `New Project Inquiry: ${sanitizedSubmission.name} (${sanitizedSubmission.service})`,
            html: `
              <h2>New Growth Inquiry from BidWise Marketing</h2>
              <p><strong>Name:</strong> ${sanitizedSubmission.name}</p>
              <p><strong>Email:</strong> ${sanitizedSubmission.email}</p>
              <p><strong>Website:</strong> ${sanitizedSubmission.website}</p>
              <p><strong>Phone:</strong> ${sanitizedSubmission.phone}</p>
              <p><strong>Service:</strong> ${sanitizedSubmission.service}</p>
              <p><strong>Message:</strong></p>
              <p>${sanitizedSubmission.message.replace(/\n/g, '<br>')}</p>
              <hr />
              <p><small>Received at ${sanitizedSubmission.timestamp}</small></p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('[BidWise Marketing] Email delivery notification failed:', emailErr);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your project inquiry has been received. Our senior team will follow up promptly.',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('[BidWise Marketing] Contact API Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An internal error occurred processing your request. Please email info@bidwise.marketing.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
