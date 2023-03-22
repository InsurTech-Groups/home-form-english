import { userData } from "./userData";
import { toast } from "react-toastify";
import axios from "axios";

export const postDataToJangle = async () => {

  //get current date
  var today = new Date();
  console.log(today)


  let userId = userData.userId
  let ip = userData.ip
  let zipCode = userData.zip_code
  let city = userData.city
  let state = userData.state
  let trustedForm = userData.trustedForm
  let businessName = userData.business_name
  let coverage = userData.coverage_needed
  let businessStructure = userData.business_structure
  let businessProfession = userData.business_profession
  let businessFounded = userData.business_founded
  let businessRevenue = userData.business_revenue
  let businessEmployees = userData.business_employees
  let businessAddress = userData.business_address
  let businessCity = userData.business_city
  let  businessState = userData.business_state
  let businessZipcode = userData.business_zipcode
  let firstName = userData.first_name
  let lastName = userData.last_name
  let email = userData.email
  let phone = userData.phone


    let data = {
    "meta": {
      "originally_created": today,
      "originally_created_by": userId,
      "user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
      "landing_page_url": "https://www.commercial.insurtechgroups.com",
      "tcpa_compliant": true,
        'tcpa_consent_text': "By clicking Get My Free Quote below, I am agreeing to receive text messages from InsurTech Groups and business partners. I provide my signature expressly consenting to recurring contact from Insurtech Groups or its business partners at the number I provided regarding products or services via live, automated or prerecorded telephone call, text message, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of purchasing property, goods, or services. I understand that I can revoke this consent at any time. Terms & conditions & Privacy policy apply.",
      'trusted_form_url': ''
      },

      "contact": {
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "phone": phone,
        
        "city": city,
        "state": state,
        "zip_code": zipCode,
        "ip_address": ip
      },
      "data": {
        
    }
      
  
  
  }


  fetch('https://hooks.zapier.com/hooks/catch/13124392/3bsi2io/', {
    method: 'POST',
  
    body: data
  })
    .then(response => response.json())
    .then(data => {
      toast.success('Form Submitted');
      console.log(data)
    })
    .catch((error) => {
      toast.error('Error in submitting your form!')
      return
    });
  



}