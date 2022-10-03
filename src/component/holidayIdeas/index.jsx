import React from "react";
import "./holiday-ideas.css";
import Card from "../images/card.png";
import Massage from "../images/massage.png";
import MountainClimb from "../images/moutainClimb.png";
import PersonRunning from "../images/personRunning.png";
import Stadium from "../images/stadium.png";
import Sunset from "../images/sunset.png";
import Tour from "../images/tour.png";

export default function HolidayIdeas() {
  return (
    <section className="holiday-ideas">
      <h3>Discover holiday activity ideas</h3>
      <div className="holiday-image">
        <div className="holiday-content">
          <div className="opaque"></div>
          <img src={PersonRunning} alt="Sports and Activity" />
          <p>Sports and Activity</p>
        </div>
        <div className="holiday-content">
          <div className="opaque"></div>
          <img src={Sunset} alt="Wellness and Health" />
          <p>Wellness and Health</p>
        </div>
        <div className="holiday-content">
          <div className="opaque"></div>
          <img src={MountainClimb} alt="Sports" />
          <p>Extreme Sports and Expeditions</p>
        </div>
        <div className="holiday-content games">
          <div className="opaque"></div>
          <img src={Card} alt="Games" />
          <p>Games</p>
        </div>
        <div className="holiday-content holiday-img">
          <div className="opaque"></div>
          <img src={Stadium} alt="Culture and Education" />
          <p>Culture and Education</p>
        </div>
        <div className="holiday-content holiday-img">
          <div className="opaque"></div>
          <img src={Massage} alt="Relaxation" />
          <p>Enjoyment and Relaxation</p>
        </div>
        <div className="holiday-content games">
          <div className="opaque"></div>
          <img src={Tour} alt="Travelling" />
          <p>Travelling</p>
        </div>
      </div>
      <div className="search-patner">
        <h3>Creat your holiday activity</h3>
        <p>Hi! What are your holiday interests?</p>
        <div className="search-form">
          <input type="text" placeholder="Enter your interest" />
          <button>Search partners</button>
        </div>
      </div>
    </section>
  );
}
