import React from "react";
import "./Section.css";

const Section = ({ bg = "var(--text-color-header)", color, data }) => {
  return (
    <div
      style={{
        background: bg,
      }}
    >
      <div className="section max-width">
        <h2 className="section-title" style={{ color: color }}>
          Gel X sets
        </h2>
        <p className="sub-title" style={{ color: color }}>
          Lightweight, gel x extensions for a natural feel
        </p>
        <div className="img-con">
          {data.map((item) => (
            <div className="img-item">
              <img src={item.Img} alt="" />
              <h4 style={{ color: color }}>Title</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
