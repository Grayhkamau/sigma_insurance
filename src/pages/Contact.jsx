import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

import { useState } from 'react';
import sendEmail from "../utils/email";



export default function Contact() {

  const [formData, setFormData] = useState({
        client_name:'',
        client_email:'',
        subject:'',
        message:''
    })
    const onFormDataChange = (e)=>{
        e.preventDefault();
        setFormData(formData=>{
            return {...formData,[e.target.name]:e.target.value}
        });
    }
  const handleSubmit = (e) => {
    e.preventDefault()

    sendEmail(formData)
      .then(
        () => {

            setFormData({
                client_name:'',
                client_email:'',
                subject:'',
                message:''
            })
            
        }
      );
  }

  return (
    <div>
      {/* Header / Hero */}
      <div className="bg-gradient-to-r from-logoBlueStart to-logoBlueEnd text-white text-center">
        <h2 className="text-4xl font-extrabold text-black">Get in Touch</h2>
        <p className="mt-3 text-lg opacity-90 text-black">
          We’d love to hear from you. Reach out with any questions or feedback.
        </p>
      </div>
      

      {/* Contact Content */}
      <div className="my-16 flex flex-col md:flex-row gap-4 justify-around w-full">
        
         {/* Right: Contact Form */}
        <div className="w-full">
          <div className="card p-8 shadow-xl border-t-4 border-logoOrangeEnd">
            <h3 className="text-xl font-semibold text-logoNavy mb-6">Send us a Message</h3>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <label className="flex flex-col text-left">
                <span className="text-sm font-medium">Full Name</span>
                <input
                  name="client_name"
                  required
                  value={formData.client_name}
                  minLength={5}
                  onChange={onFormDataChange}
                  className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-logoBlueStart outline-none"
                />
              </label>

              <label className="flex flex-col text-left">
                <span className="text-sm font-medium">Email</span>
                <input
                  name="client_email"
                  type="email"
                  value={formData.client_email}
                  minLength={5}
                  onChange={onFormDataChange}
                  required
                  className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-logoBlueStart outline-none"
                />
              </label>

            <label className="flex flex-col text-left">
                <span className="text-sm font-medium">Subject</span>
                <input
                  maxLength={30}
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={onFormDataChange}
                  required
                  className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-logoBlueStart outline-none"
                />
              </label>

              <label className="flex flex-col text-left">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  onChange={onFormDataChange}
                  rows="5"
                  value={formData.message}
                  required
                  className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-logoBlueStart outline-none"
                />
              </label>

              <button
                type="submit"
                className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg w-fit cursor-pointer"
                style={{
                  background: "linear-gradient(90deg,#FF7A00,#FFD500)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-2 m-6">
          <h3 className="text-2xl font-bold text-logoNavy">Contact Information</h3>
          <p className="text-gray-600">
            Our team is here to answer your questions and provide support.
          </p>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-logoOrangeStart text-xl mt-1" />
            <p className="text-gray-700">
              P.O Box 52521 – 00100 Nairobi <br /> Westlands, Nairobi (physical location tbc)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-logoOrangeStart text-xl" />
            <a href="mailto:info@sigmainsurance.co.ke" className="text-logoBlueStart hover:underline">
              info@sigmainsurance.co.ke
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-logoOrangeStart text-xl" />
            <p className="text-gray-700">07*******</p>
          </div>

          {/* Map */}
          
        </div>

       
        
      </div>
      <div className="mt-6 rounded-lg overflow-hidden shadow-lg border">
            <iframe
              title="office-map"
              src="https://www.google.com/maps?q=Nairobi&output=embed"
              className="w-full h-56 border-0"
            />
          </div>
    </div>
  )
}
