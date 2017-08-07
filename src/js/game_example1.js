import core from './utils/core';

export default function()
{
    const bear = new enchant.Sprite(32, 32);
    bear.image = core.assets['images/chara1.png'];
    core.rootScene.addChild(bear);
    bear.frame = [6, 6, 7, 7];   // select sprite frame

    bear.tl.moveBy(288, 0, 90)   // move right
        .scaleTo(-1, 1, 10)      // turn left
        .moveBy(-288, 0, 90)     // move left
        .scaleTo(1, 1, 10)       // turn right
        .loop();                 // loop it
};
