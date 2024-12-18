import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkedAlt} from 'react-icons/fa';
import { handleSubmit } from '../services/email-service.tsx';

const Contact: React.FC = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Handle form submission
  const handleFormSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to an API
    try{      
      await handleSubmit(e,formData, setIsSubmitting , setFormData);      
      setToastMessage('Your message has been sent successfully!')
      setToastType('success');
    } catch (error) {
      setToastMessage('Something went wrong, please try again.');
      setToastType('error');
      setIsSubmitting(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
        setToastType(null);
      }, 3000); // Toast disappears after 3 seconds
  
      return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
    }
  }, [toastMessage]);
  

  return (
    <div className="flex bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>I'm open to discuss anything related to Software Engineering or Job Opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:sarthakd.work2@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                sarthakd.work2@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaLinkedin className="inline-block text-green-400 mr-2" />
              <a href="http://www.linkedin.com/in/sarthakdeshmukh1999" target="_blank"  rel="noopener noreferrer" className="hover:underline">
                https://www.linkedin.com/in/sarthakdeshmukh1999
              </a>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span>Boston, Massachusetts, United States</span>
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleFormSubmitEmail}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows={5}
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
                {toastMessage && (
                    <div
                    className={`flex items-center space-x-2 p-2 transition-all duration-1000 ease-in-out transform ${
                      toastType === 'success'
                        ? 'text-white translate-x-0'
                        : toastType === 'error'
                        ? 'text-red translate-x-0'
                        : ''
                    }`}
                    >
                      <p>{toastMessage}</p>
                    </div>
                  )}
                </div>              
            </form>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
