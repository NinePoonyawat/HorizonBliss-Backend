import jwt from "jsonwebtoken";

const SESSION_MINUTES = 60;

const authService = {
  /**
   * QR token → ใช้แค่ encode roomNo (ไม่หมดอายุ)
   * ใช้ตอน generate QR (ครั้งเดียว)
   */
  generateQrToken(roomNo) {
    return jwt.sign({ roomNo, type: "QR" }, process.env.JWT_SECRET);
  },

  /**
   * verify QR token ตอน scan
   */
  verifyQrToken(token) {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (payload.type !== "QR") {
      throw new Error("Invalid QR token");
    }

    return payload.roomNo;
  },

  /**
   * สร้าง session token (60 นาที)
   */
  createSession(roomNo) {
    const expiresIn = 60 * 60;

    console.log(roomNo);

    const token = jwt.sign(
      { roomNo, type: "SESSION" },
      process.env.JWT_SECRET,
      { expiresIn }
    );

    console.log(token);

    return {
      token,
      roomNo,
      expiresAt: Date.now() + expiresIn * 1000,
    };
  },

  /**
   * ใช้กับ middleware
   */
  verifySession(token) {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (payload.type !== "SESSION") {
      throw new Error("Invalid session token");
    }

    return payload;
  },
};

export default authService;
