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

    const { name, email, website, runningAds, spendBand, primaryIssue, botField } = data;

    // 1. Honeypot anti-spam check
    if (botField) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter your name.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter a valid work email.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!website || typeof website !== 'string' || website.trim().length < 4) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter your website URL.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 3. Process audit request
    const sanitizedAudit = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 150),
      website: website.trim().slice(0, 200),
      runningAds: runningAds ? String(runningAds).slice(0, 50) : 'Not specified',
      spendBand: spendBand ? String(spendBand).slice(0, 50) : 'Not specified',
      primaryIssue: primaryIssue ? String(primaryIssue).trim().slice(0, 500) : 'General Audit',
      timestamp: new Date().toISOString(),
      source: 'BidWise Marketing Free Audit Request',
    };

    console.log('[BidWise Marketing] New FREE Google Ads Audit Request:', JSON.stringify(sanitizedAudit, null, 2));

    // 1. Direct Form Forwarder to mohammadbilal671@gmail.com via FormSubmit.co
    try {
      await fetch('https://formsubmit.co/ajax/mohammadbilal671@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://bidwise.marketing',
          'Referer': 'https://bidwise.marketing/free-google-ads-audit/',
        },
        body: JSON.stringify({
          _subject: `[BidWise Marketing] FREE Google Ads Audit Request: ${sanitizedAudit.name} (${sanitizedAudit.website})`,
          _replyto: sanitizedAudit.email,
          _autoresponse: 'Thank you for requesting a Free Google Ads Account Audit with BidWise Marketing! Our certified Google Partner team has received your request and will follow up with account review instructions within 24 business hours.',
          _template: 'table',
          _captcha: 'false',
          'Applicant Name': sanitizedAudit.name,
          'Work Email': sanitizedAudit.email,
          'Website URL': sanitizedAudit.website,
          'Currently Running Ads': sanitizedAudit.runningAds,
          'Monthly Ad Spend': sanitizedAudit.spendBand,
          'Primary Goal / Bottleneck': sanitizedAudit.primaryIssue,
          'Submitted At': sanitizedAudit.timestamp,
          'Source Form': sanitizedAudit.source,
        }),
      });
    } catch (fsErr) {
      console.warn('[BidWise Marketing] FormSubmit audit forwarder error:', fsErr);
    }

    // 2. Optional email dispatch if API key exists
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
            from: 'BidWise Audits <notifications@bidwise.marketing>',
            to: ['mohammadbilal671@gmail.com', 'info@bidwise.marketing'],
            reply_to: sanitizedAudit.email,
            subject: `FREE Google Ads Audit Request: ${sanitizedAudit.name} (${sanitizedAudit.website})`,
            html: `
              <h2>New Free Google Ads Audit Request</h2>
              <p><strong>Name:</strong> ${sanitizedAudit.name}</p>
              <p><strong>Email:</strong> ${sanitizedAudit.email}</p>
              <p><strong>Website:</strong> ${sanitizedAudit.website}</p>
              <p><strong>Currently Running Ads:</strong> ${sanitizedAudit.runningAds}</p>
              <p><strong>Monthly Spend Band:</strong> ${sanitizedAudit.spendBand}</p>
              <p><strong>Primary Challenge:</strong> ${sanitizedAudit.primaryIssue}</p>
              <hr />
              <p><small>Received at ${sanitizedAudit.timestamp}</small></p>
            `,
          }),
        });
      } catch (e) {
        console.error('[BidWise Marketing] Audit email notification error:', e);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your Google Ads audit request has been accepted. Our senior certified Google Partner team will follow up with account review instructions.',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('[BidWise Marketing] Audit API Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An internal error occurred. Please email info@bidwise.marketing directly.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
