import Apple from './sprites/Apple';
import Enemy from './sprites/Enemy';
import Player from './sprites/Player';
import core from './utils/core';
import changeMessage from './utils/changeMessage';
import afficheAlerte from './utils/afficheAlerte';

// Cette fonction est exécutée une seule fois, lorsque le jeu démarre
export default function()
{
    const player = new Player();
    core.rootScene.addChild(player);

    core.rootScene.tl.then(() => {
        const enemy = new Enemy();
        core.rootScene.addChild(enemy);
    }).delay(30).loop();

    core.rootScene.on('touchstart', event => {
        player.y = event.localY - 32;

        const apple = new Apple();
        apple.moveTo(16, player.y + 8);
        core.rootScene.addChild(apple);
    });

    let score = 0;

    core.rootScene.on('enterframe', () => {
        const hits = Apple.intersect(Enemy);

        hits.forEach(hit => {
            core.rootScene.removeChild(hit[0]);
            core.rootScene.removeChild(hit[1]);
            score++;
        });

        changeMessage('Score:' + score);
    });

    player.tl.delay(core.fps * 10).then(() => {
        core.stop();
        afficheAlerte('GAME OVER ! Score: ' + score);
    });
};
