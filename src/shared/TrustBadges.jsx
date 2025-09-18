export default function TrustBadges(){
  return (
    <section className="py-10 bg-lightGray">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        {/* Replace with your real partner/trust badges if available */}
        
          
          <div style={{ background: 'linear-gradient(90deg,#0052A5,#00AEEF)' }} className="px-6 py-3 rounded-lg shadow text-gray-600 text-sm text-white">Trusted Partner</div>
        
      
          
          <div  style={{ background: 'linear-gradient(90deg,#FF7A00,#FFD500)' }} className="px-6 py-3 rounded-lg bg-white shadow text-gray-600 text-sm">ISO Ready</div>
        
        <div  style={{ background: 'linear-gradient(90deg,#00AEEF,#0052A5)' }} className="px-6 py-3 rounded-lg bg-gradient-to-r from-logoOrangeStart to-logoOrangeEnd text-white font-semibold shadow">
          Customer-first Claims
        </div>
      </div>
    </section>
  )
}


