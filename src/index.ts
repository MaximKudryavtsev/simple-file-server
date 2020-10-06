import * as express from "express";
import * as http from "http";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as path from "path";
import * as formidable from "formidable";

const app = express();
const server = http.createServer(app);
const jsonParser = bodyParser.urlencoded({ extended: false });


app.use(jsonParser);
app.use(cors());
app.use(express.json());

app.post("/upload", ((req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = `${path.resolve()}/files`
}))

server.listen(8080, () => {
    console.log('Server listening on http://localhost:8080/ ...');
});
