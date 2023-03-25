import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Lottie from 'lottie-react';
import Loading from './assets/Loader.json';
import 'react-toastify/dist/ReactToastify.min.css';
import { userData } from './data/userData';
import { ipAddress } from './apis/ipCollection';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


const LandingPage = lazy(() => import('./pages/LandingPage'));
const InsuranceStatus = lazy(() => import('./questions/InsuranceStatus')); 
const CurrentInsurance = lazy(() => import('./questions/CurrentInsurance'));
const ExpireInsurance = lazy(() => import('./questions/ExpireInsurance'));
const HomeType = lazy(() => import('./questions/HomeType'));
const Ownership = lazy(() => import('./questions/Ownership'));
const Bedrooms = lazy(() => import('./questions/Bedrooms'));
const YearBuilt = lazy(() => import('./questions/YearBuilt'));
const SquareFootage = lazy(() => import('./questions/SquareFootage'));
const Gender = lazy(() => import('./questions/Gender'));
const DOB = lazy(() => import('./questions/DOB')); 
const Claims = lazy(() => import('./questions/Claims'));
const Address = lazy(() => import('./questions/Address'));
const Name = lazy(() => import('./questions/Name'));
const EmailPhone = lazy(() => import('./questions/EmailPhone'));
const Submit = lazy(() => import('./questions/Submit'));
const ThankYou = lazy(() => import('./questions/ThankYou'));


export default function App() {
  useEffect(() => {
    // Save userData to session storage when the user reloads or leaves the page
    window.addEventListener('beforeunload', (event) => {
      sessionStorage.setItem('userData', JSON.stringify(userData));
      event.returnValue = 'Are you sure you want to leave?';
    });

    // Check if there is userData in session storage and update the userData object
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        Object.assign(userData, parsedUserData);
      } catch (error) {
        console.error('Error parsing stored userData', error);
      }
    }

  }, [])

  useEffect(() => {
    ipAddress();
  }, [])


  return (
    <div>
      <NavBar />
      <ToastContainer limit={1} position='bottom-left' theme='colored' />
      <Suspense fallback={<div className='bg-input-purple w-full h-full content-center'>
      <Lottie animationData={Loading} loop={true} className="w-80 h-80 mx-auto" />
      </div>}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/insurance-status' element={<InsuranceStatus />} />
          <Route path='/current-insurance' element={<CurrentInsurance />} />
          <Route path='/expire-insurance' element={<ExpireInsurance />} />
          <Route path='/home-type' element={<HomeType />} />
          <Route path='/ownership' element={<Ownership />} />
          <Route path='/bedrooms' element={<Bedrooms />} />
          <Route path='/year-built' element={<YearBuilt />} />
          <Route path='/square-footage' element={<SquareFootage />} />
          <Route path='/gender' element={<Gender />} />
          <Route path='/dob' element={<DOB />} />
          <Route path='/claims' element={<Claims />} />
          <Route path='/address' element={<Address />} />
          <Route path='/name' element={<Name />} />
          <Route path='/email-phone' element={<EmailPhone />} />
          <Route path='/submit' element={<Submit />} />
          <Route path='/thank-you' element={<ThankYou />} />
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  )
}