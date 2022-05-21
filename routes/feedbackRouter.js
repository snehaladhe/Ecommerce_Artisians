const router = require("express").Router();
const feedbackCtrl = require("../controllers/feedbackCtrl");

router
  .route("/feedback")
  .post(feedbackCtrl.feedback)
  .get(feedbackCtrl.getfeedback);

module.exports = router;
