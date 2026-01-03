import QRCode from "qrcode";
import fs from "fs";
import path from "path";

const rooms = ["101", "102", "103", "104", "105", "106"];
const baseUrl = "http://localhost:3000/qr";

const outputDir = path.resolve("./qrs");

// สร้างโฟลเดอร์ถ้ายังไม่มี
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  for (const room of rooms) {
    const url = `${baseUrl}/${room}`;
    const filePath = path.join(outputDir, `room-${room}.png`);

    await QRCode.toFile(filePath, url, { width: 300 });
    console.log("✅ Generated:", filePath);
  }
})();
