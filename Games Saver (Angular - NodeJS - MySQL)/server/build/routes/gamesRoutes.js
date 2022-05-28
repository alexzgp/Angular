"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const gamesController_1 = require("../controllers/gamesController");
router.route('/')
    .get(gamesController_1.getGames)
    .post(gamesController_1.createGame);
router.route('/:id')
    .get(gamesController_1.getGame)
    .put(gamesController_1.updateGame)
    .delete(gamesController_1.deleteGame);
exports.default = router;
