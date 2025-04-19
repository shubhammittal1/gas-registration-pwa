import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt , FaBuilding, FaUser } from 'react-icons/fa';

const ConsumerForm = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('Consumer');
  const [orgName, setOrgName] = useState('');
  const [orgType, setOrgType] = useState('');
  const [orgAddress, setOrgAddress] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isOrgNameFocused, setIsOrgNameFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role,
          orgName,
          orgType,
          address: orgAddress,
          name,
          mobile,
        }),
      });
  
      if (response.ok) {
        navigate('/success');
      } else {
        alert('Registration failed.');
      }
    } catch (error) {
      console.error('Error registering consumer:', error);
      alert('Something went wrong.');
    }
  };
  

  return (
    <div className="container">
      <h2>Consumer Registration</h2>
      <div className="subheading">Fill Following Details to Onboard</div>

      <label className='userTypeTiltle'>Are you a ?</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="Provider"
            checked={role === 'Provider'}
            onChange={() => setRole('Provider')}
          />
          Gas Provider
        </label>
        <label>
          <input
            type="radio"
            value="Consumer"
            checked={role === 'Consumer'}
            onChange={() => setRole('Consumer')}
          />
          Consumer
        </label>
      </div>

      <div className="form-group with-icon">
      {(!orgName && !isOrgNameFocused) && <FaBuilding className="input-icon" />}
        <label>Organization Name</label>
        <input type="text" placeholder="Input text" value={orgName}  onFocus={() => setIsOrgNameFocused(true)}
          onBlur={() => setIsOrgNameFocused(false)} onChange={(e) => setOrgName(e.target.value)}
          className={`form-input ${(!orgName && !isOrgNameFocused) ? 'with-icon' : ''}`} />
      </div>

      <div className="form-group">
        <label>Organization Type</label>
        <select className="orgType" value={orgType}
          onChange={(e) => setOrgType(e.target.value)}
        >
          <option value="">Organization Type</option>
          <option value="private">Private</option>
          <option value="government">Government</option>
          <option value="ngo">NGO</option>
        </select>
      </div>

      <div className="form-group with-icon">
      {!isFocused && !orgAddress && ( <FaMapMarkerAlt className="input-icon" />)}
        <label>Organization Address</label>
        <input className={`form-input ${!isFocused && !orgAddress ? 'with-icon' : ''}`}
          type="text" placeholder="Input text" value={orgAddress} onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)} onChange={(e) => setOrgAddress(e.target.value)} />
      </div>

      <div className="form-group with-icon">
        {(!name && !isNameFocused) && <FaUser className="input-icon" />}
        <label>Your Name</label>
        <input type="text" placeholder="Input text" value={name} onFocus={() => setIsNameFocused(true)}
          onBlur={() => setIsNameFocused(false)} onChange={(e) => setName(e.target.value)}
          className={`form-input ${(!name && !isNameFocused) ? 'with-icon' : ''}`} />
      </div>

      <div className="form-group">
        <label>Mobile Number</label>
        <input type="tel" placeholder="Input text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      </div>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default ConsumerForm;