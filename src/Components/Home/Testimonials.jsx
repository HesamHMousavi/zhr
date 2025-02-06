import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Best nail salon I've ever been to! The staff is professional and the results are always amazing.",
  },
  {
    name: "Emma Davis",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    rating: 5,
    text: "Love the attention to detail and the relaxing atmosphere. My go-to place for nail care!",
  },
  {
    name: "Lisa Thompson",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Their nail art is incredible! Always leave feeling confident and beautiful.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="test-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <IoPersonCircle className="person-icon" />
            <h3>{testimonial.name}</h3>
            <div className="stars">
              <TiStarFullOutline size={25} className="star" />
              <TiStarFullOutline size={25} className="star" />
              <TiStarFullOutline size={25} className="star" />
              <TiStarFullOutline size={25} className="star" />
              <TiStarFullOutline size={25} className="star" />
            </div>
            <p>"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
