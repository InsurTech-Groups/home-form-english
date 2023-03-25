import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Lottie from 'lottie-react';
import Loading from "./assets/Loading.json"
import 'react-toastify/dist/ReactToastify.min.css';
import { userData } from './data/userData';
import { ipAddress } from './apis/ipCollection';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

const InsuranceStatus = lazy(() => import('./questions/InsuranceStatus')); 
const CurrentInsurance = lazy(() => import('./questions/CurrentInsurance'));
const ExpireInsurance = lazy(() => import('./questions/ExpireInsurance'));
const HomeType = lazy(() => import('./questions/HomeType'));
const Ownership = lazy(() => import('./questions/Ownership'));
const Bedrooms = lazy(() => import('./questions/Bedrooms'));
const YearBuilt = lazy(() => import('./questions/YearBuilt'));

const Address = lazy(() => import('./questions/Address'));
const Name = lazy(() => import('./questions/Name'));
const EmailPhone = lazy(() => import('./questions/EmailPhone'));
const Submit = lazy(() => import('./questions/Submit'));
const ThankYou = lazy(() => import('./questions/ThankYou'));


export default function App() {
  useEffect(() => {
    sessionStorage.setItem('userData local', userData)
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