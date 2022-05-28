import { Request, Response } from 'express';

import  { connect } from '../database';

import { Game } from '../interface/Game';

export async function getGames(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const games = await conn.query('SELECT * FROM games;');
    return res.json(games[0]);
}

export async function createGame(req: Request, res: Response): Promise<void> {
    const newGame: Game = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO games set ?;', [newGame]);
    res.json({message: 'Game Saved'});
};

export async function getGame(req: Request, res: Response): Promise<any> {
    const conn = await connect();
    const game = await conn.query('SELECT * FROM games WHERE id = ?', [req.params.id]);
    if(game.length > 0) {
        return res.json(game[0]);
    } 
    res.status(404).json({text: "The game doesn't exists"});
};

export async function updateGame(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const changeGame: Game = req.body;
    const conn = await connect();
    await conn.query('UPDATE games set ? WHERE id = ?', [changeGame, id]);
    res.json({message: 'Game was updated'});
};

export async function deleteGame(req: Request, res: Response): Promise<void> {
    const conn = await connect();
    await conn.query('DELETE FROM games WHERE id = ?', [req.params.id]);
    res.json({message: 'Game Deleted'});
};


// class GamesController {

//     public async list(req: Request, res: Response) {
//         // const games = await connect.query('DESCRIBE games;');
//         const games = await connect.query('SELECT * FROM games;');
//         res.json(games);
//     } 

//     public getOne(req: Request, res: Response) {
//         res.json({text: 'This is the game ' + req.params.id});
//     } 

//     public async create (req: Request, res: Response): Promise<void> {
//         await connect.query('INSERT INTO games set ?;' [req.body]);
//         res.json({message: 'Game Saved'});
//     }

//     public update (req: Request, res: Response) {
//         res.json({text: 'updating a game' + req.params.id})
//     }

//     public delete (req: Request, res: Response) {
//         res.json({text: 'deleting a game ' + req.params.id })
//     }

    
// }

// const gamesController = new GamesController();

// export default gamesController;