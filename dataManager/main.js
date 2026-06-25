import express from 'express';

import fs from "fs";

import path from 'path';

import { networkInterfaces } from 'os';


const app = express()
const port = 3000;
const __dirname = import.meta.dirname;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "100mb" }));

// USER ---------------------------------------------------------------------- USER


// Web Server ------------------------------------------------------------------------ Web Server

app.get("*xd", (req, res) => {
    let req_dir = path.join(__dirname, "/public", req.path);

    res.sendFile(fs.existsSync(req_dir) ? req_dir : __dirname + "/public/pages/not_found.html");
});



// Server debug and devel
app.listen(port, async () => {
    console.log(`WebServer listening on:
${Object.values(networkInterfaces())
            .map(
                v => v
                    .filter(a => a.family === 'IPv4')
                    .map(a => "- http://" + a.address)
                    .join("\n")
            )
            .join("\n")
        }`);
});
