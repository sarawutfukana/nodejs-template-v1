const exam = [
  {
    id: 1,
    name: 'exam1',
  },
  {
    id: 2,
    name: 'exam2',
  },
  {
    id: 3,
    name: 'exam3',
  },
  {
    id: 4,
    name: 'exam4',
  },
];
async function getAll() {
  return exam;
}

module.exports = {
  getAll,
};
