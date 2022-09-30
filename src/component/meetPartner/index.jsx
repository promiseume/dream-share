import React, { useState, useEffect } from "react";
import "./meet-partner.css";
import celebs from "../celebrity.js";

export default function MeetPartner() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [celebrities, setCelebrities] = useState(celebs.slice(start, end))

  const handleClick = () => {
    if (start == 15) {
      setStart(0);
      setEnd(5);
      setCelebrities(celebs.slice(start, end))
    } else {
      setStart((prev) => prev + 5);
      setEnd((prev) => prev + 5);
      setCelebrities(celebs.slice(start, end))
    }
  };

  useEffect(() => {}, [start, end]);
  return (
    <section className="meet-partner">
      <h3>Meet a partner for your best holiday</h3>
       <div className='celebrity-div'>
      {celebrities.map((celebrity) => {
        return (
          <div className="celebrity" key={celebrity.id}>
            <img src={celebrity.image} alt={celebrity.name} />
            <p>{celebrity.name}</p>
          </div>
        );
      })}
      </div>
      <button onClick={handleClick}>See other partners</button>
    </section>
  );
}
