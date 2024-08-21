import React, { useState } from "react";

const faqData = {
  openingHours: {
    question: "What are your opening hours?",
    answer:
      "Our restaurant is open from 8 AM to 10 PM from Monday to Saturday, and from 9 AM to 8 PM on Sundays.",
  },
  vegetarianOptions: {
    question: "Do you offer vegetarian and vegan options?",
    answer:
      "Yes, we have a variety of vegetarian and vegan dishes available on our menu to cater to different dietary preferences.",
  },
  dressCode: {
    question: "Is there a dress code?",
    answer:
      "We recommend smart casual attire for our guests, but there is no strict dress code.",
  },
  reservations: {
    question: "Can I make a reservation?",
    answer:
      "Yes, you can make a reservation by calling us at (123) 456-7890 or through our website’s reservation page.",
  },
  childrenMenu: {
    question: "Do you have a children's menu?",
    answer:
      "Yes, we have a specially curated menu for children that includes a variety of kid-friendly options.",
  },
  parking: {
    question: "Is parking available at your restaurant?",
    answer: "Yes, we have a dedicated parking lot available for our customers.",
  },
  takeoutDelivery: {
    question: "Do you offer takeout or delivery services?",
    answer:
      "Yes, we offer both takeout and delivery services. You can place your order online or call us directly.",
  },
  foodAllergies: {
    question: "Do you accommodate food allergies and dietary restrictions?",
    answer:
      "Absolutely. Please inform your server of any food allergies or dietary restrictions, and we will do our best to accommodate your needs.",
  },
};

const FAQItem = ({ faq }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`faq-item ${isActive ? "active" : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <h2 className="faq-question">{faq.question}</h2>
      <p className="faq-answer">{faq.answer}</p>
    </div>
  );
};

export function FAQ() {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-questions-answers">
        {Object.values(faqData).map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
}
