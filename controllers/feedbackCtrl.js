const Feedbacks = require("../models/feedbackModel");

const feedbackCtrl = {
  getfeedback: async (req, res) => {
    try {
      // res.json("fetch");
      const feedback = await Feedbacks.find();
      res.json(feedback);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  feedback: async (req, res) => {
    // res.json({ msg: "all is well" });
    try {
      const { name, sellerinfo, productId, feedback } = req.body;

      const newFeedback = new Feedbacks({
        name,
        sellerinfo,
        productId,
        feedback,
      });
      await newFeedback.save();
      res.json({ msg: "S" });
    } catch (err) {
      return res.status(500).json({
        msg: err.mesage,
      });
    }
  },
};

module.exports = feedbackCtrl;
