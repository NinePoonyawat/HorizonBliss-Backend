import { config } from "dotenv";
import app from "./src/app.js";

config();
const PORT = Number(process.env.PORT);

if (!process.env.PORT) {
  console.warn("⚠️ PORT not provided, fallback to 8000");
}

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
