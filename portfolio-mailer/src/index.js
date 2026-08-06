/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Resend } from 'resend';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', 
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Added GET here
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env, ctx) {
    // 1. Handle CORS Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // 2. Health Check Route (GET)
    if (request.method === 'GET') {
      return new Response(JSON.stringify({ message: 'Server is active' }), { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      });
    }

    // 3. Reject non-POST requests for the email route
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const body = await request.json();
      const resend = new Resend(env.RESEND_API_KEY);

      // 4. Email to Portfolio Owner
      const sendNotification = resend.emails.send({
        from: 'Portfolio Alerts <onboarding@resend.dev>', 
        to: 'bireswaarkundu@gmail.com',
        subject: `New Custom Project Brief from ${body.name}`,
        reply_to: body.email,
        html: `
          <h3>New Project Brief Received</h3>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Message:</strong></p>
          <p>${body.message}</p>
        `,
      });

      // 5. Unbranded Auto-Reply to Client
      const sendAutoReply = resend.emails.send({
        from: 'Bireswaar Kundu <onboarding@resend.dev>', 
        to: body.email,
        subject: 'Custom Quote Request Received',
        html: `
          <p>Hi ${body.name},</p>
          <p>Thank you for reaching out! I have received your custom project brief and will review your requirements shortly.</p>
          <p>I will reply directly to this email within 24 hours.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Bireswaar Kundu</strong></p>
        `,
      });

      await Promise.all([sendNotification, sendAutoReply]);

      return new Response(JSON.stringify({ success: true }), { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      });

    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      });
    }
  },
};