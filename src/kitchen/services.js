const kitchenService = {};

import dotenv from "dotenv";
dotenv.config();
const TELEGRAM_API = "https://api.telegram.org";

kitchenService.order = async function (order) {
  const text = `
🍽️ *ออเดอร์ใหม่*
🏠 ห้อง: ${order.roomNo}

${order.items
  .map(
    (i) =>
      `• ${i.name} x${i.qty}` +
      (i.options?.foodType ? ` | รูปแบบ: ${i.options.foodType}` : "") +
      (i.options?.soup ? ` | น้ำ: ${i.options.soup}` : "") +
      (i.options?.spicy ? ` | เผ็ด: ${i.options.spicy}` : "") +
      (i.options?.note ? `\n   📝 ${i.options.note}\n` : "\n")
  )
  .join("\n")}

💰 รวม: *${order.total} บาท*
`;

  console.log(text);
  console.log(process.env.TELEGRAM_BOT_TOKEN);
  console.log(process.env.TELEGRAM_CHAT_ID);

  await fetch(
    `${TELEGRAM_API}/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    }
  );
};

export default kitchenService;
