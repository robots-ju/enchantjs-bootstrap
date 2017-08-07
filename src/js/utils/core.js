// Créé la zone de jeu
const core = new enchant.Core(320, 320);

// Charge les images utilisées dans le jeu
core.preload('images/chara1.png', 'images/icon0.png');

// Framerate du jeu
core.fps = 20;

// On exporte le core pour pouvoir l'importer dans toutes les classes qui en ont besoin
export default core;
