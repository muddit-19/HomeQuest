import React from "react";
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import "./Contacts.css";

const Contacts = () => {
  return (
    <section className="c-wrapper" id="contacts">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left-side  */}
        <div className="flexColStart c-left">

          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
          <br />
            We beleive a good  blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first-row    */}
            <div className="flexStart row">

              {/* 1st-mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+91 021-12314-514</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* 2nd-mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+91 021-12314-514</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>

            </div>

            {/* second-row  */}
            <div className="flexStart row">

              {/* 3rd-mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video</span>
                    <span className="secondaryText">+91 021-12314-514</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call</div>
              </div>

              {/* 4th-mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+91 021-12314-514</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>

            </div>
          </div>


        </div>

        {/* right-side  */}
        <div className="c-right">

          <div className="image-container">
            <img src="./contact.jpg" alt="img" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contacts;
