import core from './core';
import game from '../game';

// Charge le code du jeu et lance la partie
// Ne peut pas être fait dans app.js car les imports sont résolus avant les require(),
// et il faut exécuter le require() de enchant avant tout le reste
core.onload = game;
core.start();
