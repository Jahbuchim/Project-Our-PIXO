import { useState, useEffect } from "react";
import { FeaturesData, professionalTouchData } from "./FeaturesData";
import dropdownArrowSvg from "./assets/dropdownArrow.svg";

import "./Features.css";
import GetStartedForFree from "../../components/GetStartedForFree/GetStartedForFree";
import EasyTools from "../../components/EasyTools/EasyTools";

const Features = () => {
  const [expandedCardId, setExpandedCardId] = useState(false);

  const handleCardClick = (id) => {
    setExpandedCardId((prevId) => (prevId === id ? null : id));
  };

  // Pre-load images
  useEffect(() => {
    const preloadImages = () => {
      professionalTouchData.forEach(({ imageUrl }) => {
        const img = new Image();
        img.src = imageUrl; // Pre-load each image
      });
    };
    preloadImages();
  }, []); // Runs only once when the component mounts

  return (
    <main className="features">
      <header className="featuresHero">
        <h1>The Perfect Tools For You</h1>
      </header>
      <EasyTools easytoolsdata={FeaturesData} />
      <section className="giveBusinessProfTouch">
        <h1 className="giveBusinessProfTouchH1">
          Give your business a professional touch
        </h1>
        <div className="giveBusinessProfTouchContents">
          {professionalTouchData.map(({ id, title, description, imageUrl }) => (
            <div
              key={id}
              className="profTouch"
              onClick={() => handleCardClick(id)}
              style={{ cursor: "pointer" }}
            >
              <div className="profTouch-title-wrapper">
                <h3>{title}</h3>
                <img src={dropdownArrowSvg} alt="" className={expandedCardId === id ? "rotate" : ""} />
              </div>
              {expandedCardId === id ? (
                <>
                  <p>{description}</p>
                  <img src={imageUrl} alt={title} />
                </>
              ) : (
                <p>{description.slice(0, 120) + "..."}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <GetStartedForFree />
    </main>
  );
};

export default Features;
