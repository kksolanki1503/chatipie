const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
const app = express();
app.use(express.json());
const data = [
  { id: "1", name: "kamlesh", Email: "kksolanki@gmail.com" },
  { id: "2", name: "ramesh kumar", Email: "rameshsolanki@gmail.com" },
  { id: "3", name: "suresh kumar", Email: "sureshsolanki@gmail.com" },
];

connectDB();

app.get("/", (req, res) => {
  res.send("running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port${PORT}`.yellow.bold));
