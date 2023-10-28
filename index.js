const http = require("node:http");
const app = require("./src/app");

require("dotenv").config();
require("./src/config/config.db");

const server = http.createServer(app);

const PORT = process.env.PORT ?? 3000;

server.listen(PORT);

server.on("listening", () => {
  console.log(`Escuchando el puerto ${PORT}`);
});

server.on("error", (error) => {
  console.log(error);
});
