/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).
for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
*/
const makeSpace = (space) => (Array(space).join(' '));
const makeStar = (space) => (Array(space + 1).join('*'));

const towerBuilder = (nFloors) => {
  const tower = [];
  for (let i = 0; i < nFloors; i += 1) {
    tower.push(`${makeSpace(nFloors - i)}${makeStar((i * 2) + 1)}${makeSpace(nFloors - i)}`);
  }
  return tower;
};

module.exports = towerBuilder;
