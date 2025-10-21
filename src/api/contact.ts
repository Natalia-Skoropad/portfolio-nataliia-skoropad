// /api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function allowOrigin(origin?: string) {
  const allow = [
    'http://localhost:5173', // Vite dev
    'https://portfolio-nataliia-skoropad.vercel.app', // твій прод/прев'ю домен
    // 'https://your-custom-domain.com',
  ];
  return origin && allow.includes(origin) ? origin : allow[0];
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = allowOrigin(req.headers.origin as string);

  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Access-Control-Allow-Origin', origin);
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    // Vercel @vercel/node парсить JSON автоматично за content-type: application/json
    const { name, phone, message } = (req.body ?? {}) as {
      name?: string;
      phone?: string;
      message?: string;
    };

    // Валідація
    if (
      typeof name !== 'string' ||
      typeof phone !== 'string' ||
      typeof message !== 'string' ||
      name.trim().length < 2 ||
      message.trim().length < 10
    ) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      return res.status(400).json({ ok: false, error: 'Invalid payload' });
    }

    const from = process.env.MAIL_FROM || 'onboarding@resend.dev';
    const toEnv = process.env.MAIL_TO;
    if (!toEnv) throw new Error('MAIL_TO is not set');
    const to = toEnv.split(',').map(s => s.trim()); // можна кілька адрес

    const subject = `Portfolio contact: ${name}`;
    const text = [
      `New message from portfolio:`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `---`,
      message,
    ].join('\n');

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#111">
        <p><strong>New message from portfolio</strong></p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <hr/>
        <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(
          message
        )}</pre>
      </div>
    `;

    await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
      // reply_to — НЕ передаємо, щоб не ловити помилку типів у поточній версії SDK
    });

    res.setHeader('Access-Control-Allow-Origin', origin);
    return res.status(200).json({ ok: true });
  } catch (err: unknown) {
    // типобезпечний catch
    const msg =
      err instanceof Error
        ? err.message
        : typeof err === 'string'
        ? err
        : 'Unknown error';
    console.error('Email send error:', msg);

    res.setHeader('Access-Control-Allow-Origin', origin);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
