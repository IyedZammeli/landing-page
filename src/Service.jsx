import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import Common from "./Common";

const Services = () => {
  return (
    <>
      <div className="my-4"> 
      {
/*
<h1 className="text-center"> Our Services </h1>
</div>
<div className="container-fluid mb-5">
  <div className="row">
    <div className="col-10 mx-auto">
      <div className="row gy-4">
        {Sdata.map((val, ind) => {
          return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
        })}
      </div>
    </div>
  </div> */
      }
      {/*<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
      <center> <h1> Introduction </h1> </center>*/}
      <div> 
       
       <div><h1 className="text-center"> Getting Started </h1> 
       <br>
       </br>
       <h6 className="text-center" >In this section, we will walk you through the necessary steps to add our  AG Grid solution to an existing JavaScript project,
       <br >
       </br> and configure some of the essential features of it. We will show you some of the fundamentals steps so you can completly
       <br>
       </br>  add it to your project.  </h6>
       <br>
       </br>
       <br></br>
       <h1 className="text-center"> AG-Grid Problems </h1> 
       <br>
       </br>
       <h6 className="text-center" > AG Grid is the industry standard for JavaScript Enterprise Applications. Developers using AG Grid are building applications that would not be possible if AG Grid did not exist.
       <br>
       </br>
       However, working with AG Grid usually depends on developers to manipulate table data, columns, add data, delete data. Customers might see this as a problem, as they might
       <br> 
       </br> not
        have
        programming or data interaction knowledge. </h6>
        <br>
        </br>
        <h1 className="text-center">
          Our Solution 
        </h1>
        <h6 className="text-center">In our project, we sought to provide a solution that addresses the issues of AG Grid, we worked on creating an interface that helps 
        <br> 
        </br> customers customize their own tables, interact with data without coding, add and delete data in an easy way.  </h6>
        <br>
        </br>
        <h1 className="text-center">
          Necessary steps for integration (10 in total ) 
        </h1>
        <br>
        </br>
        <h6 className="text-center" > In this section we will talk about the necessary steps to integrate our AG-Grid Interface and what are the requirements that will allow the interface to fully fonction  </h6>
        <br>
        </br>
        <h1 className="text-center" > Step 1: Create MERN Project </h1>
        <br>
        </br>
        <h6 className="text-center" > In our solution we are currently using MERN stack for providing the interface, so one of the necessary steps is to have a MERN project, 
        <br>
        </br>that means creating react js boilerplate, setting up the backend with node js and creating a data base with mongoDB  </h6>
        <br>
        </br>
        <h1 className="text-center" > Step 2: Choose where you gonna integrate it  </h1>
        <br>
        </br>
        <button className="text-center" >  </button>
       </div>
       <div>
         <center> </center>
       </div>
       </div>
      </div>
    </>
  );
};
export default Services;