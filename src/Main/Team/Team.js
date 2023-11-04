import React from "react";
import Member from "./Member";
import "./Team.css";

export default function Team() {
  return (
    <div className="team-container">
      <h3>تیم</h3>
      <h1>تیم ما را بررسی کنید</h1>
      <div className="team-members">
      <Member />
      <Member />
      <Member />
      <Member />
      </div>
    </div>
  );
}
