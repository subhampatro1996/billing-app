import React from "react";

const Home = () => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        boxSizing: "border-box",
        background: "linear-gradient(to right, #430089, #82ffa1)",
        width: "100%",
        height: "580px",
        backgroundSize: "cover",
        textAlign: "center",
      }}
    >
      <h1>HOME</h1>
      <p style={{
        margin:"auto",
        lineHeight:"3rem",
        fontSize:"20px",
        textTransform: "uppercase",
        textIndent : "40px",
        textShadow: "2px 2px",
        textAlignLast:"center"
      }}>
        eShopaid eShopaid is a web-based Retail Management Software designed for
        medium and large retails stores. It addresses the needs of COCO, COFO
        and FOFO outlets. It offers complete functionality from Point of Sale
        Operations, Store Operations, Inventory, Merchandising, Warehouse
        management and Loyalty to highly configurable promotions and offers.
        eShopaid connects to eCommerce applications, Loyalty solutions, can run
        on Kiosks and connects to marketplaces offering a complete Omni channel
        capable solutions.
      </p>
    </div>
  );
};

export default Home;
