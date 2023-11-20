function index(req, res) {
  return res.status(200).json({
    status: true,
    message: 'Wellcome to the API',
    time: new Date().getTime(),
    service: 'NodeJS Clean Architecture',
  });
}

module.exports = {
  index,
};
