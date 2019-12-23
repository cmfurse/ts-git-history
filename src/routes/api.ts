import * as express from "express";
import * as githubClient from "../github-client";

export const register = ( app: express.Application ) => {
    app.get("/api/history", async (req: any, resp) => {
        try {
            const data = await githubClient.getHistory();
            resp.json(data);
        } catch (err) {
            // tslint:disable-next-line:no-console
            console.error(err);
            resp.json( { error: err.message || err } );
        }
    });
};
