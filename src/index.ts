import express from "express";
import path from "path";

const app = express();
const PORT = 8080;

// configure to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.get("/", (request, response) => {
    response.render("index");
});

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
