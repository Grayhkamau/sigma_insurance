import React from "react"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

// import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Contact = ()=>{
//     const form = useRef();
 
//     const success = () => toast("Email Sent!",{ 
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light"});
//     const failed = () => toast.error("Email not sent, please try again later!", 
//         {position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light"});
//     const emptyFields = () => toast.warn("Kinldy fill out all the fields!",{
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light"
//         });

    
//     const [formData, setFormData] = useState({
//         from_name:'',
//         subject:'',
//         user_email:'',
//         message:''
//     })
//     const onFormDataChange = (e)=>{
//         // console.log(e.target.name,e.target.value)
//         e.preventDefault();
//         setFormData(formData=>{
//             return {...formData,[e.target.name]:e.target.value}
//         });
//     }
//   const sendEmail = (e) => {
//     e.preventDefault();
//     if(!formData.user_email||!formData.from_name||!formData.subject||!formData.message) {
//         emptyFields()
//         return;
//     }

//     emailjs
//       .sendForm('service_emyhrhk', 'template_3x9mcbg', form.current, {
//         publicKey: '76N0AtO7SFkve4KEv',
//       })
//       .then(
//         () => {
//             setFormData({
//                 from_name:'',
//                 subject:'',
//                 user_email:'',
//                 message:''
//             })
//             success()
//         },
//         (error) => {
//             failed()
//         },
//       );
//   };

export default function Contact() {

  
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get("name")
    const email = data.get("email")
    const message = data.get("message")
    const subject = encodeURIComponent("Website Contact from " + name)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:info@sigmainsurance.co.ke?subject=${subject}&body=${body}`
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
                <span className="text-sm font-medium">Name</span>
                <input
                  name="name"
                  required
                  className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-logoBlueStart outline-none"
                />
              </label>

              <label className="flex flex-col text-left">
                <span className="text-sm font-medium">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-logoBlueStart outline-none"
                />
              </label>

              <label className="flex flex-col text-left">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-logoBlueStart outline-none"
                />
              </label>

              <button
                type="submit"
                className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg w-fit"
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
