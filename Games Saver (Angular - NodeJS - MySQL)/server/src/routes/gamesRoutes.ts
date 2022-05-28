import { Router } from 'express';
const router = Router();

import { createGame, deleteGame, getGame, getGames, updateGame } from '../controllers/gamesController';

router.route('/')
    .get(getGames)
    .post(createGame);

router.route('/:id')
    .get(getGame)
    .put(updateGame)
    .delete(deleteGame);

export default router;