import authService from "./services.js";

const authController = {
  enterRoom(req, res) {
    const { roomNo } = req.body;

    if (!roomNo) {
      return res.status(400).json({ message: "roomNo required" });
    }

    const session = authService.createSession(roomNo);
    res.json(session);
  },
};

export default authController;
