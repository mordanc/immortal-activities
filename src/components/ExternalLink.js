import React from "react";

function ExternalLink({ imgSrc = "", href = "", title = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex border rounded-lg hover:opacity-75 p-2 cursor-pointer transition bg-immortal-dark items-center space-x-2"
      rel="noreferrer"
    >
      <img src={imgSrc} height="15px" width="20px" alt="max gg site logo" />
      <span className="text-white border-l pl-2">{title}</span>
    </a>
  );
}

export default ExternalLink;
