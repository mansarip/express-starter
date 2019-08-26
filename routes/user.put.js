module.exports = function InsertUser(req, res) {
  try {
    res.json({
      success: true,
      result: []
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message
    });
  }
};
