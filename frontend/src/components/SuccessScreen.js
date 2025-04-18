// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const SuccessScreen = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h2>Success!</h2>
//       <p>Thank you for submitting your request. Our team will reach out via WhatsApp to activate your profile.</p>
//       <button onClick={() => navigate('/')}>Sign In</button>
//     </div>
//   );
// };

// export default SuccessScreen;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const SuccessScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="container success">
      <FaCheckCircle className="success-icon" />
      <h2>Success!</h2>
      <p className="message">
        Thank you for submitting your request, our <br/>support team will get in touch with you to <br/>activate your profile
      </p>
      <button onClick={() => navigate('/')} className="btn-success">
        Sign In
      </button>
      <div className="contact-whatsapp">
        <p>Contact us on <FaWhatsapp className="whatsapp-icon" /> <strong>Whatsapp</strong></p>
        <span className="contact-subtext">
          Contact our Support team on whatsapp to <br/> activate your profile.
        </span>
      </div>
    </div>
  );
};

export default SuccessScreen;