/** @format */

// import cors from "cors";
// import env from "dotenv";
// import express from "express";
// import userRouter from "./routers/user.router.js";
// import categoryRouter from "./routers/category.router.js";
// import currencyRouter from "./routers/currency.router.js";

// env.config({ path: "./.env" });

// const app = express();
// const port = process.env.PORT;

// app.use(cors());
// app.use(express.json());

// app.use("/api", userRouter);
// app.use("/api", categoryRouter);
// app.use("/api", currencyRouter);

// app.listen(port, console.log(`http://localhost:${port}`));

import cors from "cors";
import env from "dotenv";
import express from "express";
import userRouter from "./routers/user.router.js";
import categoryRouter from "./routers/category.router.js";
import currencyRouter from "./routers/currency.router.js";

// .env файлыг унших
env.config({ path: "./.env" });

const app = express();
const port = process.env.PORT; // Портын дугаар

// CORS болон JSON-ийг тохируулах
app.use(cors());
app.use(express.json());

// API маршрутуудыг тохируулах
app.use("/api", userRouter);
app.use("/api", categoryRouter);
app.use("/api", currencyRouter);

// Серверийг ажиллуулах
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
