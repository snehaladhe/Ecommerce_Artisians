import { React, useState } from "react";

const Otpconfirm = () => {
  const [values, setValues] = useState({
    otp: "",
  });
  const { otp } = values;
  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  function handleSubmit() {
    var array = [
      "893407",
      "920453",
      "467483",
      "326721",
      "127685",
      "674345",
      "976532",
      "182965",
      "564789",
      "756978",
      "893560",
      "484357",
      "794360",
    ];
    var entrotp = values.otp;
    console.log(entrotp);
    var x = array.includes(entrotp);
    console.log(x);
    if (x === true) {
      alert("PAYMENT RECEIVED SUCCESSFULLY!!!!!");
    } else {
      alert("YOU HAVE ENTERED WRONG OTP");
    }
  }

  return (
    <div
      style={{
        marginTop: "200px",
        marginBottom: "248px",
      }}
    >
      <div className="login-page">
        <form>
          <h2> Confirm Your OTP </h2>
          <input
            id="otp"
            type="text"
            name="otp"
            required
            placeholder="enter otp received to your mail"
            value={otp}
            onChange={handleChange("otp")}
          />
          <div>
            <button onClick={handleSubmit}>PAY</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otpconfirm;
