// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProviderForm = () => {
//   const [form, setForm] = useState({ orgName: '', orgType: '', gst: '', name: '', mobile: '' });
//   const navigate = useNavigate();

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async () => {
//     const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ ...form, role: 'provider', address: '' })
//     });
//     const data = await res.json();
//     if (data.success) navigate('/success');
//   };

//   return (
//     <div>
//       <h2>Provider Registration</h2>
//       <input name="orgName" placeholder="Organization Name" onChange={handleChange} />
//       <input name="orgType" placeholder="Organization Type" onChange={handleChange} />
//       <input name="gst" placeholder="GST Number" onChange={handleChange} />
//       <input name="name" placeholder="Your Name" onChange={handleChange} />
//       <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// };

// export default ProviderForm;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProviderForm = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     orgName: '',
//     orgType: '',
//     address: '',
//     gst: '',
//     name: '',
//     mobile: ''
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Provider Registered:', form);
//     navigate('/success');
//   };

//   return (
//     <div className="container">
//       <h2>Provider Registration</h2>
//       <p className="subtext">Fill following details to onboard</p>

//       <div className="form-group">
//         <label>Are you a ?</label>
//         <div className="radio-group">
//           <label>
//             <input type="radio" checked readOnly /> Gas Provider
//           </label>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Organization Name"
//             name="orgName"
//             value={form.orgName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <select
//             name="orgType"
//             value={form.orgType}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Organization Type</option>
//             <option value="Private">Private</option>
//             <option value="Government">Government</option>
//             <option value="NGO">NGO</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <textarea
//             placeholder="Organization Address"
//             name="address"
//             value={form.address}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="GST Number"
//             name="gst"
//             value={form.gst}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Your Name"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="tel"
//             placeholder="Mobile Number"
//             name="mobile"
//             value={form.mobile}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default ProviderForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBuilding, FaUser } from 'react-icons/fa';

const ProviderForm = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('Provider');
  const [orgName, setOrgName] = useState('');
  const [orgType, setOrgType] = useState('');
  const [gst, setGst] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isOrgNameFocused, setIsOrgNameFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);

  const handleRegister = () => {
    // Add your form validation or API logic here
    navigate('/success');
  };

  return (
    <div className="container">
      <h2>Provider Registration</h2>
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
        <select className="orgType" value={orgType} onChange={(e) => setOrgType(e.target.value)}>
          <option value="">Organization Type</option>
          <option value="private">Private</option>
          <option value="government">Government</option>
          <option value="ngo">NGO</option>
        </select>
      </div>

      <div className="form-group with-icon">
      {(!orgName && !isOrgNameFocused) && <FaBuilding className="input-icon" />}
        <label>GST Number</label>
        <input type="text" placeholder="Input text" value={gst} onFocus={() => setIsOrgNameFocused(true)}
          onBlur={() => setIsOrgNameFocused(false)} onChange={(e) => setGst(e.target.value)}
          className={`form-input ${(!orgName && !isOrgNameFocused) ? 'with-icon' : ''}`}  />
      </div>

      <div className="form-group with-icon">
              {(!name && !isNameFocused) && <FaUser className="input-icon" />}
              <label>Your Name</label>
              <input type="text" placeholder="Input text" value={name} onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)} onChange={(e) => setName(e.target.value)}
                className={`form-input ${(!name && !isNameFocused) ? 'with-icon' : ''}`} />
            </div>

      <div className="form-group mobile" >
        <label>Mobile Number</label>
        <input type="tel"  placeholder="Input text" value={mobile} onChange={(e) => setMobile(e.target.value)}  />
      </div>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default ProviderForm;