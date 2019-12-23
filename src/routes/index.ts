import * as express from "express";
import * as api from "./api";

export const register = (app: express.Application) => {
    app.get("/", (request: any, response) => {
        response.render("index");
    });

    api.register(app);
};
