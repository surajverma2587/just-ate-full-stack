const express = require("express");
const cors = require("cors");

const apiRoutes = require("./routes/apiRoutes");

const PORT = 3000;

const app = express();

app.use(cors());
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
