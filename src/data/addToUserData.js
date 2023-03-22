
import { userData } from "./userData";


export const landingPageData = (id, zipCodeValue, cityValue, stateValue, url) => {

  userData.userId = id;
  userData.zip_code = zipCodeValue;
  userData.city = cityValue;
  userData.state = stateValue;

  let tF = document.getElementById('xxTrustedFormToken_0').value;

  userData.trusted_form_token = tF;

  console.log('userData', userData);

};
