// Telegram bot uchun serverless funksiya
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export default async function handler(req, res) {
    // CORS sozlamalari
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // OPTIONS so'rovi uchun
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Faqat POST so'rovlarni qabul qilish
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, contact, message } = req.body;

        // Ma'lumotlarni tekshirish
        if (!name || !contact || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Telegram xabarini tayyorlash
        const telegramMessage = `
<b>Yangi xabar!</b>

👤 Ism: ${name}
📞 Kontakt: ${contact}
💬 Xabar: ${message}
📅 Sana: ${new Date().toLocaleString()}
        `;

        // Telegram API'ga so'rov yuborish
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML'
            }),
        });

        if (!response.ok) {
            throw new Error('Telegram API error');
        }

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
} 