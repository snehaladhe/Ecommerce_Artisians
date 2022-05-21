import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

function Feedback() {
  const [fed, setFed] = useState({
    name: "",
    sellerinfo: "",
    productId: "",
    feedback: "",
  });
  const onChangefeedback = (e) => {
    const { name, value } = e.target;
    setFed({ ...fed, [name]: value });
  };

  const feedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/fed/feedback", { ...fed });
      alert("submitted successfully");
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div style={{ marginBottom: "174px", marginTop: "100px" }}>
      <div className="login-page">
        <form onSubmit={feedbackSubmit}>
          <h2>Feedback Form</h2>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={fed.name}
            onChange={onChangefeedback}
          />

          <input
            type="text"
            name="sellerinfo"
            required
            placeholder="Seller Information"
            value={fed.sellerinfo}
            onChange={onChangefeedback}
          />

          <input
            type="text"
            name="productId"
            required
            placeholder="Product Id"
            value={fed.productId}
            onChange={onChangefeedback}
          />

          <textarea
            style={{ borderColor: "rgb(3, 165, 206)", marginTop: "12px" }}
            name="feedback"
            required
            placeholder="feedback"
            value={fed.feedback}
            onChange={onChangefeedback}
          />

          <div className="row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
