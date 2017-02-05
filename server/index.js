const express = require('express');
const boxMangement = require('./lib/box-management');


const app = express();
boxMangement.register(app);

app.listen(3000, () => { console.log('im listening') });