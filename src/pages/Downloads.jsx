import React from "react"
import { motion } from "framer-motion"
import { FaFileAlt, FaFileSignature, FaRegFilePdf } from "react-icons/fa"

export default function Downloads() {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-logoOrangeStart to-logoOrangeEnd text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold"
        >
          Downloads
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-3 text-lg opacity-90 max-w-2xl mx-auto"
        >
          Access important documents such as claim forms, application forms, and
          our customer service charter.
        </motion.p>
      </div>

      {/* Page Content */}
      <div className="py-16 flex flex-col gap-6">
        {/* Left: Document Previews / Icons */}
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-logoNavy">
            Available Documents
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DocCard
              icon={<FaFileAlt />}
              title="Claim Form"
              desc="Submit your claims easily and securely."
            />
            <DocCard
              icon={<FaFileSignature />}
              title="Application Form"
              desc="Apply for insurance products quickly."
            />
            <DocCard
              icon={<FaRegFilePdf />}
              title="Customer Service Charter"
              desc="Learn about our service standards and commitments."
            />
          </div>
        </div>

        {/* Right: Request Form */}
        <div className="flex-1">
          <div className="card p-8 shadow-xl border-t-4 border-logoBlueStart">
            <h3 className="text-xl font-semibold text-logoNavy mb-6">
              Request a Document
            </h3>
            <form className="flex flex-col gap-5">
              <label className="flex flex-col text-left">
                <span className="text-sm font-medium">Your Email</span>
                <input
                  type="email"
                  required
                  className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-logoBlueStart outline-none"
                  placeholder="you@example.com"
                />
              </label>

              <label className="flex flex-col text-left">
                <span className="text-sm font-medium">Document</span>
                <select className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-logoBlueStart outline-none">
                  <option>Claim Form</option>
                  <option>Application Form</option>
                  <option>Customer Service Charter</option>
                </select>
              </label>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
                  style={{
                    background: "linear-gradient(90deg,#0052A5,#00AEEF)",
                  }}
                >
                  Request
                </button>
                <button
                  type="reset"
                  className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function DocCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="card p-6 flex flex-col items-start gap-3 hover:shadow-lg transition"
    >
      <div className="text-3xl text-logoBlueStart">{icon}</div>
      <h4 className="font-semibold text-logoNavy">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </motion.div>
  )
}
