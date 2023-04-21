const http = require ("http")
const {getCharById} = require("./controllers/getCharById")

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")) {
        const id = req.url.split("/").at(-1);

        getCharById(res, +id);
        }
        
        return res
        .writeHead(200, {"Content-type":"application/json"})
        .end(JSON.stringify(characterFound)
)    }
)
.listen(3001, "localhost")