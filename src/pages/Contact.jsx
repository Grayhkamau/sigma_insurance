import React from 'react'

export default function Contact(){
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const subject = encodeURIComponent('Website Contact from ' + name)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:info@sigmainsurance.co.ke?subject=${subject}&body=${body}`
  }

  return (
    <div className="container py-16 flex flex-col gap-10">
      <h2 className="text-3xl font-bold text-logoNavy">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <h3 className="font-semibold text-logoBlueStart">Office</h3>
            <p className="text-gray-600 mt-2">
              P.O Box 52521 – 00100 Nairobi<br/>Westlands, Nairobi (physical location tbc)
            </p>
          </div>
          <p className="text-gray-600">Email: 
            <a href="mailto:info@sigmainsurance.co.ke" className="text-logoBlueStart ml-1">info@sigmainsurance.co.ke</a>
          </p>
          <p className="text-gray-600">Phone: 07*******</p>

          <div className="mt-4">
            <iframe 
              title="office-map" 
              src="https://www.google.com/maps?q=Nairobi&output=embed" 
              className="w-full h-48 rounded-lg border-0"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form className="card p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col">
              <span className="text-sm">Name</span>
              <input name="name" required className="mt-2 p-3 border rounded-md" />
            </label>

            <label className="flex flex-col">
              <span className="text-sm">Email</span>
              <input name="email" type="email" required className="mt-2 p-3 border rounded-md" />
            </label>

            <label className="flex flex-col">
              <span className="text-sm">Message</span>
              <textarea name="message" rows="5" required className="mt-2 p-3 border rounded-md" />
            </label>

            <div>
              <button type="submit" className="px-4 py-2 rounded-md text-white font-medium shadow"
                style={{ background: 'linear-gradient(90deg,#0052A5,#00AEEF)' }}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
