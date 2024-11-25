import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/telegram.png";
import Fiverr from "../../img/Whatsapp.png";
import Amazon from "../../img/u7buy.png";
import Shopify from "../../img/discord.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          {/* <spane>
          We Ktm_Store offer Monopoly Go,<br/> a service that supports popular platforms like:
          <br/>
           WhatsApp, Telegram, Discord, and Facebook. 
          <br/>
          Expand your business reach, build communities, and maximize 
          <br/>customer interaction effortlessly.
          </spane> */}
          <a href="https://www.u7buy.com/seller/KTMStore" target="_blank" rel="noopener noreferrer">
  <button className="button i-button">Hire me</button>
</a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
          <img src={Upwork} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
  <a href="https://www.u7buy.com/seller/KTMStore" target="_blank" rel="noopener noreferrer">
    <img src={Amazon} alt="" />
  </a>
</div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
