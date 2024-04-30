const express = require(`express`);
const cors = require(`cors`);
const app = express();
const FILMS_CARDS = require(`./src/filmCards.js`);
// const ALL_COMMENTS = require(`./src/comment.js`);

const generateFilms = () => {
  return FILMS_CARDS;
};

const allFilms = generateFilms();

let allComments = [];

allFilms.map(film => {
  const oldResult = allComments;
  allComments = oldResult.concat(film.comment);
});


const updateFilm = (filmId, changedFilm) => {
  allFilms.map((obj) => {
    if (obj.id === filmId) {
      Object.assign(obj, changedFilm);
    }
  });
}

const getCommentsFilm = (filmId) => {
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

// let allFilms = generateFilms();

app.use(cors());
app.use(express.json());

app.get(`/movies`, (req, res) => {
  res.send(allFilms);
});

// app.get(`/comments/:movieId`, (req, res) => {
app.get(`/comments`, (req, res) => {
  res.send(allComments);
  // res.send(ALL_COMMENTS);
  // res.send(getCommentsFilm(req.params.movieId));
  // console.log(req.params.movieId);
});

// // createNewFilm
// app.post('/movies', function (req, res) {
//   createNewFilm(req.body);
//   res.send(req.body);
// })

// updateFilm
app.put('/movies/:movieId', function (req, res) {
  updateFilm(req.params.movieId, req.body);
  res.send(req.body);
});

// // deleteFilm
// app.delete('/movies/:movieId', function (req, res) {
//   deleteFilm(req.params.movieId);
//   res.send(allFilms);
// });

app.listen(4444, () => {
  console.log('Server start working on port 4444!');
});

// module.exports = ALL_COMMENTS;