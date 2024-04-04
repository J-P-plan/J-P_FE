// https://nextjs.org/docs/advanced-features/custom-server

// server.js
const { createServer } = require("https");
const { parse } = require("url");
const fs = require("fs");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "local.jandp-travel.kro.kr";
const port = 443;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(
    {
      key: fs.readFileSync("./ssl/local.jandp-travel.kro.kr-key.pem"),
      cert: fs.readFileSync("./ssl/local.jandp-travel.kro.kr.pem"),
    },
    async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Error occurred handling", req.url, err);
        res.statusCode = 500;
        res.end("> Server started on https://local.jandp-travel.kro.kr");
      }
    }
  ).listen(port, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log("> Server started on https://local.jandp-travel.kro.kr");
  });
});
