import React from "react";
import web from "../src/images/img2.svg";

import Commom from "./Common";

const Home = () => {
  return (
    <>
      <Commom
        name="Build customized tables with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};
export default Home; 