"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGame = exports.updateGame = exports.getGame = exports.createGame = exports.getGames = void 0;
const database_1 = require("../database");
function getGames(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const games = yield conn.query('SELECT * FROM games;');
        return res.json(games[0]);
    });
}
exports.getGames = getGames;
function createGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newGame = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO games set ?;', [newGame]);
        res.json({ message: 'Game Saved' });
    });
}
exports.createGame = createGame;
;
function getGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const game = yield conn.query('SELECT * FROM games WHERE id = ?', [req.params.id]);
        if (game.length > 0) {
            return res.json(game[0]);
        }
        res.status(404).json({ text: "The game doesn't exists" });
    });
}
exports.getGame = getGame;
;
function updateGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const changeGame = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE games set ? WHERE id = ?', [changeGame, id]);
        res.json({ message: 'Game was updated' });
    });
}
exports.updateGame = updateGame;
;
function deleteGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM games WHERE id = ?', [req.params.id]);
        res.json({ message: 'Game Deleted' });
    });
}
exports.deleteGame = deleteGame;
;
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
