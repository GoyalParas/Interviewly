import express from 'express';
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import path from "path";

const app = express();

const __dirname = path.resolve();

console.log(`PORT: ${process.env.PORT}`);
console.log(`DB_URL: ${process.env.DB_URL}`);

app.get('/health', (req, res) => {
    res.status(200).json({"msg": "api is up and running"});
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();