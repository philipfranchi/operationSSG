import thinky from '../utils/thinky';
import User from './user';

const type = thinky.type;
const r = thinky.r;
const Query = thinky.Query;

const GameState = thinky.createModel('gameState', {
    id: type.string(),
    state: type.object(),
    createdOn: type.date().default(r.now())
});

// TODO: Set up relations

export default GameState