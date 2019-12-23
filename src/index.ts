import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (request, response) => {
    response.send("Hello World!");
});

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
