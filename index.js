const express = require('express');

const app = express();
const routes = require('./routes');

// const book = require('./routes/book');

app.use(express.json());
// app.use('/api/book', book);

app.use('/api', routes);

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to ${port}`));