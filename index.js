const express = require(`express`);
const cors = require(`cors`);
const app = express();
const FILMS_CARDS = require(`./src/data/allFilmCards.js`);
let allComments = require("./src/data/allComments.js");
const generateComments = require("./src/comment.js");

const allFilms = FILMS_CARDS;

// генерация комментов на сервере
const generateAllComments = () => {
  allFilms.map((filmCard) => {
    generateComments(filmCard.id);
  });
}

const updateFilm = (filmId, changedFilm) => {
  allFilms.map((obj) => {
    if (obj.id === filmId) {
      Object.assign(obj, changedFilm);
    }
  });
}

const getCommentsByIdFilm = (filmId) => {
  let result = [];

  allComments.map((comments) => {
    if (comments.filmId === filmId) {
      // console.log(comments.filmId, "____", filmId);
      // console.log(comments.comments);
      result = comments.comments;
    }
  });
  return result;
}

generateAllComments();

app.use(cors());
app.use(express.json());

app.get(`/movies`, (req, res) => {
  res.send(allFilms);
});

app.get(`/comments`, (req, res) => {
  res.send(allComments);
});




app.get(`/comments/:movieId`, (req, res) => {
  const comments = getCommentsByIdFilm(req.params.movieId);
  res.send(comments);
});





// updateFilm
app.put('/movies/:movieId', function (req, res) {
  updateFilm(req.params.movieId, req.body);
  res.send(req.body);
});

app.listen(4444, () => {
  console.log('Server start working on port 4444!');
});
