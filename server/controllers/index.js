import express from 'express';

import gameState from '../models/gameState';
import user from '../models/user';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello API')
});

export default router;

