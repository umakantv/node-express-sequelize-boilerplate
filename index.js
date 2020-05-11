const express = require('express');

const app = express();
app.use(express.json());

app.use('/api', require('./routes'));

app.get('/test', (req, res) => res.json({ message: 'Hello World' }));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to ${port}`));