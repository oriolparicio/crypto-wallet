import moment from 'moment';

var REFERENCE = moment(); // fixed just for testing, use moment();

let TODAY = REFERENCE.clone().startOf('day');
let YESTERDAY = REFERENCE.clone().subtract(1, 'days').startOf('day');

const dateFormatter = (date, format) => {
  return moment(date).format(format);
};

export function isToday(momentDate) {
  return moment(momentDate).isSame(TODAY, 'd');
}
export function isYesterday(momentDate) {
  return moment(momentDate).isSame(YESTERDAY, 'd');
}

export default dateFormatter;
