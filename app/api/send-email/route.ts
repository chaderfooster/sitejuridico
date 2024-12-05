export const dynamic = 'force-static';

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend('re_4xt1FbbQ_79bXfvRRdAcQQSZ2XjvGEgcm');

export async function POST(request: NextRequest) {
  // Enable CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle OPTIONS request for CORS preflight
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: corsHeaders
    });
  }

  try {
    // Parse request body
    const contentType = request.headers.get('content-type');
    console.log('Content-Type:', contentType);

    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return NextResponse.json({ 
        error: 'Invalid JSON',
        details: parseError instanceof Error ? parseError.message : String(parseError)
      }, { 
        status: 400,
        headers: corsHeaders 
      });
    }

    console.log('Received body:', JSON.stringify(body, null, 2));

    const { subject, html } = body;

    // Validate input
    if (!subject || !html) {
      console.error('Missing required email parameters', { subject, html });
      return NextResponse.json({ 
        error: 'Missing required email parameters',
        details: { subject, html }
      }, { 
        status: 400,
        headers: corsHeaders 
      });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'Soares Lacerda <onboarding@resend.dev>',
        to: 'jvscadvogado@gmail.com',
        subject: subject,
        html: html
      });

      console.log('Resend response:', { data, error });

      if (error) {
        console.error('Resend email sending error:', error);
        return NextResponse.json({ 
          error: 'Failed to send email',
          details: error 
        }, { 
          status: 500,
          headers: corsHeaders 
        });
      }

      return NextResponse.json({ data }, { 
        status: 200,
        headers: corsHeaders 
      });
    } catch (sendError) {
      console.error('Unexpected error in email sending:', sendError);
      return NextResponse.json({ 
        error: 'Failed to send email',
        details: sendError instanceof Error ? sendError.message : sendError 
      }, { 
        status: 500,
        headers: corsHeaders 
      });
    }
  } catch (error) {
    console.error('Unexpected error in email route:', error);
    return NextResponse.json({ 
      error: 'Unexpected error',
      details: error instanceof Error ? error.message : error 
    }, { 
      status: 500,
      headers: corsHeaders 
    });
  }
}
