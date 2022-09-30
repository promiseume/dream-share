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
          <img src={PersonRunning} alt="" />
          <p>Sports and Activity</p>
        </div>
        <div className="holiday-content">
          <div className="opaque"></div>
          <img src={Sunset} alt="" />
          <p>Wellness and Health</p>
        </div>
        <div className="holiday-content">
          <div className="opaque"></div>
          <img src={MountainClimb} alt="" />
        </div>
        <div className="holiday-content">
          <div className="opaque"></div>
          <img src={Card} alt="" />
        </div>
        <div className="holiday-content">
          <div className="opaque"></div>
          <img src={Stadium} alt="" />
        </div>
        <div className="holiday-content">
          <div className="opaque"></div>
          <img src={Massage} alt="" />
        </div>
        <div className="holiday-content">
          <div className="opaque"></div>
          <img src={Tour} alt="" />
        </div>
      </div>
      <div className="search-patner">
        <h3>Crate your holiday activity</h3>
        <p>Hi! What are your holiday interests?</p>
        <div className="search-form">
          <input type="text" placeholder="Enter your interest" />
          <button>Search partners</button>
        </div>
      </div>
    </section>
  );
}
