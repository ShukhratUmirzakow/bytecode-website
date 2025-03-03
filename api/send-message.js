import { Telegraf } from 'telegraf';

// Telegram bot tokenini o'rnating
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export default async function handler(req, res) {
    // CORS headerlarini qo'shamiz
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // OPTIONS so'rovlari uchun
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Faqat POST so'rovlarini qabul qilamiz
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, contact, message } = req.body;

        // Ma'lumotlarni tekshirish
        if (!name || !contact || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Telegram xabarini tayyorlash
        const telegramMessage = `
🔔 Yangi xabar:
👤 Ism: ${name}
📞 Kontakt: ${contact}
💬 Xabar: ${message}
        `;

        // Telegram botga xabar yuborish
        await bot.telegram.sendMessage(CHAT_ID, telegramMessage);

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
} 