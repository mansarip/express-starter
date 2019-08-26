module.exports = function GetUser(req, res) {
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
