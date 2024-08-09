import React from "react";
import "../home/Home.css";
import "./explore.css";
import PolygonLogo from "../../assets/polygon-logo.png";

const Explore = () => {  
    return (
        <>
        <div className="overall">
            <div className="homeSideBar">
            <img src={PolygonLogo} alt="" className="poly" />

                <button className="but_home">Home</button>
                <button className="but_home">Profile</button>
                <button className="but_home">Subscription</button>
                <button className="but_home">More</button>
                <button
                    className="but_home_add"
                >
                    Add Music
                </button>
                <p className="native">0 MATIC</p>
                <p className="address_native">0x07...eb98</p>
            </div>
            <div className="second_column_div">
                <img src="https://images.squarespace-cdn.com/content/v1/5ad1664c31d4df2044d59e1b/1523889368800-QPY1FVHUIW4L6FA32KJP/mosaic_sample.jpg?format=1500w" alt="" className="profile" />
                <p className="address_native2">0x07989...ebi40298</p>
                <p className="native2">0 MATIC</p>
                <button className="start_stream">Start Stream</button>
                <button className="stop_stream">Stop Stream</button>
            </div>
            <div className="third_column_div">
                <p className="mem">Proof of Membership</p>
                <div className="card_polygon">
                    <img src={PolygonLogo} alt="" className="poly" />
                </div>
                <button className="start_stream">Subscribe</button>
                <button className="stop_stream">Claim</button>
            </div>
            </div>
        </>
  );
};

export default Explore;