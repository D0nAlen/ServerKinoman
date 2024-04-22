const express = require(`express`);
const cors = require(`cors`);
const app = express();
// import { FILMS_CARDS } from "./src/const.js";
const FILMS_CARDS = require(`./src/const.js`);


// const COLOR = {
//   BLACK: `black`,
//   YELLOW: `yellow`,
//   BLUE: `blue`,
//   GREEN: `green`,
//   PINK: `pink`,
// };

// const COLORS = Object.values(COLOR);

// const DescriptionItems = [
//   `Изучить теорию`,
//   `Сделать домашку`,
//   `Пройти интенсив на соточку`,
// ];

// const DefaultRepeatingDays = {
//   mo: false,
//   tu: false,
//   we: false,
//   th: false,
//   fr: false,
//   sa: false,
//   su: false,
// };

// const getRandomArrayItem = (array) => {
//   const randomIndex = getRandomIntegerNumber(0, array.length);

//   return array[randomIndex];
// };

// const getRandomIntegerNumber = (min, max) => {
//   return min + Math.floor(Math.random() * max - min);
// };

// const getRandomDate = () => {
//   const targetDate = new Date();
//   const sign = Math.random() > 0.5 ? 1 : -1;
//   const diffValue = sign * getRandomIntegerNumber(0, 8);

//   targetDate.setDate(targetDate.getDate() + diffValue);

//   return Date.parse(targetDate);
//   // return Date.now();
// };

// const generateRepeatingDays = () => {
//   return Object.assign({}, DefaultRepeatingDays, {
//     mo: Math.random() > 0.5,
//   });
// };

// const generateTask = () => {
//   const dueDate = getRandomDate(); //Math.random() > 0.5 ? null : getRandomDate();
//   return {
//     id: String(new Date().getTime() + Math.random()),
//     description: getRandomArrayItem(DescriptionItems),
//     dueDate,
//     repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
//     color: getRandomArrayItem(COLORS),
//     isArchive: Math.random() > 0.5,
//     isFavorite: Math.random() > 0.5,
//   };
// };

// const generateTasks = (count) => {
//   return new Array(count).fill(``).map(generateTask);
// };

// let FILMS_CARDS = [
//   {
//     id: String(new Date() + Math.random()),
//     filmName: `The Great Flamarion`,
//     originalFilmName: `The Great Flamarion`,
//     director: `Anthony Mann`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Cartoon`],
//     rating: 8.9,
//     year: `1943`,
//     duration: 90,
//     poster: `"./images/posters/the-great-flamarion.jpg"`,
//     description: `The film opens following a murder at a cabaret in Mexico City in 1936,
//     and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim)
//     is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. 
//     His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), 
//     Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated 
//     by her into killing her no good husband during one of their acts.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: true,
//     isMarkAsWatched: true,
//   },

//   {
//     id: String(new Date() + Math.random()),
//     filmName: `Sagebrush Trail`,
//     originalFilmName: `Sagebrush Trail`,
//     director: `Lorem ipsum dolor sit amet`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Western`, `Cartoon`],
//     rating: 3.2,
//     year: `1933`,
//     duration: 54,
//     poster: `"./images/posters/sagebrush-trail.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: true,
//     isMarkAsFavorite: true,
//     isMarkAsWatched: false,
//   },

//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Mystery`],
//     rating: 5.7,
//     year: `1945`,
//     duration: 101,
//     poster: `"./images/posters/popeye-meets-sinbad.png"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: true,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: true,
//   },

//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.9,
//     year: `1998`,
//     duration: 20,
//     poster: `"./images/posters/the-dance-of-life.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },

//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1933`,
//     duration: 186,
//     poster: `"./images/posters/the-man-with-the-golden-arm.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: true,
//     isMarkAsWatched: true,
//   },


//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1931`,
//     duration: 54,
//     poster: `"./images/posters/santa-claus-conquers-the-martians.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: true,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: true,
//   },
//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1930`,
//     duration: 120,
//     poster: `"./images/posters/sagebrush-trail.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },

//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1933`,
//     duration: 135,
//     poster: `"./images/posters/made-for-each-other.png"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },

//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1833`,
//     duration: 65,
//     poster: `"./images/posters/the-dance-of-life.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: true,
//   },

//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1933`,
//     duration: 70,
//     poster: `"./images/posters/the-man-with-the-golden-arm.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },

//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1932`,
//     duration: 80,
//     poster: `"./images/posters/the-great-flamarion.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },
//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1933`,
//     duration: 85,
//     poster: `"./images/posters/santa-claus-conquers-the-martians.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },
//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1933`,
//     duration: 60,
//     poster: `"./images/posters/sagebrush-trail.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },

//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1935`,
//     duration: 45,
//     poster: `"./images/posters/made-for-each-other.png"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },

//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1933`,
//     duration: 75,
//     poster: `"./images/posters/the-dance-of-life.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },

//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1933`,
//     duration: 120,
//     poster: `"./images/posters/the-man-with-the-golden-arm.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },

//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1933`,
//     duration: 125,
//     poster: `"./images/posters/the-great-flamarion.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },
//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1933`,
//     duration: 130,
//     poster: `"./images/posters/santa-claus-conquers-the-martians.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },
//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1933`,
//     duration: 100,
//     poster: `"./images/posters/santa-claus-conquers-the-martians.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },
//   {
//     id: String(new Date() + Math.random()),
//     filmName: `example`,
//     originalFilmName: `example`,
//     writers: `Anne Wigton, Heinz Herald, Richard Weil`,
//     actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
//     releaseDate: `30 March 1945`,
//     country: `USA`,
//     genres: [`Drama`, `Film-Noir`, `Mystery`],
//     rating: 3.2,
//     year: `1933`,
//     duration: 90,
//     poster: `"./images/posters/santa-claus-conquers-the-martians.jpg"`,
//     description: `Lorem ipsum dolor sit amet,
//       consectetur adipiscing elit.Cras aliquet 
//       varius magna, non porta ligula feugiat 
//       eget.Fusce tristique felis at fermentum 
//       pharetra.Aliquam id orci ut lectus varius 
//       viverra.Nullam nunc ex, convallis sed 
//       finibus eget, sollicitudin eget ante. 
//       Phasellus eros mauris, condimentum sed 
//       nibh vitae, sodales efficitur ipsum.Sed 
//       blandit, eros vel aliquam faucibus, purus 
//       ex euismod diam, eu luctus nunc ante ut 
//       dui.Sed sed nisi sed augue convallis 
//       suscipit in sed felis.Aliquam erat 
//       volutpat.Nunc fermentum tortor ac porta 
//       dapibus.In rutrum ac purus sit amet 
//       tempus.`,
//     comment: generateComments(),
//     age: "18+",
//     isAddToWatchlist: false,
//     isMarkAsFavorite: false,
//     isMarkAsWatched: false,
//   },
// ];

const generateFilm = () => {
  // const dueDate = getRandomDate(); //Math.random() > 0.5 ? null : getRandomDate();
  return FILMS_CARDS;//{
  // id: String(new Date().getTime() + Math.random()),
  // description: getRandomArrayItem(DescriptionItems),
  // dueDate,
  // repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
  // color: getRandomArrayItem(COLORS),
  // isArchive: Math.random() > 0.5,
  // isFavorite: Math.random() > 0.5,
  //};
};

const generateFilms = () => {
  const countFilms = FILMS_CARDS;
  // console.log(countFilms);

  return new Array(countFilms).fill(``).map(generateFilm);
  // return new Array(count).fill(``).map(FILMS_CARDS);
};

const createNewFilm = (newFilm) => {
  allFilms.push(newFilm);
}

const updateFilm = (filmId, changedFilm) => {
  allFilms.map((obj) => {
    if (obj.id === filmId) {
      Object.assign(obj, changedFilm);
    }
  });
}

const deleteFilm = (filmId) => {
  const index = allFilms.findIndex(item => item.id === filmId);
  allFilms.splice(index, 1);
}


let allFilms = generateFilms();
app.use(cors());
app.use(express.json());

app.get(`/movies`, (req, res) => {
  res.send(allFilms);
});

// createNewFilm
app.post('/movies', function (req, res) {
  createNewFilm(req.body);
  res.send(req.body);
})

// updateFilm
app.put('/movies/:id', function (req, res) {
  updateFilm(req.params.id, req.body);
  res.send(req.body);
});

// deleteFilm
app.delete('/movies/:id', function (req, res) {
  deleteFilm(req.params.id);
  res.send(allFilms);
});

app.listen(4444, () => {
  console.log('Server start working on port 4444!');
});