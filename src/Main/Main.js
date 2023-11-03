import React from "react";
import KasukaAbout from "./Kasuka-About/Kasuka-about";
import Icons from "./Icons-line/Icons";
import Fetured from "./Futured/Fetured";
import Services from "./Services/Services";
import Cta from "./Cta/Cta";
import Gallery from "./Gallery/Gallery";

export default function Main() {
  return (
    <div>
      <KasukaAbout />
      <Icons />
      <Fetured />
      <Services />
      <Cta />
      <Gallery />
    </div>
  );
}
