import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Works from './pages/Home/howItWorks/Works';
import Pricing from './pages/Home/pricing/Pricing';
import FAQ from './pages/Home/FAQ/FAQ';
import Partners from './pages/Home/partners/Partners';
import ContactUs from './pages/Home/contactUs/ContactUs'
import Header from "./components/Header/Header";
import HideNav from "./components/HideNav/HideNav";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import CreateAccount from "./pages/signUp/createAccount/CreateAccount";
import Password from "./pages/signIn/password/Password";
import ProtectedRoute from "./services/ProtectedRoute";
import Dashboard from "./pages/dashboards/Dashboard";
import SelectInterest from "./pages/signUp/selectInterest/SelectInterest";
function App() {
 

  return (
    <BrowserRouter>
    <HideNav>
    <Header/>
    </HideNav>
    
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="works" element={<Works/>} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="partners" element={<Partners />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="/signUp/selectInterest" element={<SelectInterest />} />
        <Route path="createAccount" element={<CreateAccount />} />
        <Route path="/signIn/password" element={<Password/>} />
     <Route path="/signIn/dashboard" element={<ProtectedRoute />}>
     <Route path="/signIn/dashboard" element={<Dashboard />} />
     </Route>

      </Routes>
     
      
    </BrowserRouter>

  );
}

export default App;
