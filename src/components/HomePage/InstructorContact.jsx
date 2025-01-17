import React,{useState} from 'react';
import './InstructorContact.css';
import  Navbar from '../navigation';
import Footer from './Footer';



const InstructorContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [confirmation, setConfirmation] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setConfirmation(`Email sent to ${formData.email}.`);


  };

  return (
    <div>
      <Navbar/>
    <div className="instructor-contact">
        <navigation/>
      <h2>Contact the Instructor</h2>
      <form onSubmit={handleSubmit}>
        <label className='la'>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className='la'>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label  className='la'>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Send Email</button>
      </form>
      {confirmation && <p className="confirmation">{confirmation}</p>}
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
};

export default InstructorContact;