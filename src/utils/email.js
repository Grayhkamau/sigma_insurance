import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const success = () => toast("Email Sent!",{ 
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
});
const failed = () => toast.error("Email not sent, please try again later!", 
        {position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
});
const emptyFields = () => toast.warn("Kinldy fill out all the fields!",{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
});



const sendEmail = async({client_email,client_name,message,subject},tempID) => {
    
    if(!client_email||!client_name||!message||!subject) {
        emptyFields()
        return;
    }

    emailjs.send('service_vl8xrqi', 'template_s4avc6l', {client_email,client_name,subject,message}, {publicKey: '76N0AtO7SFkve4KEv'})
    .then(
        (response) => {
            success()
        },
        (error) => {
            
            failed()
        },
      );
  }

  export default sendEmail;