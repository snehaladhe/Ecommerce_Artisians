import React, { useState } from "react";
import { sendMail } from "./helper/Mail";

const Mail = () => {
  const [values, setValues] = useState({
    email: "",
    status: false,
  });
  const { email, status } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email", email);
    sendMail(email)
      .then((data) => {
        console.log("testing badly");
        if (data.err) {
          alert("err", data.err);
        } else {
          setValues({ ...values, status: true });
          alert("SUCCESS!!!!!!!!!!!", data);
        }
      })
      .catch(console.log("err in sending mail"));
  };
  return (
    <div style={{ marginTop: "200px", marginBottom: "248px" }}>
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <h2>Confirm Your Email</h2>
          <input
            id="email"
            type="text"
            name="email"
            required
            placeholder="Email"
            value={email}
            onChange={handleChange("email")}
          />

          <div className="row">
            <button type="submit">pay</button>
          </div>
        </form>
        {status ? (
          <div>
            <h1>message send successfully</h1>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Mail;
