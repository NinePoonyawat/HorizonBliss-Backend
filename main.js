import { config } from "dotenv";
import app from "./src/app.js";

const PORT = Number(process.env.PORT);

if (!PORT) {
  console.error("❌ PORT is not defined");
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
