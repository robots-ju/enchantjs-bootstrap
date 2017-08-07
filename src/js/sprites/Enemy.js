import core from '../utils/core';

export default enchant.Class.create(enchant.Sprite, {
    initialize() {
        enchant.Sprite.call(this, 32, 32);

        this.image = core.assets['images/chara1.png'];
        this.moveTo(320, Math.floor(Math.random() * 320));
        this.scaleX = -1;

        this.tl.moveBy(-360, 0, 160);
    }
});
