import { useState, useEffect } from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { toast } from "react-toastify";
import { userData } from "../data/userData";
import "react-toastify/dist/ReactToastify.min.css";
import { expireInsuranceData } from "../data/addToUserData";

const ExpireInsurance = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [expDate, setExpDate] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const navigate = useNavigate();
  let company = userData.insurance_company;
  const v = userData.expiration_date;

  useEffect(() => {
    if (v !== "") {
      setIsButtonDisabled(false);
      setExpDate(v);
    }
  }, []);

  const nextStep = (e) => {
    e.preventDefault();
    if (expDate !== "") {
      expireInsuranceData(expDate);
      navigate("/home-type");
    }
    else {
      toast.error('Please enter a valide date');
      return
    }
   
  };

  const handleExpDateChange = (event) => {
    toast.dismiss();
    let input = event.target.value;
    input = input.replace(/[^0-9\/]/g, "");
    input = input.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    input = input.replace(/(\d{2}\/\d{2}\/\d{4})\d+?/, "$1");

    // Check if the input matches the expected date format
    const datePattern = /(0[1-9]|1[0-2])\/([0-2][0-9]|3[0-1])\/\d{4}/;
    const isMatch = input.match(datePattern) !== null;

    setExpDate(input);

    // Compare the input date to the current date if the input is a valid date
    if (isMatch) {
      const currentDate = new Date();
      const inputDate = new Date(input);
      const isExpired = inputDate.getTime() < currentDate.getTime();
      setIsExpired(isExpired);

      // Show a toast notification if the input date is expired
      if (isExpired) {
        toast.error("The input date is expired.");
        return;
      } else {
        setIsButtonDisabled(false);
      }
    }
  };

  return (
    <div className="bg-dark-purple pb-10">
      <Banner setProgress={20} />
      <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
        <div className="m-w-1/2 space-y-8">
          <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
              When does your{" "}
              <span className="underline decoration-pink-500">
                {/* if company is Other than change it to current else leave as is */}
                {company === "Other" ? "current" : company}
              </span>{" "}
              policy{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Expire
              </span>
              ?
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className=" space-y-6 flex flex-col  items-center justify-center">
              <div className="justify-center">
                <input
                  type="text"
                  name="exp"
                  id="expires"
                  placeholder="MM/DD/YYYY"
                  pattern="(0[1-9]|1[0-2])\/([0-2][0-9]|3[0-1])\/\d{4}"
                  required
                  value={expDate}
                  onChange={handleExpDateChange}
                  className="w-full lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                />
              </div>

              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`px-6 py-4 max-w-xl w-full  mt-5 text-lg bg-pink-600 ${
                  isButtonDisabled
                    ? "cursor-not-allowed disabled:opacity-75  bg-input-purple"
                    : ""
                } hover:shadow-lg text-white rounded transition duration-200`}
                id="zipCodeButton"
                onClick={nextStep}
              >
                Next
              </button>
            </div>

            <LinkWithQuery to="/current-insurance">Back</LinkWithQuery>
          </form>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default ExpireInsurance;
