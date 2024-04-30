const generateComments = require(`./comment.js`);

let FILMS_CARDS = [
  {
    id: String(new Date() + Math.random()),
    filmName: `The Great Flamarion`,
    originalFilmName: `The Great Flamarion`,
    director: `Anthony Mann`,
    writers: `Anne Wigton, Heinz Herald, Richard Weil`,
    actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
    releaseDate: `30 March 1945`,
    country: `USA`,
    genres: [`Cartoon`],
    rating: 8.9,
    year: `1943`,
    duration: 90,
    poster: `"./images/posters/the-great-flamarion.jpg"`,
    description: `The film opens following a murder at a cabaret in Mexico City in 1936,
      and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim)
      is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. 
      His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), 
      Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated 
      by her into killing her no good husband during one of their acts.`,
    comment: generateComments(),
    age: "18+",
    isAddToWatchlist: false,
    isMarkAsFavorite: true,
    isMarkAsWatched: true,
    isCardTopRated: true,
    isCardMostCommented: true,
  },

  {
    id: String(new Date() + Math.random()),
    filmName: `Sagebrush Trail`,
    originalFilmName: `Sagebrush Trail`,
    director: `Lorem ipsum dolor sit amet`,
    writers: `Anne Wigton, Heinz Herald, Richard Weil`,
    actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
    releaseDate: `30 March 1945`,
    country: `USA`,
    genres: [`Western`, `Cartoon`],
    rating: 3.2,
    year: `1933`,
    duration: 54,
    poster: `"./images/posters/sagebrush-trail.jpg"`,
    description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Cras aliquet 
        varius magna, non porta ligula feugiat 
        eget.Fusce tristique felis at fermentum 
        pharetra.Aliquam id orci ut lectus varius 
        viverra.Nullam nunc ex, convallis sed 
        finibus eget, sollicitudin eget ante. 
        Phasellus eros mauris, condimentum sed 
        nibh vitae, sodales efficitur ipsum.Sed 
        blandit, eros vel aliquam faucibus, purus 
        ex euismod diam, eu luctus nunc ante ut 
        dui.Sed sed nisi sed augue convallis 
        suscipit in sed felis.Aliquam erat 
        volutpat.Nunc fermentum tortor ac porta 
        dapibus.In rutrum ac purus sit amet 
        tempus.`,
    comment: generateComments(),
    age: "18+",
    isAddToWatchlist: true,
    isMarkAsFavorite: true,
    isMarkAsWatched: false,
    isCardTopRated: false,
    isCardMostCommented: false,
  },

  {
    id: String(new Date() + Math.random()),
    filmName: `example`,
    originalFilmName: `example`,
    writers: `Anne Wigton, Heinz Herald, Richard Weil`,
    actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
    releaseDate: `30 March 1945`,
    country: `USA`,
    genres: [`Drama`, `Mystery`],
    rating: 5.7,
    year: `1945`,
    duration: 101,
    poster: `"./images/posters/popeye-meets-sinbad.png"`,
    description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Cras aliquet 
        varius magna, non porta ligula feugiat 
        eget.Fusce tristique felis at fermentum 
        pharetra.Aliquam id orci ut lectus varius 
        viverra.Nullam nunc ex, convallis sed 
        finibus eget, sollicitudin eget ante. 
        Phasellus eros mauris, condimentum sed 
        nibh vitae, sodales efficitur ipsum.Sed 
        blandit, eros vel aliquam faucibus, purus 
        ex euismod diam, eu luctus nunc ante ut 
        dui.Sed sed nisi sed augue convallis 
        suscipit in sed felis.Aliquam erat 
        volutpat.Nunc fermentum tortor ac porta 
        dapibus.In rutrum ac purus sit amet 
        tempus.`,
    comment: generateComments(),
    age: "18+",
    isAddToWatchlist: true,
    isMarkAsFavorite: false,
    isMarkAsWatched: true,
    isCardTopRated: true,
    isCardMostCommented: true,
  },

  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.9,
  //   year: `1998`,
  //   duration: 20,
  //   poster: `"./images/posters/the-dance-of-life.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: false,
  //   isCardMostCommented: true,
  // },

  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1933`,
  //   duration: 186,
  //   poster: `"./images/posters/the-man-with-the-golden-arm.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: true,
  //   isMarkAsWatched: true,
  //   isCardTopRated: false,
  //   isCardMostCommented: false,
  // },


  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1931`,
  //   duration: 54,
  //   poster: `"./images/posters/santa-claus-conquers-the-martians.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: true,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: true,
  //   isCardTopRated: true,
  //   isCardMostCommented: true,
  // },
  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1930`,
  //   duration: 120,
  //   poster: `"./images/posters/sagebrush-trail.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: true,
  //   isCardMostCommented: false,
  // },

  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1933`,
  //   duration: 135,
  //   poster: `"./images/posters/made-for-each-other.png"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: true,
  //   isCardMostCommented: true,
  // },

  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1833`,
  //   duration: 65,
  //   poster: `"./images/posters/the-dance-of-life.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: true,
  //   isCardTopRated: false,
  //   isCardMostCommented: false,
  // },

  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1933`,
  //   duration: 70,
  //   poster: `"./images/posters/the-man-with-the-golden-arm.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: false,
  //   isCardMostCommented: false,
  // },

  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1932`,
  //   duration: 80,
  //   poster: `"./images/posters/the-great-flamarion.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: false,
  //   isCardMostCommented: false,
  // },
  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1933`,
  //   duration: 85,
  //   poster: `"./images/posters/santa-claus-conquers-the-martians.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: false,
  //   isCardMostCommented: false,
  // },
  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1933`,
  //   duration: 60,
  //   poster: `"./images/posters/sagebrush-trail.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: false,
  //   isCardMostCommented: false,
  // },

  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1935`,
  //   duration: 45,
  //   poster: `"./images/posters/made-for-each-other.png"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: true,
  //   isCardMostCommented: false,
  // },

  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1933`,
  //   duration: 75,
  //   poster: `"./images/posters/the-dance-of-life.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: false,
  //   isCardMostCommented: false,
  // },

  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1933`,
  //   duration: 120,
  //   poster: `"./images/posters/the-man-with-the-golden-arm.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: false,
  //   isCardMostCommented: false,
  // },

  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1933`,
  //   duration: 125,
  //   poster: `"./images/posters/the-great-flamarion.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: false,
  //   isCardMostCommented: false,
  // },
  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1933`,
  //   duration: 130,
  //   poster: `"./images/posters/santa-claus-conquers-the-martians.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: false,
  //   isCardMostCommented: false,
  // },
  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1933`,
  //   duration: 100,
  //   poster: `"./images/posters/santa-claus-conquers-the-martians.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: false,
  //   isCardMostCommented: false,
  // },
  // {
  //   id: String(new Date() + Math.random()),
  //   filmName: `example`,
  //   originalFilmName: `example`,
  //   writers: `Anne Wigton, Heinz Herald, Richard Weil`,
  //   actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
  //   releaseDate: `30 March 1945`,
  //   country: `USA`,
  //   genres: [`Drama`, `Film-Noir`, `Mystery`],
  //   rating: 3.2,
  //   year: `1933`,
  //   duration: 90,
  //   poster: `"./images/posters/santa-claus-conquers-the-martians.jpg"`,
  //   description: `Lorem ipsum dolor sit amet,
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
  //   comment: generateComments(),
  //   age: "18+",
  //   isAddToWatchlist: false,
  //   isMarkAsFavorite: false,
  //   isMarkAsWatched: false,
  //   isCardTopRated: false,
  //   isCardMostCommented: false,
  // },
];

module.exports = FILMS_CARDS;