import React from "react";
import "./FAQs.css";

const faqList = [
  {
    question: "What is the best time to visit Manali?",
    answer: `
      Before closing one of the Manali packages, consider the most suitable time, weather-wise to visit it. 
      The summer months between March and June when the temperature hovers between 10 and 25°C is ideal. 
      You can explore and sightsee during the day, visit quaint cafes, try yak cheese, and attend the Doongri Forest Festival. 
      Solang Valley is great for paragliding in this season. Alternatively, winter (Oct–Feb) offers snow-covered views, 
      skiing, and snow-tubing, especially during the February Winter Carnival.
    `
  },
  {
    question: "What are the must-do things in Manali?",
    answer: `
      Make sure the package you choose includes paragliding in Solang Valley, visiting Hadimba Devi Temple, rafting and 
      camping by the Beas River, visiting Rohtang Pass, and exploring Old Manali cafes. You can also trek to Bhrigu Lake, 
      Beas Kund, Chandratal Lake, or Prashar Lake. Don’t miss Vashisht hot springs and Manali Wildlife Sanctuary.
    `
  },
  {
    question: "How can I travel to Manali from Delhi?",
    answer: `
      Manali is about 535 km from Delhi. Options include direct buses (overnight from ISBT), flights to Bhuntar (50 km away), 
      or trains to Chandigarh/Pathankot followed by a cab/bus. The Bhuntar airport has regular Air India flights from Delhi.
    `
  },
  {
    question: "How can one go to Manali from Chandigarh?",
    answer: `
      Chandigarh to Manali (320 km) is best covered by HRTC buses (AC Volvo/Scania X2) or cabs (Ola, Meru, Uber). 
      Buses leave from ISBT Sector 17 and 43. There are no trains; nearest airport is Bhuntar with flights from Chandigarh.
    `
  },
  {
    question: "What are some places to visit near Manali?",
    answer: `
      Kasol (76 km) - Parvati Valley views and Israeli cafes. 
      Manikaran (80 km) - Famous Sikh Gurudwara and hot springs. 
      Malana (84 km) - Scenic views and cultural uniqueness. 
      Tosh - Surrounded by Himalayan peaks and wildflowers. 
      Kheerganga (77 km) - Trek to 13,500 ft with lush landscapes and clouds.
    `
  },
  {
    question: "What kind of adventure activities take place in Manali?",
    answer: `
      Manali offers year-round rafting (best Apr-Jun, Oct-Mar), mountaineering (Beas Kund, Deo Tibba), paragliding 
      (Solang Valley), skiing (best in Dec-Jan), and zorbing (Rohtang Pass, Solang). All require basic preparation.
    `
  },
  {
    question: "What are some of the best things to buy in Manali?",
    answer: `
      Tibetan and Himalayan handicrafts, woollen clothes, Kullu shawls, prayer wheels, caps, bamboo souvenirs, 
      turquoise/silver jewelry, and Buddhist artwork are top picks from Manali markets.
    `
  },
  {
    question: "How to go to Rohtang Pass from Manali?",
    answer: `
      Rohtang Pass is about 2 hours from Manali. Take private/state-run taxis or hotel-arranged cabs. Buses are also 
      available from the Himachal Tourism Office on Mall Road. Cabs are recommended due to narrow, slippery roads.
    `
  },
  {
    question: "What is the best time to see snow in Manali?",
    answer: `
      Snow is typically visible in Manali by December and January. Rohtang Pass is snow-covered by October. 
      Temperatures may drop to -7°C during peak winter.
    `
  }
];

const FAQs = () => {
  return (
    <section className="FAQs-container">
      <div className="FAQs">
        <h1 style={{ marginBottom: "50px" }}>Manali Tour Package FAQs</h1>
        <section className="question-answer">
          {faqList.map((faq, index) => (
            <details key={index} aria-label={faq.question}>
              <summary>Q. {faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>
      </div>
    </section>
  );
};

export default FAQs;
