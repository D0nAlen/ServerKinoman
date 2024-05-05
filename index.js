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

// let allComments = [];

// allFilms.map(film => {
//   const oldResult = allComments;
//   allComments = oldResult.concat(film.comment);
// });

const updateFilm = (filmId, changedFilm) => {
  allFilms.map((obj) => {
    if (obj.id === filmId) {
      Object.assign(obj, changedFilm);
    }
  });
}

const getCommentsByIdFilm = (filmId) => {
  const getComments = null;
  allFilms.map((obj) => {
    // console.log(obj.id, "_______", filmId);
    if (obj.id === filmId) {

      Object.assign(getComments, obj.comment);
      // Object.assign(obj, changedFilm);
    }
  });
  // console.log(getComments);
  return getComments;
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
  // res.send(allComments);
  // console.log(req.params.movieId);
});

// updateFilm
app.put('/movies/:movieId', function (req, res) {
  updateFilm(req.params.movieId, req.body);
  res.send(req.body);
});

app.listen(4444, () => {
  console.log('Server start working on port 4444!');
});
