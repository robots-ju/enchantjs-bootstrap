import core from '../utils/core';

export default enchant.Class.create(enchant.Sprite, {
    initialize() {
        enchant.Sprite.call(this, 16, 16);

        this.image = core.assets['images/icon0.png'];
        this.frame = 15;

        this.tl.moveBy(320, 0, 30);
    }
});
