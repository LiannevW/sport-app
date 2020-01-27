const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.get('/', (req, res) => res.json({msg: 'Welcome to contactKeeper API'}));

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/players', require('./routes/players'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
