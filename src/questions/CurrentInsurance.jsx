import { useState, Fragment, useEffect } from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { useNavigate } from "react-router";
import { insuranceCompanyData } from "../data/addToUserData";
import { userData } from "../data/userData";

const companies = [
  {
    title: "State Farm",
    id: "State Farm",
    value: "State Farm",
    key: "State Farm",
  },
  { title: "Allstate", id: "Allstate", value: "Allstate", key: "Allstate" },
  {
    title: "Liberty Mutual",
    id: "Liberty Mutual",
    value: "Liberty Mutual",
    key: "Liberty Mutual",
  },
  { title: "USAA", id: "USAA", value: "USAA", key: "USAA" },
  {
    title: "Nationwide",
    id: "Nationwide",
    value: "Nationwide",
    key: "Nationwide",
  },
  { title: "Chubb", id: "Chubb", value: "Chubb", key: "Chubb" },
  {
    title: "Farmers Insurance",
    id: "Farmers Insurance",
    value: "Farmers Insurance",
    key: "Farmers Insurance",
  },
  {
    title: "American Family Insurance",
    id: "American Family Insurance",
    value: "American Family Insurance",
    key: "American Family Insurance",
  },
  { title: "Travelers", id: "Travelers", value: "Travelers", key: "Travelers" },
  {
    title: "Progressive",
    id: "Progressive",
    value: "Progressive",
    key: "Progressive",
  },
  { title: "Other", id: "Other", value: "Other", key: "Other" },
];



export default function CurrentInsurance() {


  const navigate = useNavigate();
  
  const nextStep = (companyValue) => {
   
    insuranceCompanyData(companyValue);
    navigate('/expire-insurance')
  };

  return (
    <div className="bg-dark-purple pb-10">
      <Banner setProgress={13} />

      <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
        <div className="m-w-1/2 space-y-8">
          <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
              Who is your{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Current Policy{" "}
              </span>{" "}
              insured with?
            </h2>
          </div>
          <form className="mt-8 space-y-6">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2 justify-center text-center align-middle">
        {companies.map((company) => {
                
          return (
                  <div>
                  <button
                    key={company.key}
                    className="chooseButton w-48 bg-input-purple hover:shadow-lg hover:shadow-button-purple/50 hover:transition-transform hover:ease-in-out hover:bg-button-purple hover:border hover:border-button-purple rounded text-white font-bold"
                data-value={company.value}
                id={company.id}
                    value={company.value}
                onClick={(e) => {
                  e.preventDefault();
                  nextStep(company.value);
                }}
                  >
                    <span>{company.title}</span>
                  </button>
                  </div>
                );
              
            })}

            </div>

            <LinkWithQuery to="/insurance-status">Back</LinkWithQuery>
          </form>
        </div>
      </div>
      <CTA />
    </div>
  );
}
