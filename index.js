const http = require("node:http");

require("dotenv").config();

const server = http.createServer();

const PORT = process.env.PORT ?? 3000;

server.listen(PORT);

server.on("listening", () => {
  console.log(`Escuchando el puerto ${PORT}`);
});

server.on("error", (error) => {
  console.log(error);
});
