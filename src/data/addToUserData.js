
import { userData } from "./userData";


export const landingPageData = (id, zipCodeValue, cityValue, stateValue) => {

  userData.userId = id;
  userData.zip_code = zipCodeValue;
  userData.city = cityValue;
  userData.state = stateValue;

  let tF = document.getElementById('xxTrustedFormToken_0').value;

  userData.trusted_form_token = tF;

  console.log('userData', userData);

};

export const noInsuranceData = (insurance, expirationDate, coverageType) => {

  userData.insurance_company = insurance;
  userData.expiration_date = expirationDate;
  userData.coverage_type = coverageType;

  console.log('userData', userData);

};

export const insuranceCompanyData = (company) => {

  userData.insurance_company = company;

  console.log('userData', userData);

};

export const expireInsuranceData = (expires) => {

  userData.expiration_date = expires;
  console.log('userData', userData);


};

export const homeTypeData = (homeType) => {
  
    userData.home_type = homeType;
    console.log('userData', userData);
  
};

export const ownershipData = (ownership) => {
  
    userData.ownership = ownership;
    console.log('userData', userData);
  
};  

export const bedroomsData = (bedrooms) => {
    
      userData.bedrooms = bedrooms;
      console.log('userData', userData);
    
};

export const yearBuiltData = (yearBuilt) => {
      
        userData.year_built = yearBuilt;
        console.log('userData', userData);
      
};