
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ProviderForm from './components/ProviderForm';
import ConsumerForm from './components/ConsumerForm';
import SuccessScreen from './components/SuccessScreen';
import './assets/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register/provider" element={<ProviderForm />} />
        <Route path="/register/consumer" element={<ConsumerForm />} />
        <Route path="/success" element={<SuccessScreen />} />
      </Routes>
    </Router>
  );
}

export default App;