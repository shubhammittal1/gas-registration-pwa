// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginForm from './components/LoginForm';
// import ConsumerForm from './components/ConsumerForm';
// import ProviderForm from './components/ProviderForm';
// import SuccessScreen from './components/SuccessScreen';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginForm />} />
//         <Route path="/register/consumer" element={<ConsumerForm />} />
//         <Route path="/register/provider" element={<ProviderForm />} />
//         <Route path="/success" element={<SuccessScreen />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
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