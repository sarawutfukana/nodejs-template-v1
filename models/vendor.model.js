const vendor = [
  {
    id: 'vendor1',
    name: 'vendor1',
    token: 'aaa',
    status: 1,
  },
  {
    id: 'vendor2',
    name: 'vendor2',
    token: 'bbb',
    status: 1,
  },
];

async function getByToken(token) {
  const foundVendor = vendor.find((v) => v.token === token);

  if (!foundVendor) {
    // If vendor with the specified token is not found
    return null;
  }

  return foundVendor;
}

module.exports = {
  getByToken,
};
