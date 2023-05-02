import express from "express";
import { PORT } from "./config.js";
import { limiter } from "./limiter.js";

import dateRouter from "./routes/date.routes.js";

const app = express();

app.use(express.json());

app.use(limiter);
app.use(dateRouter);
app.listen(PORT);
console.log(`server is running on port: ${PORT}`);
