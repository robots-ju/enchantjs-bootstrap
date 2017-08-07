import core from '../utils/core';

export default enchant.Class.create(enchant.Sprite, {
    initialize() {
        enchant.Sprite.call(this, 32, 32);

        this.image = core.assets['images/chara1.png'];
        this.frame = 5;
    }
});
