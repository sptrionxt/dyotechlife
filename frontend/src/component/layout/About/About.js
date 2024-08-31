import React from "react";
import "./About.css";
import logo from "../../../images/logo.jpg"
import { Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <div className="logo"><img src={logo} alt="Logo" /></div>
          
            <Typography>DYOTECHLIFE</Typography>
            <span>
            DYOTECHLIFE
            Our company deal mainly in R&D and sale of the correlative materials , devices  of OPV/OLED/PSC/ OEC/OTFT/DSSC. Based our professional technical team of Ph.D.'s and master's, we have developed many kinds of organic optoelectronic intermediates, device materials, including Thiophene (TH), Fluorene (FL), Carbazole (CZ), Dithienocyclopenta/pyrrole/silole (DTC/DTP/DTS), Benzothiadiazole (BT),   Indacenodithiophene (IDT), Benzobisthiadiazole (BBT),  Naphthothiadiazole (NT), Naphthalenediimide (NDI), Perylenediimide (PDI), Isoindigo (IID), Pyridinethiadiazole (PT), Thieno[3,4-b]thiophene (TT), etc.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Socials</Typography>
            <a
              href="https://www.youtube.com"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;