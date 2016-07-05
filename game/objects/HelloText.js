import Phaser from 'phaser';

export default class HelloText extends Phaser.Text {
    constructor(game, x, y) {
        super(game, x, y, 'Hello World', { font: "45px Arial", fill: "#ff0044", align: "center" })
        this.game.stage.addChild(this);
    }
}