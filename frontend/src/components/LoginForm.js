import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../assets/loginForm.css'; 
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [userType, setUserType] = useState('Consumer');
  const [mobile, setMobile] = useState('');
  const [dialCode, setDialCode] = useState('');
  const [pin, setPin] = useState('');
  const[country,setCountry]= useState('us');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    let strippedMobile = mobile.startsWith(dialCode)? mobile.slice(dialCode.length): mobile;
    if (!mobile) {
      setError('Mobile number is required');
      return;
    }
    if (!pin) {
      setError('PIN is required');
      return;
    }
          try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signin`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                role: userType.toLowerCase().includes('Provider') ? 'Provider' : 'Consumer',
                mobile: strippedMobile,
                pin,
              }),
            });

            const data = await response.json();

            if (response.ok) {
              console.log('Login successful:', data);
            } else {
              alert(data.error || 'Login failed.');
            }
          } catch (err) {
            console.error('Login error:', err);
            setError('Something went wrong.');
          }
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
          country={country}
          placeholder='Enter your mobile number'
          onChange={(value, data) => {
            setMobile(value);
            setDialCode(data.dialCode);
            setCountry(data.countryCode || 'us');
          }}
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

        {error && <div className="error-message">{error}</div>}

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