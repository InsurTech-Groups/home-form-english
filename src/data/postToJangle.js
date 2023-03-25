import { userData } from "./userData";
import { toast } from "react-toastify";
import axios from "axios";
import Bugsnag from "@bugsnag/js";

export const postDataToJangle = async () => {

  //get current date
  var today = new Date();


  let bedrooms = userData.bedrooms;
  let city = userData.city;
  let claims = userData.claims;
  let dob = userData.dob;
  let expiration_date = userData.expiration_date;
  let formType = userData.form_type;
  let gender = userData.gender;
  let home_type = userData.home_type;
  let insurance_company = userData.insurance_company;
  let ip = userData.ip;
  let ownership = userData.ownership;
  let square_footage = userData.square_footage;
  let state = userData.state;
  let timezone = userData.timezone;
  let timezoneEasy = userData.timezoneEasy;
  let trusted_form_token = userData.trusted_form_token;
  let year_built = userData.year_built;
  let zip = userData.zip_code;
  let first_name = userData.first_name;
  let last_name = userData.last_name;
  let email = userData.email;
  let phone = userData.phone;
  let address = userData.address;




    let data = {

      meta: {
        originally_created: today,
        trusted_form_cert_url: trusted_form_token,
        user_agent: Navigator.userAgent,
        landing_page_url: "https://www.home.insurtechgroups.com",
        tcpa_compliant: true,
        tcpa_consent_text: "By clicking Get My Free Quote below, I am agreeing to receive text messages from InsurTech Groups and business partners. I provide my signature expressly consenting to recurring contact from Insurtech Groups or its business partners at the number I provided regarding products or services via live, automated or prerecorded telephone call, text message, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of purchasing property, goods, or services. I understand that I can revoke this consent at any time. Terms & conditions & Privacy policy apply."
      },
    
      contact: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        zip_code: zip,
        ip_address: ip,
      },
    
      data: {
        birth_date: dob,
        gender: gender,
        marital_status: "Single",
        properties: [
          {
            property_type: home_type,
            ownership: ownership,
            occupancy: bedrooms,
            year_built: year_built,
            zip_code: zip,
            square_footage: square_footage,
    
          }
        ],
    
        requested_policy: {
          coverage_type: "Superior",
    
        },
          
        current_policy: {
          insurance_company: insurance_company,
          expiration_date: expiration_date,
          coverage_type: "Superior",
        }
      }
  }
  

  fetch('https://api.jangl.com/v2/home_insurance/capture', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token 07a0e7ada9a4f2c9d4fdc2a01e8599c8e975ae12'
    },
    body: JSON.stringify(data)

  })
    .then(response => response.json())
    .then(data => {
      toast.success('Your Form Has Been Submitted!')
    })
    .catch((error) => {
      toast.error('There was an error submitting your form. Please try again.')
      Bugsnag._notify(error, function (event) {
        event.severity = "error";
      });
      console.error('Error:', error);
    });
}
    

      
  

