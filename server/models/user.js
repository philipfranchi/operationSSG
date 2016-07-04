import thinky from '../utils/thinky';

const type = thinky.type;
const r = thinky.r;
const Query = thinky.Query;

const User = thinky.createModel('user', {
    id: type.string(),
    username: type.string(),
    email: type.string().email(),
    password: type.string(),
    createdOn: type.date().default(r.now())
});

// TODO: Set up relations

export default User