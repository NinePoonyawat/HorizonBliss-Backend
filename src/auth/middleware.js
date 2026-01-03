import authService from "./services.js";

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const payload = authService.verifySession(token);
    req.roomNo = payload.roomNo;
    next();
  } catch {
    res.status(401).json({ message: "Session expired" });
  }
}
