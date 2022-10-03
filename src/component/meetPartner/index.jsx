import React, { useState, useEffect } from "react";
import "./meet-partner.css";
import celebs from "../celebrity.js";

export default function MeetPartner() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [celebrities, setCelebrities] = useState(celebs.slice(start, end));

  const handleClick = () => {
    if (start === 16) {
      setStart(0);
      setEnd(4);
      setCelebrities(celebs.slice(start, end));
    } else {
      setStart((prev) => prev + 4);
      setEnd((prev) => prev + 4);
      setCelebrities(celebs.slice(start, end));
    }
  };

  useEffect(() => {}, [start, end]);
  return (
    <section className="meet-partner">
      <h3>Meet a partner for your best holiday</h3>
      <div className="celebrity-div">
        {celebrities.map((celebrity) => {
          return (
            <div className="celebrity" key={celebrity.id}>
              {celebrity.image ? (
                <div className="celebrity-pic">
                  <img
                    className="img"
                    src={celebrity.image}
                    alt={celebrity.name}
                  />
                  <div className="icon" style={{backgroundColor: celebrity.color}}>
                    <img src={celebrity.icon} alt={celebrity.name} />
                  </div>
                </div>
              ) : (
                <div className="loading-img">{celebrity.name}</div>
              )}
              <h2>{celebrity.name}</h2>
              <p>{celebrity.about}</p>
            </div>
          );
        })}
      </div>
      <div className="view-more-btn">
        <button onClick={handleClick}>See other partners</button>
      </div>
    </section>
  );
}
