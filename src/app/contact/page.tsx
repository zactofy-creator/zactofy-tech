export default function ContactPage() {
  return (
    <div className="w-full bg-[#fcfdf2]">

      {/* HERO */}
      <div className="py-24 px-6 lg:px-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Let’s Talk About Your Growth
        </h1>
        <p className="text-gray-600 text-lg mt-6">
          Have a project in mind or want to increase your online sales?
          Get in touch with our team today.
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2 gap-12 px-6 lg:px-20 pb-24 items-start">

        {/* FORM */}
        <div className="bg-white p-10 rounded-3xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-5 py-4 rounded-xl outline-none focus:border-[#4b5ae4]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-5 py-4 rounded-xl outline-none focus:border-[#4b5ae4]"
            />

            <input
              type="text"
              placeholder="Your Business"
              className="w-full border border-gray-300 px-5 py-4 rounded-xl outline-none focus:border-[#4b5ae4]"
            />

            <textarea
              placeholder="Tell us about your requirement"
              
              className="w-full border border-gray-300 px-5 py-4 rounded-xl outline-none focus:border-[#4b5ae4]"
            />

            <button
              type="submit"
              className="w-full bg-[#4b5ae4] text-white py-4 rounded-xl font-semibold hover:bg-[#3b49d1] transition"
            >
              Submit Inquiry
            </button>

          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-8">

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Call / WhatsApp
            </h3>
            <p className="text-gray-600 mt-2">+91 7800610280</p>

            <a
              href="https://wa.me/917800610280"
              target="_blank"
              className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Email Us
            </h3>
            <p className="text-gray-600 mt-2">info@zactofy.com</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Office Location
            </h3>
            <p className="text-gray-600 mt-2">
              India — Serving Clients Worldwide 🌍
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}