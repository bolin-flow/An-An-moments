import React from "react";

const About = () => {
  // Uncomment this line to trigger the error
  throw new Error("This is a test error for the Error Boundary!");

  return <div>About</div>;
};

export default About;
