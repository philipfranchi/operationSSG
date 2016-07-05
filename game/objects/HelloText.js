import Phaser from 'phaser';

export default class HelloText extends Phaser.Text {
    constructor(game, x, y) {
        super(game, x, y, 'Hello World', { font: "45px Arial", fill: "#ff0044", align: "center" })

        this.inputEnabled = true;

        this.events.onInputOver.add(this.over, this);
        this.events.onInputOut.add(this.out, this);

        this.game.stage.addChild(this)

        this.rotating = false;
    }

    over(item) {
        this.rotating = true;
    }

    out(item) {
        this.rotating = false;
    }

    update() {
        if(this.rotating) {
            this.angle += 1
        }
    }
}