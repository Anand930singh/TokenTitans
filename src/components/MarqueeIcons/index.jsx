import React from "react";
import Marquee from "react-fast-marquee";
import EthereumLogo from "../../assets/ethereum-eth-logo.png";
import NodeLogo from "../../assets/node-js-black-icon.svg";
import GraphLogo from "../../assets/the-graph.png";
import ReactLogo from "../../assets/react.svg";
import PolygonLogo from "../../assets/polygon-logo.png";

const icons = [
  { src: EthereumLogo, alt: "Ethereum Logo" },
  { src: NodeLogo, alt: "Node.js Logo" },
  { src: GraphLogo, alt: "The Graph Logo" },
  { src: ReactLogo, alt: "React Logo" },
  { src: PolygonLogo, alt: "Polygon Logo" },
];

const Icons = () => {
  return (
    <Marquee
      speed={50}
      pauseOnClick={true}
      autoFill={true}
      className="max-w-6xl mx-auto my-12 rounded-2xl bg-transparent "
    >
      <div className="flex gap-x-12 p-6">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className="h-16 w-16"
          />
        ))}
      </div>
    </Marquee>
  );
};

export default Icons;
