require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));

// Replace with your MongoDB connection string
const db = 'process.env.MONGODB_URI';

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Comment Schema
const CommentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  time: { type: Date, default: Date.now },
});

// Comment Model
const Comment = mongoose.model('Comment', CommentSchema);

// Routes
app.get('/', (req, res) => res.send('Welcome to The Douch Jar!'));
app.post('/submit-comment', (req, res) => {
  const newComment = new Comment({
    name: req.body.name,
    comment: req.body.comment,
  });

  newComment.save().then(comment => res.json(comment));
});

app.get('/comments', (req, res) => {
  Comment.find().sort({ time: -1 }).then(comments => res.json(comments));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
