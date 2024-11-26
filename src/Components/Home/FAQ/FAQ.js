import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I get started with your services?",
      answer: "To get started, you can contact us through our website, email, or phone. We'll schedule an initial consultation to understand your needs and discuss potential solutions.",
    },
    {
      question: "How do you manage projects?",
      answer: "Our project management process involves clear communication, regular updates, and collaborative tools to ensure your satisfaction.",
    },
    {
      question: "How long does it take to complete a project?",
      answer: "The timeline varies depending on the scope and complexity of the project. We’ll provide an estimated timeframe during the consultation phase.",
    },
    {
      question: "How much do your services cost?",
      answer: "Pricing depends on the specific services you require. Contact us for a customized quote tailored to your needs.",
    },
    {
      question: "Can you redesign my existing website/application?",
      answer: "Yes, we specialize in redesigning and enhancing existing websites and applications to meet modern standards.",
    },
    {
      question: "Do you offer support and maintenance services?",
      answer: "Absolutely! We provide ongoing support and maintenance services to ensure your project runs smoothly post-launch.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">We’ve got the answers.</h1>
      <div className="faq-items">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
      <div className="faq-footer">
        <p>
          Still have more questions? Contact our <a href="/help-center">help center</a>.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
