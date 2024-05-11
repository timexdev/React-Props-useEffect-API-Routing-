import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <Card title="National Innovative Diploma (NID)" 
            content="The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE)."
            link="https://edu.sqi.ng/nid/"
            />
          </div>
          <div className="col-12 col-md-4">
            <Card title="Professional Diploma Certificate" 
            content="The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career."
            link="https://edu.sqi.ng/procert/" />
          </div>
          <div className="col-12 col-md-4">
            <Card title="Certificate Program"
            content="The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers."
            link="https://edu.sqi.ng/procert/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
