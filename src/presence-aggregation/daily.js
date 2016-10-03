const moment = require('moment');

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

const START = 'start';
const END = 'end';

const rows = [
  { event: START, time: moment().set({hour: 8, minute: 0, second: 0}) },
  { event: END, time: moment().set({hour: 9, minute: 30, second: 0}) },
  { event: START, time: moment().set({hour: 9, minute: 45, second: 0}) },
  { event: START, time: moment().set({hour: 10, minute: 0, second: 0}) },
  { event: END, time: moment().set({hour: 10, minute: 15, second: 0}) }
]

const tuples = [];
var present = rows[0].event === END;
if (present) tuples.push({ start: moment().set({hour: 0, minute: 0, second: 0}) });

rows.forEach(row => {
  if (present && row.event === END) {
    tuples.last().end = row.time;
    present = false;
  }
  if (!present && row.event === START) {
    tuples.push({ start: row.time });
    present = true;
  }
});

if (present) tuples.last().end = moment().set({hour: 23, minute: 59, second: 59});

console.log(tuples);

const data = Array(24).fill(0);

tuples.forEach(tuple => {
  var tail = tuple.start.hours();
  const head = tuple.end.hours();
  var diff;

  // Special case, just add number of minutes present
  if (tail === head) {
    diff = tuple.end.diff(tuple.start, 'minutes');
    return data[tail] += diff;
  }

  // Add remaining minutes until next hour
  diff = moment().set({hour: tail + 1, minute: 0, second: 0}).diff(tuple.start, 'minutes');
  data[tail] += diff;
  tail++;

  // Start adding whole hours
  while (tail < head) {
    data[tail] += 60;
    tail++;
  }

  // Add minutes we're into the last hour
  diff = tuple.end.diff(moment().set({hour: head, minute: 0, second: 0}), 'minutes');
  data[head] += diff + 1;
});

console.log(data);
