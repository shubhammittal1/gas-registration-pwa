// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [mobile, setMobile] = useState('');
//   const [pin, setPin] = useState('');
//   const [role, setRole] = useState('consumer');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/signin`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ mobile, pin })
//     });

//     const data = await res.json();
//     if (data.success) alert('Login successful');
//     else alert('Login failed');
//   };

//   return (
//     <div>
//       <h2>Enter your Mobile Number</h2>
//       <label>
//         <input type="radio" value="provider" checked={role === 'provider'} onChange={() => setRole('provider')} /> Gas Provider
//         <input type="radio" value="consumer" checked={role === 'consumer'} onChange={() => setRole('consumer')} /> Consumer
//       </label>
//       <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
//       <input placeholder="PIN" value={pin} onChange={(e) => setPin(e.target.value)} type="password" />
//       <button onClick={handleLogin}>Sign In</button>
//       <button onClick={() => navigate(`/register/${role}`)}>New Registration</button>
//     </div>
//   );
// };

// export default LoginForm;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const getSortedCountryCodes = () => {
//   const codes = [
//     { code: '+1', flag: '🇺🇸' },
//     { code: '+7', flag: '🇷🇺' },
//     { code: '+20', flag: '🇪🇬' },
//     { code: '+33', flag: '🇫🇷' },
//     { code: '+34', flag: '🇪🇸' },
//     { code: '+44', flag: '🇬🇧' },
//     { code: '+49', flag: '🇩🇪' },
//     { code: '+60', flag: '🇲🇾' },
//     { code: '+61', flag: '🇦🇺' },
//     { code: '+81', flag: '🇯🇵' },
//     { code: '+86', flag: '🇨🇳' },
//     { code: '+91', flag: '🇮🇳' },
//     { code: '+92', flag: '🇵🇰' },
//     { code: '+880', flag: '🇧🇩' },
//     { code: '+966', flag: '🇸🇦' },
//     { code: '+971', flag: '🇦🇪' }
//   ];
//   return codes.sort((a, b) => parseInt(a.code) - parseInt(b.code));
// };

// const LoginForm = () => {
//   const [selectedCode, setSelectedCode] = useState('+1');
//   const [phone, setPhone] = useState('');
//   const [pin, setPin] = useState('');
//   const [role, setRole] = useState('consumer');
//   const [countryCodes, setCountryCodes] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCountryCodes(getSortedCountryCodes());
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // API login logic here
//     console.log('Login', { role, phone, pin });
//   };

//   return (
//     <div className="container">
//       <h2>Enter your Mobile Number</h2>
//       <p className="subtext">Contact your administrator for PIN</p>

//       <div className="form-group">
//         <label>Are you a ?</label>
//         <div className="radio-group">
//           <label>
//             <input
//               type="radio"
//               name="role"
//               value="provider"
//               checked={role === 'provider'}
//               onChange={() => setRole('provider')}
//             />
//             Gas Provider
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="role"
//               value="consumer"
//               checked={role === 'consumer'}
//               onChange={() => setRole('consumer')}
//             />
//             Consumer
//           </label>
//         </div>
//       </div>

//       <form onSubmit={handleLogin}>
//         <div className="form-group phone-section">
//           <select value={selectedCode} onChange={(e) => setSelectedCode(e.target.value)}>
//             {countryCodes.map(({ code, flag }) => (
//               <option key={code} value={code}>
//                 {flag} {code}
//               </option>
//             ))}
//           </select>
//           <input
//             type="tel"
//             placeholder="Mobile number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="password"
//             placeholder="PIN"
//             value={pin}
//             onChange={(e) => setPin(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit">Sign In</button>
//         <button
//           type="button"
//           className="outline"
//           onClick={() =>
//             navigate(role === 'consumer' ? '/register/consumer' : '/register/provider')
//           }
//         >
//           New Registration
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../assets/loginForm.css'; 
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ navigateToRegistration }) => {
  const [userType, setUserType] = useState('Consumer');
  const [mobile, setMobile] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log({ userType, mobile, pin });
  };
  const handleNewRegistration = () => {
    if (userType === 'Consumer') {
      navigate('/register/consumer');
    } else {
      navigate('/register/provider');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3 className="login-title">Enter your Mobile Number</h3>
        <p className="login-subtitle">Contact your administrator for PIN</p>
    
      
        <label className='userTypeTiltle'>Are you a ?</label>
        <div className="radio-group">

        <label>
            <input
              type="radio"
              value="Gas Provider"
              checked={userType === 'Gas Provider'}
              onChange={(e) => setUserType(e.target.value)}
            />
            Gas Provider
          </label>
          <label>
            <input
              type="radio"
              value="Consumer"
              checked={userType === 'Consumer'}
              onChange={(e) => setUserType(e.target.value)}
            />
            Consumer
          </label>
        </div>
        
        <PhoneInput
          country={'us'}
          value={mobile}
          onChange={setMobile}
          inputClass="phone-input"
          containerClass="phone-container"
          dropdownStyle={{ zIndex: 10000 }}
        />

        <input
          type="password"
          placeholder="PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="form-input"
        />

        <button className="btn-primary" onClick={handleSignIn}>
          Sign In
        </button>

        <button className="btn-outline" onClick={handleNewRegistration}>
          New Registration
        </button>
      </div>
    </div>
  );
};

export default LoginForm;

