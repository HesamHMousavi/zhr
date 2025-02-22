import React, { useEffect, useRef, useState } from "react";
import "./FAQs.css";

const FAQSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const faqs = [
    {
      question: "How long do acrylic nails last?",
      answer:
        "With proper care, acrylic nails can last 2–3 weeks before needing a fill. Regular maintenance helps them stay strong and beautiful.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Prices are based on the complexity of the design and can vary. I'll provide a personalised quote after reviewing your requirements and inspiration.",
    },
    {
      question: "How should I prepare for my appointment?",
      answer:
        "Please arrive with clean, polish-free nails. If you have specific design ideas, feel free to send pictures in advance.",
    },
    {
      question: "Can I customise my nail design?",
      answer:
        "Absolutely! I love creating custom sets that reflect your style. Share your ideas or inspo pics, and we'll design something perfect for you.",
    },
  ];

  return (
    <div ref={sectionRef} className="faq-section">
      <h2 className={`faq-title ${isVisible ? "animate-in" : "animate-out"}`}>
        Frequently Asked Questions
      </h2>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${
              isVisible ? `animate-in delay-${index}` : "animate-out"
            }`}
          >
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
