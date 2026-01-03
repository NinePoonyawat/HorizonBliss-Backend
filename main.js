import app from "./src/app.js";

const PORT = Number(process.env.PORT);

if (!process.env.PORT) {
  console.warn("⚠️ PORT not provided, fallback to 8000");
}

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

setInterval(() => {}, 1000);
