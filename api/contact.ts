import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// ================================================================

const resend = new Resend(process.env.RESEND_API_KEY as string);

const FROM = process.env.CONTACT_FROM || 'Portfolio <onboarding@resend.dev>';
const TO = process.env.CONTACT_TO as string;

function esc(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ================================================================

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  const { name, phone, message } = req.body || {};
  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  const subject = `Portfolio contact: ${name}`;
  const html = `
    <h2>New message from portfolio</h2>
    <p><b>Name:</b> ${esc(name)}</p>
    <p><b>Phone:</b> ${esc(phone)}</p>
    <p><b>Message:</b></p>
    <pre style="white-space:pre-wrap">${esc(message)}</pre>
  `;

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      subject,
      html,
      replyTo: 'skoropad_natalia@ukr.net',
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
}
