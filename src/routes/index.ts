import * as express from "express";

export const register = (app: express.Application) => {
    app.get("/", (request: any, response) => {
        response.render("index");
    });

    app.get( "/guitars", ( request: any, response ) => {
        response.render( "guitars" );
    });
};
