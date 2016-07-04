import thinky from 'thinky';

const config = {
    db: process.env.RETHINK_DBNAME
};

export default thinky(config);