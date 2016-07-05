import 'pixi';
import 'p2';
import Phaser from 'phaser';

import GameState from './states/GameState';

export default class Game extends Phaser.Game {
    constructor() {
        super(500, 500, Phaser.AUTO, 'game')
        this.state.add('GameState', GameState, false);
        this.state.start('GameState');
    }
}