
import { userData } from "./userData";


export const landingPageData = (id, zipCodeValue, cityValue, stateValue) => {

  userData.userId = id;
  userData.zip_code = zipCodeValue;
  userData.city = cityValue;
  userData.state = stateValue;

  let tF = document.getElementById('xxTrustedFormToken_0').value;

  userData.trusted_form_token = tF;


};

export const noInsuranceData = (insurance, expirationDate, coverageType) => {

  userData.insurance_company = insurance;
  userData.expiration_date = expirationDate;
  userData.coverage_type = coverageType;


};

export const insuranceCompanyData = (company) => {

  userData.insurance_company = company;


};

export const expireInsuranceData = (expires) => {

  userData.expiration_date = expires;


};

export const homeTypeData = (homeType) => {
  
    userData.home_type = homeType;
  
};

export const ownershipData = (ownership) => {
  
    userData.ownership = ownership;
  
};  

export const bedroomsData = (bedrooms) => {
    
      userData.bedrooms = bedrooms;
    
};

export const yearBuiltData = (yearBuilt) => {
      
        userData.year_built = yearBuilt;
      
};

export const squareFootageData = (squareFootage) => {

  userData.square_footage = squareFootage;

};

export const genderData = (gender) => {

  userData.gender = gender;

};

export const dobData = (dob) => {
  
    userData.dob = dob;
  
};

export const claimsData = (claims) => {
    
      userData.claims = claims;
    
};

export const addressData = (address) => {

  userData.address = address;

};

export const nameData = (first, last) => {
  
    userData.first_name = first;
    userData.last_name = last;
  
};

export const emailData = (email) => {
      
        userData.email = email;
      
};

export const phoneData = (phone) => {
          
            userData.phone = phone;
          
};