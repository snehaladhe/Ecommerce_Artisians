import React from "react";

const d = new Date();
const year = d.getFullYear();
const Footer = () => {
  return (
    <>
      <footer style={{ background: "black", height: "35px" }}>
        <div className="container ">
          <center>
            <p style={{ color: "white", paddingTop: "6px" }}>
              copyright © {year}
            </p>
          </center>
        </div>
      </footer>
    </>
  );
};

export default Footer;
