import React from "react";
import { useNavigate } from "react-router-dom";
import aboutus from "../image/aboutus.jpg";

const About = () => {
  return (
    <div>
      <center>
        <img
          src={aboutus}
          alt="img"
          style={{ width: "50%", height: "40vh", marginTop: "20px" }}
        />
      </center>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "xx-large",
          fontFamily: "cursive",
        }}
      >
        All YOU ABOUT KNOW
      </h1>
      <p style={{ marginTop: "20px" ,textAlign:"justify",padding:"2%"}}>
        {" "}
        We are Top Compaines since 2010
        <br />
        Imagine a situation where a person you met for the first time is trying
        to sell you products. But, they only talk about their products and its
        features during the conversation. They don’t mention anything about the
        brand, how it will impact you, or why they’re unique. Would you buy from
        them? That’s exactly how a website with no or poorly written About Us
        page will sound — untrustworthy and boring. Here are some ways in which
        an About Us page brings value to your business: Spokesperson for your
        brand Now, imagine if that salesperson talks to you about what the brand
        stands for and how it impacts people’s lives. They evoke an emotion in
        you and relate it to the product they’re selling, without actually
        urging you to buy. Won’t you be more inclined to make a purchase or at
        least be interested in the brand?
      </p>
    </div>
  );
};

export default About;
