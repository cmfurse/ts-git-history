import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { GithubClient } from '../GithubClient';

@Controller('api')
export class ApiController {
    @Get('history')
    private async getMessage(req: Request, res: Response) {
        Logger.Info('Retrieving Commit History from GitHub');

        try {
            const data = await new GithubClient().getHistory();
            res.status(200).json(data);
        } catch (err) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.status(500).json({error: err.message || err});
        }
    }
}
