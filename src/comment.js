const formatCommentDate = require("./common.js");
let FILMS_CARDS = require("./data/allFilmCards.js");
let allComments = require("./data/allComments.js");

const textComment = [
  `Interesting setting and a good cast`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`,
  `Booooooooooring`,
  `It's disgusting.`,
  `Gooooood!!!!`,
];

const emotionComment = [
  `./images/emoji/smile.png`,
  `./images/emoji/puke.png`,
  `./images/emoji/angry.png`,
  `./images/emoji/angry.png`,
];

const authorComment = [
  `Tim Macoveev`,
  `John Doe`,
  `Elisa Joe`,
  `Oh Han-byul`,
];

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * max - min);
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 8);

  targetDate.setDate(targetDate.getDate() + diffValue);
  targetDate.setHours(diffValue);
  targetDate.setMinutes(diffValue);

  return targetDate;
};

// const generateComment = () => {
//   const date = formatCommentDate(getRandomDate());
//   const id = new Date().getTime() + Math.random();
// // console.log(id);
//   // allComments.push(

//   //   {
//   //     idComment: filmId,
//   return {
//     "id": id,
//     "text": getRandomArrayItem(textComment),
//     "emotion": getRandomArrayItem(emotionComment),
//     "author": getRandomArrayItem(authorComment),
//     "date": date,
//   }
//   // },
//   // );
//   // return id;
// };


// const generateComments = (filmId) => {
//   const count = Math.floor(Math.random() * 10);
//   // return new Array(count).fill(``).map(generateComment); //сюда не могу передать idFilm, в generateComment(idFilm)

//   // let commentsFilm = [];
//   // for (let i = 0; i < count; i++) {
//   //   commentsFilm.push(generateComment());
//   // }

//   const commentsFilm = new Array(count).fill(``).map(generateComment);
// //   FILMS_CARDS.map((film)=>{
// // // console.log(film);
// //   });

//   allComments.push(
//     {
//       filmId: filmId,
//       comments: commentsFilm,
//     }
//   );
// };




const generateComment = () => {
  const date = formatCommentDate(getRandomDate());
  const id = new Date().getTime() + Math.random();
  return {
    "id": id,
    "text": getRandomArrayItem(textComment),
    "emotion": getRandomArrayItem(emotionComment),
    "author": getRandomArrayItem(authorComment),
    "date": date,
  };
};


const generateComments = () => {
  const count = Math.floor(Math.random() * 10);
  return new Array(count).fill(``).map(generateComment);
};



module.exports = generateComments;
