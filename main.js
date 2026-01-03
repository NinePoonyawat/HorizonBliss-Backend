import app from "./src/app.js";
import os from "os";

console.log("=== STARTUP TRACE ===");
console.log("timestamp:", new Date().toISOString());
console.log("process.pid:", process.pid);
console.log("process.ppid:", process.ppid);
console.log("node argv:", process.argv);
console.log("npm lifecycle event:", process.env.npm_lifecycle_event || null);
console.log("RAILWAY envs:", {
  RAILWAY_ENV: process.env.RAILWAY_ENV,
  RAILWAY_SERVICE_ID: process.env.RAILWAY_SERVICE_ID,
  RAILWAY_ID: process.env.RAILWAY_ID,
});
console.log("=== END STARTUP TRACE ===");

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;

if (!process.env.PORT) {
  console.warn("⚠️ PORT not provided, fallback to 8000");
}

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

console.log("🔥 main.js started");

server.keepAliveTimeout = 65000;
server.headersTimeout = 66000;

process.on("SIGTERM", () => {
  console.log("❌ SIGTERM received - Railway is killing the container");
  process.exit(0);
});

setInterval(() => {
  console.log("🫀 still alive");
}, 3000);
