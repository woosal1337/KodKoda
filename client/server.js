const express = require('express')
require('dotenv').config()
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//const proxy = httpProxy.createProxyServer();

const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = {
  optionsSuccessStatus: 200,
};

app.prepare().then(() => {
    const server = express();

    server.use(cors(corsOptions));
    //server.use(bodyParser.json());
    //server.use(bodyParser.urlencoded({ extended: true }));

    /*
    server.get("/login", (req, res) => {
      app.render(req, res, "/login", {})
    })
    */
   
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`)
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
