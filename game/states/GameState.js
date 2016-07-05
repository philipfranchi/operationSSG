import Phaser from 'phaser';
import HelloText from '../objects/HelloText';

export default class GameState extends Phaser.State {
    create() {
        let center = { x: this.game.world.centerX, y: this.game.world.centerY }
        let text = new HelloText(this.game, center.x, center.y)
        text.anchor.set(0.5);
    }
}