import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="grid-container">
      <h2>What have we Created?</h2>
      <p className="box">
        This app is a replica of the world-famous website..Youtube! Users can
        well... use this app to search among thousands of videos of their
        choosing. <span className="fun-text"><strong>Have Fun!</strong></span>
      </p>

      <h2>Meet The Crew</h2>

      <p className="box">
      <h3>Frantz</h3>
        My name is Frantz-Sebastien, I'm from Haiti and I came to the US in
        2007. My passions involve Nature, Politics, and History. I'm currently
        learning to be a Software Engineer so that I can use those skills to
        save the planet! My GitHub page can be found here:{" "}
        <a href="https://github.com/Frantz-Sebastien">
          https://github.com/Frantz-Sebastien
        </a>
      </p>

      <p className="box">
      <h3>Sabri</h3>
        "Hi everyone. My name is Sabri Mohiuddin. I am from Bangladesh. I moved
        to America about 10 years ago with my family. Even though my background
        is not in the tech field, I have recently started my journey to become
        a full-stack software engineer. My hobbies include fish keeping, gaining
        knowledge about the stock market and real estate. Here is my GitHub page
        link:{" "}
        <a href="https://github.com/sabrimohiuddin">
          https://github.com/sabrimohiuddin
        </a>
        ."
      </p>

      <p className="box">
      <h3>Abel</h3>
        My name is Abel Vargas. I'm passionate about tabletop gaming and
        theatre. I'm currently training to be a software engineer.
      </p>

      <p className="box">
      <h3>Alli</h3>
        Hey everyone, Allahvel Salisbury here, just call me Alli for short. It's
        catchier. I have a true passion for technology and currently an aspiring Software Engineer. Wish me Luck!
        Checkout my GitHub page:{" "}
        <a href="https://github.com/AllahvelS">Alli's GitHub</a>
      </p>
    </div>
  );
};

export default About;
