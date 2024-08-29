const http = require("http");
import app from "./app";
import mongocoonnect from "./services/DB/mongo";
const server = http.createServer(app);

const PORT = process.env.PORT || 3000

async function startServer() {
  // await mongocoonnect();
  server.listen(PORT, () => {
    console.log("Server is running on http://localhost:"+PORT);
  });
}
startServer();
