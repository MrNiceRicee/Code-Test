/*
Complete the solution so that it returns true
if the first argument(string) passed in ends with the 2nd argument (also a string).
*/

const stringEnds = (string, ending) => (string.slice(string.length - ending.length) === ending);

module.exports = stringEnds;
