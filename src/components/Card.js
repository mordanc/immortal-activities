import React from "react";
// import diablo from "public/assets/images/diablo.jpeg";
import "../App.css";
import maxrollLogo from "../maxroll-logo.png";
import ExternalLink from "./ExternalLink";

export default function Card({
  title = "Event",
  location = "Location",
  days = [],
  times = [],
  onClick = () => {},
  hoverable = true,
  imagePath = "/assets/images/diablo.jpeg",
}) {
  const titleArray = title?.split(" ");
  const linkText = titleArray.reduce((prev, cur, index) => {
    return index === 0 ? cur : `${prev}-${cur}`;
  }, "");

  return (
    <div
      onClick={onClick}
      className={`border rounded-lg bg-immortal-dark ${
        hoverable && "hover:opacity-75 cursor-pointer"
      } px-4 py-2 flex flex-col space-y-2`}
    >
      <div className="text-2xl underline immortal-title text-gray-300">
        {title}
      </div>
      {/* <img className="rounded h-48" src={diablo} alt="diablo image" /> */}
      <img
        className="rounded h-48"
        src={process.env.PUBLIC_URL + imagePath}
        alt="diablo image"
      />
      <span className="text-white">
        Location:{" "}
        <span className="font-bold immortal-brown text-xl ">{location}</span>
      </span>
      {days.length > 0 && (
        <div className="flex space-x-2 items-center">
          <span className="text-white">Days:</span>
          {days.map((day, i) => (
            <span key={day} className="font-bold text-xl immortal-red">
              {day}
              {i !== days.length - 1 && ","}
            </span>
          ))}
        </div>
      )}

      {times.length > 0 && (
        <div className="flex space-x-2 items-center flex-wrap">
          <span className="text-white">Times:</span>
          {times.map((time, i) => (
            <span key={time} className="font-bold underline  immortal-brown">
              {time}
              {i !== times.length - 1 && ","}
            </span>
          ))}
        </div>
      )}
      <div className="grid grid-cols-2 gap-2">
        <ExternalLink
          title="Maxroll.gg"
          imgSrc={maxrollLogo}
          href={`https://immortal.maxroll.gg/zone-events/${linkText}`}
        />
        {/* <ExternalLink
          title="Maxroll.gg"
          imgSrc={maxrollLogo}
          href={`https://immortal.maxroll.gg/zone-events/${linkText}`}
        /> */}
      </div>
    </div>
  );
}
