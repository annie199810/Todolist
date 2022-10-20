import React from "react";
const Purchase = ({ name, price }) => {
  const [addcount, setAddcount] = React.useState(0);
  const increase = () => setAddcount((a) => a + 1);
  const decrease = () => setAddcount((a) => a - 1);
  return (
    <div className="product_section">
      <div className="product_card">
        <h4>{name}</h4>
        <b>{price}</b>
        {!addcount ? (
          <div className="btn_container">
            <button className="control_btn" onClick={increase}>
              Add to cart
            </button>
          </div>
        ) : (
          <div className="btn_container">
            <h3>{addcount}</h3>
            <button className="control_btn" onClick={increase}>
              +
            </button>
            <button className="control_btn" onClick={decrease}>
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchase;
