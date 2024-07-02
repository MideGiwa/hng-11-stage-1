const express = require("express");
const app = express();
const cors = require("cors");
const helloRouter = require("./routes/helloRoute");
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use("/api", helloRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});