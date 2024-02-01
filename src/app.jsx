import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideBar from './components/sidebar';

// Pages
import Dasbhoard from './pages/dasbhoard'; 
import Statistics from './pages/statistics'; 
import HedronConnect from './pages/hadron_connect'; 
import Rewards from './pages/rewards';
import MdClinician from './pages/md_clinician'; 
import ThirdParty from './pages/third_party'; 
import SelfReportedData from './pages/self_reported_data'; 
import NeutronInterface from './pages/neutron_interface'; 
import Header from './components/header'; 
import ResearcherRequests from './pages/researcher_requests';
import Gluon from './pages/gluon';
import Monetisation from './pages/monetisation';
import QuarkReflection from './pages/quark_reflection';
import PopupsForDev from './pages/popups_for_dev';


function App() {
    return (
      <Router>
        <div className="quanmed_dashboard_app">
          <SideBar />
          <div className="routes_container">
            <Header />
            <Routes>
              <Route path="/" element={<Dasbhoard />} /> 
              <Route path="/statistics" element={<Statistics />} /> 
              <Route path="/headeron-connect" element={<HedronConnect />} /> 
              <Route path="/rewards" element={<Rewards />} /> 
              <Route path="/medical-record/clinician" element={<MdClinician />} /> 
              <Route path="/medical-record/third-party" element={<ThirdParty />} /> 
              <Route path="/medical-record/self-reported-data" element={<SelfReportedData />} /> 
              <Route path="/neutron" element={<NeutronInterface />} /> 
              <Route path="/researcher-requests" element={<ResearcherRequests />} /> 
              <Route path="/gluon" element={<Gluon />} /> 
              <Route path="/monetisation" element={<Monetisation />} /> 
              <Route path="/researcher-requests" element={<ResearcherRequests />} /> 
              <Route path="/quark-reflection" element={<QuarkReflection />} /> 
              <Route path="/popups-preview" element={<PopupsForDev />} /> 
            </Routes>
          </div>
        </div>
      </Router> 
    );
}

export default App;