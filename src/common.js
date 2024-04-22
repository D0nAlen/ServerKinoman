// import moment from "moment";
const moment = require("moment");

const formatTime = (date) => {
  return moment(date).format(`HH:mm`);
};

const formatFilmDuration = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours ? hours + "h " + minutes + "m" :
    minutes + "m";
}; 

const formatDate = (date) => {
  return moment(date).format(`DD MMMM YYYY`);
};

//date: "2019/12/31 23:59",
const formatCommentDate = (date) => {
  return moment(date).format(`YYYY/MM/DD HH:mm`);
};

module.exports = formatCommentDate;