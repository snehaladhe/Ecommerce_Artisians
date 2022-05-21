import React from "react";

function FetchItem({ fback }) {
  return (
    <>
      <div className="mouse">
        <table>
          <tbody>
            <tr>
              <td>{fback.name}</td>
              <td>{fback.sellerinfo}</td>
              <td>{fback.productId}</td>
              <td>{fback.feedback}</td>
            </tr>
          </tbody>
        </table>
        {/* <div>{fback.name}</div>
      <div>{fback.sellerinfo}</div>
      <div>{fback.ProductId}</div>
      <div>{fback.feedback}</div> */}
      </div>
    </>
  );
}

export default FetchItem;
