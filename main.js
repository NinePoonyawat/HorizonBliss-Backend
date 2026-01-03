import { config } from "dotenv";
import app from "./src/app.js";

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
