import config from '../env.config.js';
import express from 'express';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import routes from './controllers';

const app = express();
const PORT = process.env.PORT || 3000;
const dev = (process.env.NODE_ENV !== 'production');

// Load & compile handlebars template
const source = fs.readFileSync(path.join(__dirname, './template.hbs'), 'utf8');
const html = handlebars.compile(source)({ dev });

app.use(express.static('dist'));
app.use('/api', routes);

app.get('*', (req, res) => {
    res.send(html)
});

app.listen(PORT, () => {
    console.info('Server listening on port ' + PORT)
});